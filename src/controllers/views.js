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


//Registro ----------
const registro = async(req,res)=>{
    try{
        res.status().json({mensaje:"Registro de usuario"})
    }catch(err){
        res.status(404).json(err)
    }
};

//Panel de administrador ----------

const admin = async(req,res) =>{
    try {
        res.json({mensaje:'AdministrarProductos'})
    } catch (error) {
        res.json(error)
    }
};

//Panel para crear

const crear = async(req,res) =>{
    try {
        res.json({mensaje:'Crear Producto'})
    } catch (error) {
        res.json(error)
    }
};

//Panel de edicion
const editar =  async(req,res) =>{
    try {
        res.json({mensaje:'EditarProducto'})
    } catch (error) {
        res.json(error)
    }
};

module.exports = {
    principal,
    registro,
    admin,
    crear,
    editar
}