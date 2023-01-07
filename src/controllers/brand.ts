import { Request, Response } from "express";
import { errorResponse, successResponse } from "../utils/lib/response";
import httpErrors from "../utils/constants/httpErrors";

/**
 * @description get all assessments
 * @param req Request object
 * @param res Response object
 * @returns ErrorResponse | SuccessResponse
 */
export const getAll = async (req: Request, res: Response) => {
    try {

        return successResponse(res, "Assessments retrieved successfully", {});
    } catch (error) {
      console.log(error);
      return errorResponse(res, httpErrors.ServerError, "Something went wrong");
    }
  };