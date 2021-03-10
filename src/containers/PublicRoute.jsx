import React, { useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { LoginContext } from '../contexts/LoginContext';

export default function PublicRoute({component: Component, ...rest}) {

    const {isLogged} = useContext(LoginContext);

    return(
        <Route {...rest}>
            {!isLogged ? <Component /> : <Redirect to="/home" />}
        </Route>
    )
}