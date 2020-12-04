export const apiHeaders = (token?: string) => {
    const ret: any = {
        'Content-Type': 'application/json;charset=utf-8'
    }

    if (token) ret['Authentication'] = `Bearer ${token}`;

    return ret;
}