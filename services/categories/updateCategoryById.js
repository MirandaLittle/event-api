import categoryData from '../../src/data/categories.json' assert { type: "json" };
import NotFoundError from '../../errors/notFoundError.js';

const updateCategoryById = (id, name) => {
  const category = categoryData.categories.find(category => category.id === id);

  if (!category) {
    throw new NotFoundError('Category', id);
  }

  category.name = name ?? category.name; // The Nullish Coalescing Operator (??), if "title" is null or undefinced keep original user.title
  

  return category;
}

export default updateCategoryById;

