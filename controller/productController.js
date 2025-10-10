const Product = require("../models/product");
const fs = require("fs");
const path = require("path");

module.exports.addProductPage = (req, res) => {
  res.render("pages/addProduct");
};

module.exports.tablePage = async (req, res) => {
  let product = await Product.find();
  res.render("pages/viewProduct", { product });
};

module.exports.addProduct = async (req, res) => {
  try {
    let images = req.file ? req.file.path : "";
    await Product.create({ ...req.body, images });
    res.redirect(req.get("Referrer") || "/");
  } catch (error) {
    console.log(error.message);
    res.redirect(req.get("Referrer") || "/");
  }
};

module.exports.delete = async (req, res) => {
  try {
    let { id } = req.params;
    let product = await Product.findByIdAndDelete(id);

    if (product && product.images && product.images.length > 0) {
      let imagePath = path.join(__dirname, "..", product.images[0]);
      if (fs.existsSync(imagePath)) {
        fs.unlinkSync(imagePath);
      }
    }

    res.redirect(req.get("Referrer") || "/");
  } catch (error) {
    console.log(error.message);
    res.redirect(req.get("Referrer") || "/");
  }
};

module.exports.editPage = async (req, res) => {
  try {
    let { id } = req.params;
    let product = await Product.findById(id);
    res.render("pages/editProduct", { product });
  } catch (error) {
    console.log(error.message);
    res.render("pages/editProduct", { product: [] });
  }
};

module.exports.update = async (req, res) => {
  try {
    let { id } = req.params;
    await Product.findByIdAndUpdate(id, req.body, { new: true });
    res.redirect("/table");
  } catch (error) {
    console.log(error.message);
    res.redirect("/table");
  }
};
