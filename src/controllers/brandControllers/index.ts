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
    return successResponse(res, "New Meal created successfully", {});
  } catch (error) {
    console.log(error);
    return errorResponse(res, httpErrors.ServerError, "Something went wrong");
  }
};


/**
 * @description Retrieve a list of all meal addons for the specified brand
 * @param req Request object
 * @param res Response object
 * @returns ErrorResponse | SuccessResponse
 */
export const getAllMeal = async (req: Request, res: Response) => {
  try {
    const { brandId } = req.params;

    // check for duplicates
    return successResponse(res, "All Meals retrieved successfully", {});
  } catch (error) {
    console.log(error);
    return errorResponse(res, httpErrors.ServerError, "Something went wrong");
  }
};


/**
 * @description Retrieve a single meal
 * @param req Request object
 * @param res Response object
 * @returns ErrorResponse | SuccessResponse
 */
export const getOneMeal = async (req: Request, res: Response) => {
  try {
    const { brandId } = req.params;

    // check for duplicates
    return successResponse(res, "Meal retrieved successfully", {});
  } catch (error) {
    console.log(error);
    return errorResponse(res, httpErrors.ServerError, "Something went wrong");
  }
};


/**
 * @description Update a single meal addon by its ID
 * @param req Request object
 * @param res Response object
 * @returns ErrorResponse | SuccessResponse
 */
export const updateMeal = async (req: Request, res: Response) => {
  try {
    const { brandId } = req.params;
    const { name, description, price, category } = req.body;

    // check for duplicates
    return successResponse(res, "Meal updated successfully", {});
  } catch (error) {
    console.log(error);
    return errorResponse(res, httpErrors.ServerError, "Something went wrong");
  }
};

/**
 * @description Delete a single meal addon by its ID
 * @param req Request object
 * @param res Response object
 * @returns ErrorResponse | SuccessResponse
 */
export const deleteMeal = async (req: Request, res: Response) => {
  try {
    const { brandId } = req.params;

    // check for duplicates
    return successResponse(res, "Meal successfully deleted", {});
  } catch (error) {
    console.log(error);
    return errorResponse(res, httpErrors.ServerError, "Something went wrong");
  }
};

/**
 * @description Create a new category for meal addon
 * @param req Request object
 * @param res Response object
 * @returns ErrorResponse | SuccessResponse
 */
export const createNewMealCategory = async (req: Request, res: Response) => {
  try {
    const { brandId } = req.params;
    const { name } = req.body;

    // check for duplicates
    return successResponse(res, "New Meal category created successfully", {});
  } catch (error) {
    console.log(error);
    return errorResponse(res, httpErrors.ServerError, "Something went wrong");
  }
};