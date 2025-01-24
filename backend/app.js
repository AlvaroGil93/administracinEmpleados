import express from "express";
import dotenv from "dotenv";
import cors from 'cors';
import { connectionMongo } from "./src/config/dataBase.js";
import router from "./src/routes/empleado.Routes.js";
const app = express();
dotenv.config();
connectionMongo();

const port = process.env.PORT || 9000; 
console.log("PORT", port);
app.use(cors());

// Middlewares y rutas
app.use(express.json());

// Usar las rutas de empleados
app.use('/api', router);

// Iniciar el servidor
app.listen(port, () => {
  console.log("We are connected to IronHorse on port", port);
});
