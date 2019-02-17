import ActionTypes from "./ActionTypes";
import { fetchTestCategories } from "../models/Test";
// here, functions are created accordig to actionTypes and they are dispatched to store accordingly.
// ACTION CREATORS (Action creator functions)
export const categoriesAll_REQ = () => ({
  type: ActionTypes.CATEGORIES_ALL_REQ
});

export const categoriesAll_OK = categoryList => ({
  type: ActionTypes.CATEGORIES_ALL_OK,
  categoryList
});

export const categoriesAll_X = () => ({
  type: ActionTypes.CATEGORIES_ALL_X
});

export function fetchAllCategories() {
  return async (dispatch, getState) => {
    //this function, dispatches changes to store and gets the current storeState.
    dispatch(categoriesAll_REQ());
    const categoryList = fetchTestCategories();
    if (categoryList.length === 4) {
      dispatch(categoriesAll_X());
    } else {
      dispatch(categoriesAll_OK(categoryList));
    }
  };
}
// categories add...
export const categoryAdd_REQ = () => ({
  type: ActionTypes.CATEGORIES_ALL_REQ
});
export const categoryAdd_OK = category => ({
  type: ActionTypes.CATEGORY_ADD_OK,
  category: category
});
export const categoryAdd_X = () => ({
  type: ActionTypes.CATEGORY_ADD_X
});
//creating category add function

export function addCategory(category) {
  return async (dispatch, getState) => {
    dispatch(categoryAdd_REQ());
    if (!category.id || !category.name || !category.budget) {
      dispatch(categoryAdd_X());
    } else {
      dispatch(categoryAdd_OK(category));
    }
  };
}
