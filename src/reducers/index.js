<<<<<<< HEAD
import { combineReducers } from "redux";

import categories from "./categories";

const rootReducer = () =>
  combineReducers({
    categories
  });

export default rootReducer;
=======
import { combineReducers} from 'redux';
import categories from './categories';

const rootReducer = () =>(
    combineReducers({
        categories,
    })
)

export default rootReducer;
>>>>>>> c7a4832db146f6aad0f293b850d7968165104992
