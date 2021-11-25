import React from 'react';
import {useLocation, Navigate} from "react-router-dom";
import {useTypedSelector} from "../hooks/useTypedSelector";

export const RequireHome : React.FC = ({children } : any) => {
    const location = useLocation();
    const {isAuth} = useTypedSelector(state => state.user);

    
    if(window.localStorage.getItem('isAuth')){
        return <Navigate to='/' state={{from : location}}/>
    }

    return children;
};