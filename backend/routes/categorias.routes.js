import express from "express";

const routes = express.Router();

import {
  obtenerCategorias,
  agregarCategoria,
  borrarCategoria,
  actualizarCategoria, 
  oneCategoria} from "../controllers/categoria.controller.js";

routes.get("/all", obtenerCategorias);

routes.post("/add", agregarCategoria);

routes.delete("/del/:id", borrarCategoria);

routes.patch("/upd/:id", actualizarCategoria);

routes.get("/one", oneCategoria);

export default routes;
