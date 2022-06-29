import database from "../../database";

const getAllProductsSvc = async () => {
  try {
    const res = await database.query(
      `
        select
          *
        from
          products;
      `
    );

    return res.rows;
  } catch (error) {
    throw new Error(error);
  }
};

export default getAllProductsSvc;
