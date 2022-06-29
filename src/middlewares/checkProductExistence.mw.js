import database from "../database";

const checkProductExistenceMw = async (req, res, next) => {
  try {
    const productId = req.params.id;

    const findProduct = await database.query(
      `
        select
          *
        from
          products
        where
          id = $1;
      `,
      [productId]
    );

    if (findProduct.rowCount === 0) {
      return res.status(400).send({
        message: "Product not found",
      });
    }

    req.product = findProduct.rows[0];

    next();
  } catch (error) {
    return res.status(400).send({
      message: error.message,
    });
  }
};

export default checkProductExistenceMw;
