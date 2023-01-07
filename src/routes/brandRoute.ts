import { Router } from 'express';
import {} from '../controllers/brand';

export default (route: Router) => {
    route.get('/assessment');
    route.post('/assessment');
    route.put('/assessment/:id');
    route.delete("/");
}