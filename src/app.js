import "dotenv/config";

import express from "express";

import categoriesRoutes from "./routers/categories.routes";
import productsRoutes from "./routers/products.routes";

import { startDatabase } from "./database/index";

const PORT = process.env.PORT || 3000;
const app = express();

app.use(express.json());
app.use("/categories", categoriesRoutes);
app.use("/products", productsRoutes);

app.listen(PORT, () => {
  console.log(`They see me rollin', on port ${PORT}.`);
  startDatabase();
});

export default app;
