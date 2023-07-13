import mongoose from "mongoose";

const categoriaSchema = mongoose.Schema(
  {
    CategoriaID: {
      type: String,
      required: true,
      trim: true, 
    },
    CategoriaNombre: {
      type: String,
      required: true,
      trim: true,
    },

    Descripcion: {
      type: String,
      required: true,
      trim: true,
    },

    Imagen: {
      type: String,
      required: true,
      trim: true,
    },
  },
  { timeStamp: true }
);

const Categoria = mongoose.model("categoria", categoriaSchema);

export default Categoria;
