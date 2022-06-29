import database from "../../database";

const getProductsByCategoryIdSvc = async (categoryId) => {
  try {
    const res = await database.query(
      `
        select
          p.name,
          p.price,
          c.name as category
        from
          products as p
        inner join
          categories as c
          on p.category_id = c.id
        where
          c.id = $1;
      `,
      [categoryId]
    );

    return res.rows;
  } catch (error) {
    throw new Error(error);
  }
};

export default getProductsByCategoryIdSvc;
