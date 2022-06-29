import { Router } from "express";
import {
  createCategoryCtrl,
  deleteCategoryByIdCtrl,
  getAllCategoriesCtrl,
  getCategoryByIdCtrl,
  patchCategoryByIdCtrl,
} from "../controllers/categories.ctrl";
import checkCategoryExistenceMw from "../middlewares/checkCategoryExistence.mw";

const routes = Router();

routes.post("", createCategoryCtrl);
routes.get("", getAllCategoriesCtrl);
routes.get("/:id", checkCategoryExistenceMw, getCategoryByIdCtrl);
routes.patch("/:id", checkCategoryExistenceMw, patchCategoryByIdCtrl);
routes.delete("/:id", checkCategoryExistenceMw, deleteCategoryByIdCtrl);

export default routes;
