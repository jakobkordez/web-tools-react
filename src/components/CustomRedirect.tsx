import { FunctionComponent } from 'react';
import { Async } from 'react-async';
import { Redirect } from 'react-router-dom';

import { parseUrl } from '../api/url-api';

const CustomRedirect: FunctionComponent<{ fallback: string }> = (props) => {

    const findRedirect = async (): Promise<string> => {
        const path = window.location.pathname;
        if (!/^\/([\w/+]{16}|[\w]{3,})$/.test(path)) return Promise.reject()

        const res = await parseUrl(path.substr(1)).catch(() => null);
        if (!res) return Promise.reject()

        const target: string = res['fullUrl'];

        return /^(https?:)?\/\//i.test(target) ? target : `//${target}`
    }

    return (
        <Async promiseFn={findRedirect}>
            {
                ({ data, error, isPending }) => {
                    if (isPending) return <h3>Please wait...</h3>
                    if (error || !data) return <Redirect to={props.fallback} />
                    window.location.replace(data);
                }
            }
        </Async>
    );
}

export default CustomRedirect