
import ActionTypes from './ActionTypes';
import FetchTestCategories from '../Models/FetchTestCategories';
import dispatch from 'react-redux';

export const categoriesAll_REQ = () => ({
    type: ActionTypes.CATEGORIES_ALL_REQ,
});

export const categoriesAll_OK = (categoryList) => ({
    type: ActionTypes.CATEGORIES_ALL_OK,
    categoryList
});

export const categoriesAll_X = () => ({
    type: ActionTypes.CATEGORIES_ALL_X,
});

export function fetchAllCategories() { 
    return async (dispatch, getState) => {
        dispatch(categoriesAll_REQ());
        const categoryList = FetchTestCategories();
        if(categoryList.length === 4) {
            dispatch(categoriesAll_X());
        } else {
            dispatch(categoriesAll_OK(categoryList));
        }
    }
};