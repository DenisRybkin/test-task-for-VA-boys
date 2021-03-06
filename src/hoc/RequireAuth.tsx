import React from 'react';
import {useLocation, Navigate} from "react-router-dom";
import {useTypedSelector} from "../hooks/useTypedSelector";

export const RequireAuth : React.FC = ({children } : any) => {
    const location = useLocation();
    const {isAuth} = useTypedSelector(state => state.user)

    if(!(window.localStorage.getItem('isAuth'))){
        return <Navigate to='/login' state={{from : location}}/>
    }

    return children;
};

