import categoryData from '../../src/data/categories.json' assert { type: "json" };
import { v4 as uuid } from 'uuid';

const createCategory = (name) => {
  const newCategory = {
    id: uuid(),
    name
  
  };
  console.log("CreateCategory function:", newCategory),
  categoryData.categories.push(newCategory);
  return newCategory;
};

export default createCategory;