import database from "../../database";

const patchProductByIdSvc = async (productId, data) => {
  try {
    const product = await database.query(
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

    if (!product.rowCount) {
      throw new Error("Product not found");
    }

    let query = "update products set ";
    const keys = Object.keys(data);
    const values = Object.values(data);

    keys.forEach((key, index) => {
      query += `${key} = \$${(index += 1)}, `;
    });

    query = query.slice(0, -2);

    query += ` where id = '${productId}' returning *;`;

    const res = await database.query(query, values);

    const { name } = res.rows[0];

    const feedback = {
      message: "Product updated",
      product: { name, productId },
    };

    return feedback;
  } catch (error) {
    throw new Error(error);
  }
};

export default patchProductByIdSvc;
