import categoryData from '../../src/data/categories.json' assert { type: "json" };

const createCategory = (name, id) => {
  const newCategory = {
    name,
    id
  };

  categoryData.categories.push(newCategory);
  return newCategory;
};

export default createCategory;