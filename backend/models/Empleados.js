import mongoose from "mongoose";

const empleadosSchema = mongoose.Schema({
  EmpleadoID: {
    type: String,
    required: true,
    trim: true,
  },
  Apellidos: {
    type: String,
    required: true,
    trim: true,
  },

  Nombres: {
    type: String,
    required: true,
    trim: true,
  },

  Cargo: {
    type: String,
    required: true,
    trim: true,
  },

  Titulo: {
    type: String,
    required: true,
    trim: true,
  },

  FechaNacimiento: {
    type: String,
    required: true,
    trim: true,
  },

  FechaContrato: {
    type: String,
    required: true,
    trim: true,
  },

  Direccion: {
    type: String,
    required: true,
    trim: true,
  },

  Ciudad: {
    type: String,
    required: true,
    trim: true,
  },

  Region: {
    type: String,
    required: true,
    trim: true,
  },

  CodigoPostal: {
    type: String,
    required: true,
    trim: true,
  },

  Telefono: {
    type: String,
    required: true,
    trim: true,
  },

  Extension: {
    type: String,
    required: true,
    trim: true,
  },

  Foto: {
    type: String,
    required: true,
    trim: true,
  },
},
{
    timeStamp:true
});


const Empleados = mongoose.model("emplrados" , empleadosSchema);

export default Empleados;
