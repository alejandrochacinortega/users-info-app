import {FETCHUSERS, FETCH_USERS_SUCCEED} from '../actions/types';
import Immutable from 'immutable';

const initialState = Immutable.List();

export default function (state = initialState, action) {
    switch (action.type) {
        case FETCH_USERS_SUCCEED:
            return state = Immutable.fromJS(action.users);
        default:
            return state
    }

    return state
}