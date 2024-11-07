import categoryData from '../../src/data/categories.json' assert { type: "json" };

const getCategories = () => {
  let categories = categoryData.categories;
  return categories;
}

export default getCategories;