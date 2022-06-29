import database from "../../database";

import { v4 as uuidv4 } from "uuid";

const createProductSvc = async (data) => {
  try {
    const findCategory = await database.query(
      `
        select
          *
        from
          categories
        where
          id = $1;
      `,
      [data.category_id]
    );

    if (!findCategory.rowCount) {
      throw new Error("Category not found");
    }

    const res = await database.query(
      `
        insert into
          products(id, name, price, category_id)
        values
          ($1, $2, $3, $4)
        returning *;
      `,
      [uuidv4(), data.name, data.price, data.category_id]
    );

    const { name, id } = res.rows[0];

    const feedback = {
      message: "Product created",
      product: { name, id },
    };

    return feedback;
  } catch (error) {
    throw new Error(error);
  }
};

export default createProductSvc;
