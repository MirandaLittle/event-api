import categoryData from '../../src/data/categories.json' assert { type: "json" };
import NotFoundError from '../../errors/notFoundError.js';

const deleteCategory = (id) => {
  const index = categoryData.categories.findIndex((category) => category.id === id);

  if (index === -1) { // findIndex function returns -1 if index is not found
    throw new NotFoundError('Category', id);
  }

  categoryData.categories.splice(index, 1); // 1 = delete count, 1 item
  return id;
};

export default deleteCategory;
