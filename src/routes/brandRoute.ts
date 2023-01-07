import { Router } from 'express';
import {} from '../controllers/brand';

export default (route: Router) => {
    route.post('/brands/:brandId/addons');
    route.get('/brands/:brandId/addons');
    route.get('/brands/:brandId/addons/:addonId');
    route.put('/brands/:brandId/addons/:addonId');
    route.delete("/brands/:brandId/addons/:addonId");
    route.post('/brands/:brandId/addon-categories');
}