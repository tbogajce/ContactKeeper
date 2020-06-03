import React, { useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';
import AuthContex from '../../context/auth/authContext';

const PrivateRoute = ({ component: Component, ...rest }) => {
    const authContext = useContext(AuthContex);
    const { isAuthenticated, loading } = authContext;

    return (
        <Route
            {...rest}
            render={(props) =>
                !isAuthenticated && !loading ? <Redirect to='/login' /> : <Component {...props} />
            }
        />
    );
};

export default PrivateRoute;
