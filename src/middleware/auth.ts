import { Request, Response, NextFunction } from "express";
import httpErrors from "../utils/constants/httpErrors";
import { errorResponse } from './../utils/lib/response';
import { User } from '../models/users';

/**
 * @description Validates admin authorization
 * @param req 
 * @param res 
 * @param next 
 * @return NextFunction | errorResponse
 */
export const adminAuth = async (req: Request, res: Response, next: NextFunction) => {
  // let { role } = req.app.get("adminDetails");
  // if (role != "admin") {
  //   // Invalid Access
  //   return errorResponse(res, httpErrors.ValidationError, "You don't have permission to perform this action");
  // }
  // next();
};