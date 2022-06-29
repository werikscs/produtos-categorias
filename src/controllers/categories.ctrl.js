import createCategorySvc from "../services/categories/createCategory.svc";
import deleteCategoryByIdSvc from "../services/categories/deleteCategoryById.svc";
import getAllCategoriesSvc from "../services/categories/getAllCategories.svc";
import getCategoryByIdSvc from "../services/categories/getCategoryById.svc";
import patchCategoryByIdSvc from "../services/categories/patchCategoryById.svc";

//post create category
export const createCategoryCtrl = async (req, res) => {
  try {
    const data = req.body;
    const newCategory = await createCategorySvc(data);
    return res.status(201).json(newCategory);
  } catch (error) {
    return res.status(400).send({
      message: error.message,
    });
  }
};

//get get all categories
export const getAllCategoriesCtrl = async (req, res) => {
  try {
    const categories = await getAllCategoriesSvc();
    return res.status(200).json(categories);
  } catch (error) {
    return res.status(400).send({
      message: error.message,
    });
  }
};

//get get category by id
export const getCategoryByIdCtrl = (req, res) => {
  const categoryReq = req.category;
  const category = getCategoryByIdSvc(categoryReq);
  return res.status(200).json(category);
};

//patch patch category by id
export const patchCategoryByIdCtrl = async (req, res) => {
  try {
    const categoryId = req.params.id;
    const data = req.body;
    const categoryPatched = await patchCategoryByIdSvc(categoryId, data);

    return res.status(200).json(categoryPatched);
  } catch (error) {
    return res.status(400).send({
      message: error.message,
    });
  }
};

//delete delete category by id
export const deleteCategoryByIdCtrl = async (req, res) => {
  try {
    const categoryId = req.params.id;
    const deletedCategory = await deleteCategoryByIdSvc(categoryId);

    return res.status(204).json(deletedCategory);
  } catch (error) {
    return res.status(400).send({
      message: error.message,
    });
  }
};
