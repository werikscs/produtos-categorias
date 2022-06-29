import database from "../../database";

const deleteProductByIdSvc = async (productId) => {
  try {
    const res = await database.query(
      `
        delete from
          products
        where
          id = $1
        returning *;
      `,
      [productId]
    );

    if (!res.rowCount) {
      throw new Error("Product not found");
    }

    const { name } = res.rows[0];

    const feedback = {
      message: "Product deleted",
      product: { name, productId },
    };

    return feedback;
  } catch (error) {
    throw new Error(error);
  }
};

export default deleteProductByIdSvc;
