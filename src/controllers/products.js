//Controladores para los productos

const Product = require('../models/productsModel');


//-----------
const crear = async(req,res)=>{
    
    //Guardo la informacion de mi producto en mi modelo
    const nuevoProducto = Product ({
        nombre:req.body.nombre,
        precio:req.body.precio,
        tipo:req.body.tipo,
        imagen:req.file.originalname
    })
    
    const guardar = await nuevoProducto.save();
    console.log(guardar);
    
    try {
        res.status(200).json({mensaje:'Producto guardado correctamente'})
    
    } catch (error) {
        res.status(404).json({mensaje:'Producto no guardado'})
    }
}
 
//-----------
const editar = async(req,res)=>{

    try {
        //Paso como parametro de la petición para poder buscar el elemento a editar y modifico su cuerpo por medio del formulario.
       const editar = await Product.findByIdAndUpdate(req.params['id'],req.body);
        console.log(editar);

        res.status(201).json({mensaje:'Editado correctamente'})

    } catch (error) {
      
        res.status(404).json({mensaje:'No se encuentra el producto'})
    
    }
}


// --------------
const eliminar = async(req,res)=>{
    try {

        //Le paso como parametro el id que viene en el request y que tiene que eliminar.
        await Product.findByIdAndRemove(req.params['id']);
        
        res.status(200).json({mensaje:'Eliminado correctamente'});

    } catch (error) {
        res.status(404).json({mensaje:'No se encuentra el producto para eliminar'})
    }
}


module.exports = {
    crear,
    editar,
    eliminar
}