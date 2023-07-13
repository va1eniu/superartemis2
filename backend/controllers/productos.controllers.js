import Productos from "../models/Productos.js";

const obtenerProductos = async (req, res) => {
  const categoria = await Productos.find();
  res.json(categoria);
};

const agregarProducto = async (req, res) => {
  const categoria = new Productos(req.body);

  try {
    const nuevaCategoria = categoria.save();
    res.json(nuevaCategoria);
  } catch (error) {
    console.log(error);
  }
};

const borrarProducto = async (req, res) => {
  try {
    await Productos.deleteOne({ _id: req.params.id });
    res.status(204).send();
  } catch (error) {
    res.status(404);
    res.send({ error: "categoria no existe" });
  }
};

const actualizarProducto = async (req, res) => {
  try {
    const categoria = await Productos.findOne({ _id: req.params.id });
    if (req.body.ProductoID) {
      categoria.ProductoID = req.body.ProductoID;
    }
    if (req.body.ProductoNombre) {
      categoria.ProductoNombre = req.body.ProductoNombre;
    }
    if (req.body.ProveedorID) {
      categoria.ProveedorID = req.body.ProveedorID;
    }
    if (req.body.CategoriaID) {
      categoria.CategoriaID = req.body.CategoriaID;
    }
    if (req.body.CantidadPorUnidad) {
      categoria.CantidadPorUnidad = req.body.CantidadPorUnidad;
    }
    if (req.body.PrecioUnidad) {
      categoria.PrecioUnidad = req.body.PrecioUnidad;
    }
    if (req.body.UnidadesEnExistencia) {
      categoria.UnidadesEnExistencia = req.body.UnidadesEnExistencia;
    }
    if (req.body.UnidadesEnPedido) {
      categoria.UnidadesEnPedido = req.body.UnidadesEnPedido;
    }
    if (req.body.NivelNuevoPedido) {
      categoria.NivelNuevoPedido = req.body.NivelNuevoPedido;
    }
    if (req.body.Suspendido) {
      categoria.Suspendido = req.body.Suspendido;
    }

    await categoria.save();
    res.send(categoria);
  } catch (error) {
    res.status(404);
    res.send({ error: "categoria no existe" });
  }
};

const oneProducto = async (req, res) => {
  const categoria = await Productos.find().limit(1);
  res.json(categoria);
};

export {
  obtenerProductos,
  agregarProducto,
  borrarProducto,
  actualizarProducto,
  oneProducto,
};
