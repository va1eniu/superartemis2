import express from "express";

const routes = express.Router();

import {
  obtenerProductos,
  agregarProducto,
  borrarProducto,
  actualizarProducto, 
  oneProducto} from "../controllers/productos.controllers.js";

routes.get("/all", obtenerProductos);

routes.post("/add", agregarProducto);

routes.delete("/del/:id", borrarProducto);

routes.patch("/upd/:id", actualizarProducto);

routes.get("/one", oneProducto);

export default routes;
