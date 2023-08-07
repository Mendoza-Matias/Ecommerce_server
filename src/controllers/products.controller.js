//Controladores para los productos
var path = require('path')

const Product = require('../models/productsModel');


//Vista principal de los productos
const principalProductos = async (req, res) => {

  const todosLosProductos = await Product.find();

  try {
    res.status(200).json({ productos: todosLosProductos })
  } catch (err) {
    res.status(404).json(err)
  }
};

//Ver un solo producto
const oneProduct = async (req, res) => {

  const unProducto = await Product.findById(req.params['id']);

  try {
    res.status(200).json({ producto: unProducto })
  } catch (err) {
    res.status(404).json(err)
  }
};


const previewProduct = async (req, res) => {
  const unProducto = await Product.findById(req.params['id']);
  const imagen = '/' + unProducto.imagen
  // Tenemos que setear la ruta de manera que pueda funcionar adecuadamente, luego podes probar algunos logs para verificarlo
  try {
    res.sendFile(path.resolve() + imagen)
    //O puede usar res.download para descargar el archivo 
    // Necesitas path.resolve por que para mandar un archivo necesitas la ruta absoluta
  } catch (err) {

    res.status(404).json(err)
    console.log(err)
  }
};


//Controlador de panel de administrador---
const admin = async (req, res) => {
  try {
    res.status(200).json({ mensaje: 'AdministrarProductos' })
  } catch (error) {
    res.status(404).json(error)
  }
};


//Controlador de vista para crear producto --
const crear = async (req, res) => {
  try {
    res.status(200).json({ mensaje: 'Crear Producto' })
  } catch (error) {
    res.sttus(404).json(error)
  }
};

//Controlador de vista para editar producto --
const editar = async (req, res) => {
  try {
    res.status(200).json({ mensaje: 'EditarProducto' })
  } catch (error) {
    res.status(404).json(error)
  }
};


//-----------
const crearProducto = async (req, res) => {

  //Guardo la informacion de mi producto en mi modelo
  const nuevoProducto = Product({
    nombre: req.body.nombre,
    precio: req.body.precio,
    tipo: req.body.tipo,
    imagen: req.file.path
  })


  // Antes estaba con req.file.originalname, cuando quieras llamar a ese archivo necesitaras la ruta

  const guardar = await nuevoProducto.save();
  console.log(guardar);

  try {
    res.status(200).json({ mensaje: 'Producto guardado correctamente' })

  } catch (error) {
    res.status(406).json({ mensaje: 'Producto no guardado' })
  }
}

//-----------
const editarProducto = async (req, res) => {

  try {
    //Paso como parametro de la petición para poder buscar el elemento a editar y modifico su cuerpo por medio del formulario.
    const editar = await Product.findByIdAndUpdate(req.params['id'], req.body);
    console.log(editar);

    res.status(201).json({ mensaje: 'Editado correctamente' })

  } catch (error) {

    res.status(304).json({ mensaje: 'No se ha podido modificar' })

  }
}


// --------------
const eliminarProducto = async (req, res) => {
  try {

    //Le paso como parametro el id que viene en el request y que tiene que eliminar.
    await Product.findByIdAndRemove(req.params['id']);

    res.status(200).json({ mensaje: 'Eliminado correctamente' });

  } catch (error) {
    res.status(404).json({ mensaje: 'No se encuentra el producto para eliminar' })
  }
}


module.exports = {
  principalProductos,
  oneProduct,
  admin,
  crear,
  editar,
  crearProducto,
  editarProducto,
  eliminarProducto,
  previewProduct
}
