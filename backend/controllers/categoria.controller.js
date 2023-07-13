import Categoria from "../models/Categoria.js";

const obtenerCategorias = async (req, res) => {
  const categoria = await Categoria.find();
  res.json(categoria);
};

const agregarCategoria = async (req, res) => {
  const categoria = new Categoria(req.body);

  try {
    const nuevaCategoria = categoria.save();
    res.json(nuevaCategoria);
  } catch (error) {
    console.log(error);
  }
};

const borrarCategoria = async (req, res) => {
  try {
    await Categoria.deleteOne({ _id: req.params.id });
    res.status(204).send();
  } catch (error) {
    res.status(404);
    res.send({ error: "categoria no existe" });
  }
};

const actualizarCategoria = async (req, res) => {
  try {
    const categoria = await Categoria.findOne({ _id: req.params.id });
    if (req.body.CategoriaID) {
      categoria.CategoriaID = req.body.CategoriaID;
    }
    if (req.body.CategoriaNombre) {
      categoria.CategoriaNombre = req.body.CategoriaNombre;
    }
    if (req.body.Descripcion) {
      categoria.Descripcion = req.body.Descripcion;
    }
    if (req.body.Imagen) {
      categoria.Imagen = req.body.Imagen;
    }
  await categoria.save();
    res.send(categoria);
  } catch (error) {
    res.status(404);
    res.send({ error: "categoria no existe" });
  }
};

const oneCategoria = async (req, res) => {
  const categoria = await Categoria.find().limit(1);
  res.json(categoria);
};

export {
  obtenerCategorias,
  agregarCategoria,
  borrarCategoria,
  actualizarCategoria,
  oneCategoria,
};
