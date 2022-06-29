import database from "../../database";

const getAllCategoriesSvc = async () => {
  try {
    const res = await database.query(
      `
      select
        *
      from
        categories;
      `
    );
    return res.rows;
  } catch (error) {
    throw new Error(error);
  }
};

export default getAllCategoriesSvc;
