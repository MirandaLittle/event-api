import categoryData from '../../src/data/categories.json' assert { type: "json" };
import NotFoundError from '../../errors/notFoundError.js';

const getCategoryById = (id) => {

  const category = categoryData.categories.find(category => category.id === id);
  if (!category) {
    throw new NotFoundError('Category', id);
  }
  return category
}

export default getCategoryById;