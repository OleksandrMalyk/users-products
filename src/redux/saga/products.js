import {call, takeEvery, put} from 'redux-saga/effects';

import Api from '../../api/UsersProductsApi';
import {FETCH_PRODUCTS, LOAD_MORE_PRODUCTS} from '../actionTypes';
import {fetchProductsStart,receiveProducts, receiveMoreProducts,loadMoreProductsStart} from '../actions/products';


const delay = (ms) => new Promise(res => setTimeout(res, ms));

function* fetchProductsAsync() {
    yield put(fetchProductsStart());
    const products = yield call(Api.fetchProducts);
    yield delay(500);
    yield put(receiveProducts({products}));
}

function* fetchMoreProductsAsync(action) {
    yield put(loadMoreProductsStart());
    const products = yield call(Api.fetchMoreProducts, action.params);
    yield delay(500);
    yield put(receiveMoreProducts({products}));
}

function* watchFetchProductsAsync() {
    yield takeEvery(FETCH_PRODUCTS, fetchProductsAsync);
}

function* watchLoadMoreProductsAsync() {
    yield takeEvery(LOAD_MORE_PRODUCTS, fetchMoreProductsAsync);
}

export default [
    watchFetchProductsAsync(),
    watchLoadMoreProductsAsync(),
];