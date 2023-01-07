import { Router } from 'express';
import { createNewMeal } from '../controllers/brandControllers/index';

export default (route: Router) => {
    route.post('/brands/:brandId/addons', createNewMeal);
    route.get('/brands/:brandId/addons');
    route.get('/brands/:brandId/addons/:addonId');
    route.put('/brands/:brandId/addons/:addonId');
    route.delete("/brands/:brandId/addons/:addonId");
    route.post('/brands/:brandId/addon-categories');
}