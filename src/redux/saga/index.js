import {all} from 'redux-saga/effects';

import usersSaga from './users';
import productsSaga from './products';

export default function* rootSaga() {
    yield all([
        ...usersSaga,
        ...productsSaga
    ]);
}