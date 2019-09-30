import {
    START_FETCH_USERS, RECEIVE_FETCH_USERS,
    START_LOAD_MORE_USERS, RECEIVE_MORE_USERS,
} from '../actionTypes';

const initialState = {
    usersList: [],
    isRefreshing: false,
    loadingMoreUsers: false,
};


export default function usersReducer(state = initialState, action) {
    switch (action.type) {
        case START_FETCH_USERS:
            return {
                ...state,
                isRefreshing: true,
            };
        case RECEIVE_FETCH_USERS:
            return {
                ...state,
                usersList: action.payload,
                isRefreshing: false,
            };
        case START_LOAD_MORE_USERS:
            return {
                ...state,
                loadingMoreUsers: true,
            };
        case RECEIVE_MORE_USERS:
            return {
                ...state,
                usersList: [...state.usersList, ...action.payload],
                loadingMoreUsers: false,
            };
        default:
            return state;
    }
}