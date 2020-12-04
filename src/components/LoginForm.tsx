import { FormEvent, FunctionComponent, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useDispatch } from 'react-redux';

import { login } from '../api/auth-api';
import { loginUser } from '../store/user/actions';

const LoginForm: FunctionComponent = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');

    const dispatch = useDispatch();

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        e.stopPropagation();

        setError('');
        setIsLoading(true);
        const loginData = await login(username, password).catch((er) => {
            setError(er.message || er);
            return null;
        });
        if (loginData) dispatch(loginUser({ ...loginData }));
        else setIsLoading(false);
    }

    return (
        <Form className="px-5 py-4 rounded border border-light shadow" onSubmit={!isLoading ? handleSubmit : () => undefined}>
            <h1 className="mb-3 text-center">Login</h1>
            <Form.Group controlId="username" className={error ? 'has-error' : ''}>
                <Form.Label className="mb-1">Username</Form.Label>
                <Form.Control onChange={(e) => setUsername(e.target.value)} />
                <Form.Text className="text-danger">{error}</Form.Text>
            </Form.Group>
            <Form.Group controlId="password">
                <Form.Label className="mb-1">Password</Form.Label>
                <Form.Control type="password" onChange={(e) => setPassword(e.target.value)} />
            </Form.Group>
            <Button type="submit" variant="primary" disabled={isLoading} block>Login</Button>
        </Form >
    );
}

export default LoginForm;