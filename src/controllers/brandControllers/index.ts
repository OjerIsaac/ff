import { Request, Response } from "express";
import { errorResponse, successResponse } from "../../utils/lib/response";
import httpErrors from "../../utils/constants/httpErrors";

/**
 * @description create a new meal addon
 * @param req Request object
 * @param res Response object
 * @returns ErrorResponse | SuccessResponse
 */
export const createNewMeal = async (req: Request, res: Response) => {
  try {
    const { brandId } = req.params;
    const { name, description, price, category } = req.body;

    // check for duplicates
    return successResponse(res, "Assessments retrieved successfully", {});
  } catch (error) {
    console.log(error);
    return errorResponse(res, httpErrors.ServerError, "Something went wrong");
  }
};