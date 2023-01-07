import { Request, Response } from "express";
import { Meal, Brand } from '../../models/users';
import { errorResponse, successResponse } from "../../utils/lib/response";
import httpErrors from "../../utils/constants/httpErrors";

/**
 * @description Add a new brand
 * @param req Request object
 * @param res Response object
 * @returns ErrorResponse | SuccessResponse
 */
export const addBrand = async (req: Request, res: Response) => {
  try {
    const { name } = req.body;

    // check for duplicates
    const brand = await Brand.query().select().where('name', name)
    // .debug();
    
    if(brand.length > 0) {
      return errorResponse(res, httpErrors.AccountExists, "This brand already exists.")
    }

    // create new brand
    const newBrand = {
      name: name
    };
    
    await Brand.query().insert(newBrand);

    return successResponse(res, "New Brand added successfully", { newBrand });
  } catch (error) {
    console.log(error);
    return errorResponse(res, httpErrors.ServerError, "Something went wrong");
  }
};

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

    // create new meal
    const newMeal = {
      name: name, 
      description: description, 
      price: price, 
      category: category, 
      brandId: brandId
    };
    
    await Meal.query().insert(newMeal);

    return successResponse(res, "New Meal created successfully", { ...newMeal });
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

    const meals = await Meal.query().select().where('brandId', brandId)

    return successResponse(res, "All Meals retrieved successfully", { ...meals });
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
    const { brandId, addonId} = req.params;

    const meal = await Meal.query().select().where({ 'brandId' : brandId, 'id': addonId})
    // skipundefined(); - method to ignore the undefined values
    
    return successResponse(res, "Meal retrieved successfully", { ...meal });
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