import database from "../../database";

const deleteCategoryByIdSvc = async (categoryId) => {
  try {
    const res = await database.query(
      `
      delete from
        categories
      where
        id = $1
      returning *;
      `,
      [categoryId]
    );

    // if (!res.rowCount) {
    //   throw new Error("Category not found");
    // }

    // const feedback = {
    //   message: "Category deleted",
    //   category: res.rows[0],
    // };

    return res;
  } catch (error) {
    throw new Error(error);
  }
};

export default deleteCategoryByIdSvc;
