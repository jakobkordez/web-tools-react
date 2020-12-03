import { LOGIN, LoginState, LOGOUT, UserActionTypes } from './types'

const initialState: LoginState = null;

export function userReducer(
    state = initialState,
    action: UserActionTypes
): LoginState {
    switch (action.type) {
        case LOGIN:
            return action.payload
        case LOGOUT:
            return initialState
        default:
            return state
    }
}