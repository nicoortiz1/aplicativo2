import express from "express";
import * as middlewares from "./config/middleware";
import * as database from "./config/database";
import * as routes from "./config/routes";
import productRouter from "./routes/product.routes"; 

// inicialization
const app = express();

// settings
app.set("port", process.env.PORT || 3000);

// Connect to the database
database.configure();

// Middlewares
middlewares.configure(app);

// Routes
routes.register(app);

// Productos
app.use("/api/products", productRouter);

export default app;
