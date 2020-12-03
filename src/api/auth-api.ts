const path: string = '/api/auth';

const login = async (username: string, password: string): Promise<any> => {
    try {
        const res = await fetch(`${path}/login`, {
            method: 'POST',
            body: JSON.stringify({ username, password }),
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            }
        });

        const rBody = await res.json();

        if (res.ok) return rBody;
        else return Promise.reject(rBody);
    }
    catch (e) {
        console.error(e);
        throw Error('Something went wrong!');
    }
};

export { login };