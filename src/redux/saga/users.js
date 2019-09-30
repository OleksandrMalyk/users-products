import { call, takeEvery, all, put } from 'redux-saga/effects'

import Api from '../../api/UsersProductsApi';
import {fetchUsersStart, loadMoreUsersStart, receiveMoreUsers, receiveUsers} from '../actions/users';
import {FETCH_USERS, LOAD_MORE_USERS} from '../actionTypes';


const delay = (ms) => new Promise(res => setTimeout(res, ms));

function* fetchUsersAsync() {
    yield put(fetchUsersStart());
    const users = yield call(Api.fetchUsers);
    yield delay(500);
    yield put(receiveUsers({users}))
}

function* fetchMoreUsersAsync(action) {
    yield put(loadMoreUsersStart());
    const users = yield call(Api.fetchMoreUsers, action.params);
    yield delay(500);
    yield put(receiveMoreUsers({users}))
}

function* watchFetchUsersAsync() {
    yield takeEvery(FETCH_USERS, fetchUsersAsync)
}

function* watchLoadMoreUsersAsync() {
    yield takeEvery(LOAD_MORE_USERS, fetchMoreUsersAsync)
}

export default [
    watchFetchUsersAsync(),
    watchLoadMoreUsersAsync()
];