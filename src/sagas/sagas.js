import {call, put, takeEvery} from 'redux-saga/effects';
import axios from 'axios';
import {FETCHUSERS, FETCH_USERS_SUCCEED} from '../actions/types';

function* test(action) {
    console.log(' WORKER', action);
    let data;

    yield call(function () {
        return fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(d => data = d);
    });
    
    console.log(' data ', data);

    yield put({
        type: FETCH_USERS_SUCCEED,
        users: data
    })
}

export function* watchFetchUsers() {
    console.log(' WATCHERS ');
    yield takeEvery(FETCHUSERS, test)
}

export default function* rootSaga() {
    console.log(' saga ROOT ');
    yield [
        watchFetchUsers()
    ]
}