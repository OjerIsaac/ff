import { Router } from 'express';
import { createNewMeal, getAllMeal, getOneMeal, updateMeal, deleteMeal, createNewMealCategory, addBrand } from '../controllers/brandControllers/index';
import { adminAuth } from '../middleware/auth';

export default (route: Router) => {
    route.post('/brands/:brandId/addons', adminAuth, createNewMeal);
    route.get('/brands/:brandId/addons', adminAuth, getAllMeal);
    route.get('/brands/:brandId/addons/:addonId', adminAuth, getOneMeal);
    route.put('/brands/:brandId/addons/:addonId', adminAuth, updateMeal);
    route.delete('/brands/:brandId/addons/:addonId', adminAuth, deleteMeal);
    route.post('/brands/:brandId/addon-categories', adminAuth, createNewMealCategory);
    route.post('/brands/add-brand', adminAuth, addBrand);
}