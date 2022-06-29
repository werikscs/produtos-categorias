import database from "../../database";

const createCategorySvc = async (data) => {
  try {
    const res = await database.query(
      `
      insert into
        categories(name)
      values
        ($1)
      returning
        id, name;
      `,
      [data.name]
    );

    const feedback = {
      message: "Category created",
      category: res.rows[0],
    };

    return feedback;
  } catch (error) {
    throw new Error(error);
  }
};

export default createCategorySvc;
