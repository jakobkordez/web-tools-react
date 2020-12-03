import { FunctionComponent } from 'react';
import { Button } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { logoutUser } from '../store/user/actions';

const Home: FunctionComponent = () => {
    const dispatch = useDispatch();

    const logout = () => dispatch(logoutUser());

    return (
        <div>
            <h1>Yo wassup</h1>
            <Button onClick={logout} block>Logout</Button>
        </div>
    );
}

export default Home;