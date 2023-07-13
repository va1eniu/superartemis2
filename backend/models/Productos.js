import mongoose from "mongoose";

const productosSchema = mongoose.Schema(
  {
    ProductoID: {
      type: String,
      required: true,
      trim: true,
    },

    ProductoNombre: {
      type: String,
      required: true,
      trim: true,
    },
    ProveedorID: {
      type: String,
      required: true,
      trim: true,
    },
    CategoriaID: {
      type: String,
      required: true,
      trim: true,
    },

    CantidadPorUnidad: {
      type: String,
      required: true,
      trim: true,
    },
    PrecioUnidad: {
      type: String,
      required: true,
      trim: true,
    },

    UnidadesEnExistencia: {
      type: String,
      required: true,
      trim: true,
    },
    UnidadesEnPedido: {
      type: String,
      required: true,
      trim: true,
    },

    NivelNuevoPedido: {
      type: String,
      required: true,
      trim: true,
    },

    Suspendido: {
      type: String,
      required: true,
      trim: true,
    },
  },
  { 
    timeStamp: true 
  }
);

const Productos = mongoose.model("productos", productosSchema);

export default Productos;
