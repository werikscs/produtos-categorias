import database from "../../database";

const patchCategoryByIdSvc = async (categoryId, data) => {
  try {
    let query = "update categories set ";
    const keys = Object.keys(data);
    const values = Object.values(data);

    keys.forEach((key, index) => {
      query += `${key} = \$${(index += 1)}, `;
    });

    query = query.slice(0, -2);

    query += ` where id = ${categoryId} returning *;`;

    const res = await database.query(query, values);

    const feedback = {
      message: "Category patched",
      category: res.rows[0],
    };

    return feedback;
  } catch (error) {
    throw new Error(error);
  }
};

export default patchCategoryByIdSvc;
