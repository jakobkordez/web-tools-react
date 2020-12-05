import { apiHeaders } from './api'

const path: string = '/api/auth'

export const login = async (username: string, password: string): Promise<any> => {
    try {
        const res = await fetch(`${path}/login`, {
            method: 'POST',
            body: JSON.stringify({ username, password }),
            headers: apiHeaders()
        });

        const rBody = await res.json();

        if (res.ok) return rBody;
        else return Promise.reject(rBody);
    }
    catch (e) {
        console.error(e);
        throw Error('Something went wrong!');
    }
}