import { Router } from "express";
import {
  createProductCtrl,
  deleteProductByIdCtrl,
  getAllProductsCtrl,
  getProductsByCategoryIdCtrl,
  getProductByIdCtrl,
  patchProductByIdCtrl,
} from "../controllers/products.ctrl";
import checkCategoryExistenceMw from "../middlewares/checkCategoryExistence.mw";
import checkProductExistenceMw from "../middlewares/checkProductExistence.mw";

const routes = Router();

routes.post("", createProductCtrl);
routes.get("", getAllProductsCtrl);
routes.get("/:id", checkProductExistenceMw, getProductByIdCtrl);
routes.patch("/:id", checkProductExistenceMw, patchProductByIdCtrl);
routes.delete("/:id", checkProductExistenceMw, deleteProductByIdCtrl);
routes.get(
  "/category/:id",
  checkCategoryExistenceMw,
  getProductsByCategoryIdCtrl
);

export default routes;
