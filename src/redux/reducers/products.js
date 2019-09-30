import {
    RECEIVE_FETCH_PRODUCTS,
    RECEIVE_MORE_PRODUCTS,
    START_FETCH_PRODUCTS,
    START_LOAD_MORE_PRODUCTS,
    } from '../actionTypes';

const initialState = {
    productsList: [],
    isRefreshing: false,
    isLoadingMore: false
};


export default function productsReducer(state = initialState, action) {
    switch (action.type) {
        case START_FETCH_PRODUCTS:
            return {
                ...state,
                isRefreshing: true,
            };
        case RECEIVE_FETCH_PRODUCTS:
            return {
                ...state,
                productsList: action.products,
                isRefreshing: false,
            };
        case START_LOAD_MORE_PRODUCTS:
            return {
                ...state,
                isLoadingMore: true,
            };
        case RECEIVE_MORE_PRODUCTS:
            return {
                ...state,
                productsList: [...state.productsList, ...action.products],
                isLoadingMore: false,
            };
        default:
            return state;
    }
}