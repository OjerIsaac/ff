import { Router } from 'express';
import { createNewMeal, getAllMeal, getOneMeal, updateMeal, deleteMeal, createNewMealCategory, addBrand } from '../controllers/brandControllers/index';
import { adminAuth } from '../middleware/auth';

export default (route: Router) => {
    route.post('/brands/:brandId/addons', createNewMeal);
    route.get('/brands/:brandId/addons', getAllMeal);
    route.get('/brands/:brandId/addons/:addonId', getOneMeal);
    route.put('/brands/:brandId/addons/:addonId', updateMeal);
    route.delete('/brands/:brandId/addons/:addonId', deleteMeal);
    route.post('/brands/:brandId/addon-categories', createNewMealCategory);
    route.post('/brands/add-brand', addBrand);
}