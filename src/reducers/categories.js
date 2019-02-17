import ActionTypes from "../actions/ActionTypes";

//Define initial states of reducer
export const initialState = {
  isLoading: false,
  categoryList: [],
  categoryIdsFound: null,
  categoryCurrent: null
};

export default function categories(state = initialState, action) {
  switch (action.type) {
    case ActionTypes.CATEGORIES_ALL_REQ:
      return {
        ...state,
        isLoading: true
      };

    case ActionTypes.CATEGORIES_ALL_OK:
      return {
        ...state,
        categoryList: action.categoryList,
        isLoading: false
      };

    case ActionTypes.CATEGORIES_ALL_X:
      return {
        ...state,
        isLoading: false
      };
    case ActionTypes.CATEGORY_ADD_REQ:
      return {
        ...state,
        isLoading: true
      };
    case ActionTypes.CATEGORY_ADD_OK:
      return {
        ...state,
        categoryList: [...state.categoryList, action.category],
        isLoading: false
      };
    case ActionTypes.CATEGORY_ADD_X:
      return {
        ...state,
        isLoading: false
      };

    default:
      return state;
  }
}
