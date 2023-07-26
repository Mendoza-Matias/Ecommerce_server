//Controladores (Vistas metodo GET)
const Product = require('../models/productsModel');


const principal = async(req,res)=>{

    const todosLosProductos = await Product.find();

    try{
        res.status(200).json({productos:todosLosProductos})
    }catch(err){
        res.status(404).json(err)
    }
};

const oneProduct = async(req,res)=>{

    const unProducto = await Product.findById(req.params['id']);

    try{
        res.status(200).json({producto:unProducto})
    }catch(err){
        res.status(404).json(err)
    }
};


module.exports = {
    oneProduct,
    principal
}