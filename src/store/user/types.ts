export interface User {
    _id: string;
    username: string;
    password: string;
    admin: boolean;
}

export interface LoginData {
    user: User;
    token: string;
}

export type LoginState = LoginData | null

export const LOGIN = 'LOGIN'
export const LOGOUT = 'LOGOUT'

interface LoginAction {
    type: typeof LOGIN;
    payload: LoginData;
}

interface LogoutAction {
    type: typeof LOGOUT;
}

export type UserActionTypes = LoginAction | LogoutAction