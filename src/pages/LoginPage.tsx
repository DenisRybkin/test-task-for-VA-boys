import React from 'react';
import LoginForm from "../modules/LoginForm/containers/LoginForm";

export const LoginPage : React.FC = () : JSX.Element => {
    return (
        <LoginForm message="sign in" />
    );
};

