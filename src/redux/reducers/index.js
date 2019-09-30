import { combineReducers } from "redux";
import usersReducer from "./users";
import productsReducer from "./products";
import { reducer as formReducer } from 'redux-form'


export default combineReducers({
    users: usersReducer,
    products: productsReducer,
    form: formReducer
});
