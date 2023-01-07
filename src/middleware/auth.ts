import { Request, Response, NextFunction } from "express";
import httpErrors from "../utils/constants/httpErrors";
import { errorResponse } from './../utils/lib/response';

/**
 * @description Validates admin authorization
 * @param req 
 * @param res 
 * @param next 
 * @return NextFunction | errorResponse
 */
 export const adminAuth = async (req: Request, res: Response, next: NextFunction) => { 
    try {
        next();
    } catch (error) {
        return errorResponse(res, httpErrors.ServerError, 'Something went wrong');
    }
}