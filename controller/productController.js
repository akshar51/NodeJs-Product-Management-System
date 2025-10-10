const Product = require("../models/product")

module.exports.addProductPage = (req,res)=>{
    res.render('pages/addProduct')
}

module.exports.tablePage = async (req,res)=>{
    let product = await Product.find()
    res.render('pages/viewProduct',{product})
}

module.exports.addProduct = async (req,res)=>{
    try {
        await Product.create(req.body)
        res.redirect(req.get('Referrer')||'/')
    } catch (error) {
        console.log(error.message)
        res.redirect(req.get('Referrer')||'/')
    }
}

module.exports.delete = async (req,res)=>{
    try {
        let {id} = req.params
        await Product.findByIdAndDelete(id)
        res.redirect(req.get('Referrer')||'/')
    } catch (error) {
        console.log(error.message)
        res.redirect(req.get('Referrer')||'/')
    }
}

module.exports.editPage = async(req,res)=>{
    try {
        let {id} = req.params;
        let product = await Product.findById(id)
        res.render('pages/editProduct',{product})
    } catch (error) {
        console.log(error.message)
        res.render('pages/editProduct',{product : []})
    }
}

module.exports.update = async(req,res)=>{
    try {
        let {id} = req.params;
        await Product.findByIdAndUpdate(id,req.body,{new:true})
        res.redirect('/table')
    } catch (error) {
        console.log(error.message)
        res.redirect('/table')
    }
}