import {
    FETCH_PRODUCTS, LOAD_MORE_PRODUCTS,
    RECEIVE_FETCH_PRODUCTS, RECEIVE_MORE_PRODUCTS,
    START_FETCH_PRODUCTS, START_LOAD_MORE_PRODUCTS,
} from '../actionTypes';


export const receiveProducts = payload => ({
    type: RECEIVE_FETCH_PRODUCTS,
    products: payload.products,
});

export const fetchProductsStart = () => ({
    type: START_FETCH_PRODUCTS,
});

export const getProducts = () => ({
    type: FETCH_PRODUCTS,
});

export const receiveMoreProducts = payload => ({
    type: RECEIVE_MORE_PRODUCTS,
    products: payload.products,
});

export const loadMoreProductsStart = () => ({
    type: START_LOAD_MORE_PRODUCTS,
});

export const loadMoreProducts = (params) => ({
    type: LOAD_MORE_PRODUCTS,
    params,
});
