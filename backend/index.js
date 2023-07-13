import express from "express";
import dotenv from "dotenv";
import condectarDB from "./config/config.js";
import router from "./routes/categorias.routes.js";
import routerProductos from "./routes/productos.routes.js";

const app = express();

app.use(express.json());

dotenv.config();

app.use("/categoria", router);

app.use("/productos", routerProductos);

const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log(`listen on port ${PORT}`);
});

condectarDB();
