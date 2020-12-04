import { apiHeaders } from './api';

const path: string = '/api/url'

export const parseUrl = async (key: string): Promise<any> => {
    try {
        const res = await fetch(`${path}/${key}`, {
            method: 'GET',
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