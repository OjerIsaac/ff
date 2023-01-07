import { Router } from "express";
import brandRoute from "./brandRoute";

const router = Router();

brandRoute(router);

export default router;