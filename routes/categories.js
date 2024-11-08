import express from 'express';
import getCategories from '../services/categories/getCategories.js';
import createCategory from '../services/categories/createCategory.js';
import getCategoryById from '../services/categories/getCategoryById.js';
import updateCategoryById from '../services/categories/updateCategoryById.js';
import deleteCategory from '../services/categories/deleteCategory.js';
import authMiddleware from '../middleware/auth.js';
import notFoundErrorHandler from '../middleware/notFoundErrorHandler.js';

const router = express.Router();

router.get('/', (req, res) => {
    try {
      const categories = getCategories()
      res.status(200).json(categories)
    } catch (error) {
      console.error(error)
      res.status(500).send('Something went wrong while getting list of categorys!')
    }
  })

  router.post('/', authMiddleware, (req, res) => {
    try {
      const { name, id } = req.body 
      const newCategory = createCategory(name, id)
      res.status(201).json(`New category created with name: ${name} and id: ${id}`, newCategory) // added message
      
    } catch (error) {
      console.error(error)
      res.status(500).send('Something went wrong while creating new category!')
    }
  })

  router.get('/:id', (req, res) => {
    const { id } = req.params 
    const category = getCategoryById(id)
    res.status(200).json(category)
    }, notFoundErrorHandler);

    router.put('/:id', authMiddleware, (req, res) => {
          const { id } = req.params
          const { name } = req.body
          const updatedCategory = updateCategoryById(id, name)
          res.status(200).json(updatedCategory)
    }, notFoundErrorHandler);

    router.delete('/:id', authMiddleware, (req, res) => {
        const { id } = req.params;
        const deletedCategoryId = deleteCategory(id);
          res.status(200).json({
            message: `Category with id ${deletedCategoryId} was deleted!`,
          });
        }, notFoundErrorHandler);

export default router;