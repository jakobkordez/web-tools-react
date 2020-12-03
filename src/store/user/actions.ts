import { LOGIN, LoginData, LOGOUT, UserActionTypes } from './types';

export function loginUser(loginData: LoginData): UserActionTypes {
    return {
        type: LOGIN,
        payload: loginData
    }
}

export function logoutUser(): UserActionTypes {
    return {
        type: LOGOUT
    }
}