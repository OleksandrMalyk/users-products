import {
    FETCH_USERS, START_FETCH_USERS,
    RECEIVE_FETCH_USERS, RECEIVE_MORE_USERS,
    START_LOAD_MORE_USERS, LOAD_MORE_USERS,
} from '../actionTypes';


export const receiveUsers = payload => ({
    type: RECEIVE_FETCH_USERS,
    payload: payload.users,
});

export const fetchUsersStart = () => ({
    type: START_FETCH_USERS,
});

export const getUsers = () => ({
    type: FETCH_USERS,
});

export const receiveMoreUsers = payload => ({
    type: RECEIVE_MORE_USERS,
    payload: payload.users,
});

export const loadMoreUsersStart = () => ({
    type: START_LOAD_MORE_USERS,
});

export const loadMoreUsers = (params) => ({
    type: LOAD_MORE_USERS,
    params
});
