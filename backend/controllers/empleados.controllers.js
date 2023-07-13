import Empleados from "../models/empleados";

const obtenerEmpleados = async (req, res) => {
  const empleado = await Empleados.find();
  res.json(empleado);
};

const agregarEmpleado = async (req, res) => {
  const empleado = new Empleados(req.body);
  try {
    const nuevoEmpleado = empleado.save();
    res.json(nuevoEmpleado);
  } catch (error) {
    console.log(error);
  }
};

const borrarEmpleado = async (req, res) => {
  try {
    await Empleados.deleteOne({ _id: req.params.id });
    res.status(204).send();
  } catch (error) {
    res.status(404);
    res.send({ error: "empleado no figura" });
  }
};

const actualizarEmpleado = async (res, req) => {
  try {
    const empleado = await Empleados.findOne({ _id: params.id });
    if (req.body.EmpleadoID) {
      empleado.EmpleadoID = req.body.EmpleadoID;
    }
    if (req.body.Apellidos) {
      empleado.Apellidos = req.body.Apellidos;
    }
    if (req.body.Nombres) {
      empleado.Nombres = req.body.Nombres;
    }
    if (req.body.Cargo) {
      empleado.Cargo = req.body.Cargo;
    }
    if (req.body.Titulo) {
      empleado.Titulo = req.body.Titulo;
    }
    if (req.body.FechaNacimiento) {
      empleado.FechaNacimiento = req.body.FechaNacimiento;
    }
    if (req.body.FechaContrato) {
      empleado.FechaContrato = req.body.FechaContrato;
    }
    if (req.body.Direccion) {
      empleado.Direccion = req.body.Direccion;
    }
    if (req.body.Ciudad) {
      empleado.Ciudad = req.body.Ciudad;
    }
    if (req.body.Region) {
      empleado.Region = req.body.Region;
    }
    if (req.body.CodigoPostal) {
      empleado.CodigoPostal = req.body.CodigoPostal;
    }
    if (req.body.Pais) {
      empleado.Pais = req.body.Pais;
    }
    if (req.body.Telefono) {
      empleado.Telefono = req.body.Telefono;
    }
    if (req.body.Extension) {
      empleado.Extension = req.body.Extension;
    }
    if (req.body.Foto) {
      empleado.Foto = req.body.Foto;
    }

    await empleado.save();
    res.send(empleado)
  } catch (error) {
    res.status(404);
    res.send({error:"no se pudo agregar"})
  }
};

const oneEmpleado = async (res, req) =>{
    const empleado = Empleados.find().limit(1);
    res.json(empleado);
};

export{
    obtenerEmpleados,
    agregarEmpleado,
    actualizarEmpleado,
    borrarEmpleado,
    oneEmpleado,
}
