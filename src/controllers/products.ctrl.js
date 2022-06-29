import createProductSvc from "../services/products/createProduct.svc";
import deleteProductByIdSvc from "../services/products/deleteProductById.svc";
import getAllProductsSvc from "../services/products/getAllProducts.svc";
import getProductsByIdSvc from "../services/products/getProductById.svc";
import getProductsByCategoryIdSvc from "../services/products/getProductsByCategoryId.svc";
import patchProductByIdSvc from "../services/products/patchProductById.svc";

export const createProductCtrl = async (req, res) => {
  try {
    const data = req.body;
    const newProduct = await createProductSvc(data);

    return res.status(201).json(newProduct);
  } catch (error) {
    return res.status(400).send({
      message: error.message,
    });
  }
};

export const getAllProductsCtrl = async (req, res) => {
  try {
    const products = await getAllProductsSvc();
    return res.status(200).json(products);
  } catch (error) {
    return res.status(400).send({
      message: error.message,
    });
  }
};

export const getProductByIdCtrl = (req, res) => {
  const productReq = req.product;
  const product = getProductsByIdSvc(productReq);
  return res.status(200).json(product);
};

export const patchProductByIdCtrl = async (req, res) => {
  try {
    const productId = req.params.id;
    const data = req.body;
    const productPatched = await patchProductByIdSvc(productId, data);

    return res.status(200).json(productPatched);
  } catch (error) {
    return res.status(400).send({
      message: error.message,
    });
  }
};

export const deleteProductByIdCtrl = async (req, res) => {
  try {
    const productId = req.params.id;
    const deletedProduct = await deleteProductByIdSvc(productId);

    return res.status(204).json(deletedProduct);
  } catch (error) {
    return res.status(400).send({
      message: error.message,
    });
  }
};

export const getProductsByCategoryIdCtrl = async (req, res) => {
  try {
    const categoryId = req.params.id;
    const productsByCategory = await getProductsByCategoryIdSvc(categoryId);

    return res.status(200).json(productsByCategory);
  } catch (error) {
    return res.status(400).send({
      message: error.message,
    });
  }
};
