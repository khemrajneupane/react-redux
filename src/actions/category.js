import ActionTypes from "./ActionTypes";
import { fetchTestCategories } from "../models/Test";

// ACTION CREATORS (Action object creator functions)
// ~ standard and only way to create each action object
export const categoriesAll_REQ = () => ({
  type: ActionTypes.CATEGORIES_ALL_REQ
});
export const categoriesAll_OK = categoryList => ({
  type: ActionTypes.CATEGORIES_ALL_OK,
  categoryList: categoryList
});
export const categoriesAll_X = () => ({
  type: ActionTypes.CATEGORIES_ALL_X
});

// Helper function, real action function?
export function fetchAllCategories() {
  return async (dispatch, getState) => {
    dispatch(categoriesAll_REQ());
    const categoryList = fetchTestCategories(); // from mock "Back-end"
    if (categoryList.length === 4) {
      dispatch(categoriesAll_X());
    } else {
      dispatch(categoriesAll_OK(categoryList));
    }
  };
}

// Same with other actions...
// Action object creator functions
export const categoryAdd_REQ = () => ({
  type: ActionTypes.CATEGORY_ADD_REQ
});
export const categoryAdd_OK = category => ({
  type: ActionTypes.CATEGORY_ADD_OK,
  category: category
});
export const categoryAdd_X = () => ({
  type: ActionTypes.CATEGORY_ADD_X
});

// Helper function, real action function?
export function addCategory(category) {
  return async (dispatch, getState) => {
    dispatch(categoryAdd_REQ());
    // Here would be some async AJAX call with await...
    // ... or some promises or so
    console.dir(category);

    if (!category.id || !category.name || !category.budget) {
      dispatch(categoryAdd_X());
    } else {
      dispatch(categoryAdd_OK(category));
    }
  };
}

// Same with other actions...
// Action object creator functions
/*
export const categoryRandomized_REQ = () => ({
    type: ActionTypes.CATEGORY_RANDOMIZED_REQ,
});
export const categoryRandomized_OK = (id) => ({
    type: ActionTypes.CATEGORY_RANDOMIZED_OK,
    id: id,
});
export const categoryRandomized_X = () => ({
    type: ActionTypes.CATEGORY_RANDOMIZED_X,
});

// Helper function, real action function?
export function randomizeCategory() {
    return async (dispatch, getState) => {
        dispatch(categoryRandomized_REQ());
        // Here would be some async AJAX call with await...
        // ... or some promises or so
        const categoryList = (getState()).categories.categoryList;
        //const {categoryList} = getState().categories;
        console.dir(categoryList);

        if(!categoryList || categoryList.length ===0) {
            dispatch(categoryRandomized_X());
        } else {
            let randomizedId = Math.floor(Math.random*categoryList.length);
            dispatch(categoryRandomized_OK(randomizedId));
        }
    }
};
*/
