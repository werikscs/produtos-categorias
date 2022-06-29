import database from "../database";

const checkCategoryExistenceMw = async (req, res, next) => {
  try {
    const categoryId = req.params.id;

    const findCategory = await database.query(
      `
        select
          *
        from
          categories
        where
          id = $1;
      `,
      [categoryId]
    );

    if (findCategory.rowCount === 0) {
      return res.status(400).send({
        message: "Category not found",
      });
    }

    req.category = findCategory.rows[0];

    next();
  } catch (error) {
    return res.status(400).send({
      message: error.message,
    });
  }
};

export default checkCategoryExistenceMw;
