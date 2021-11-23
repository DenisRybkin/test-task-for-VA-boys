import React from 'react';
import {Route, Routes} from "react-router-dom";
import {unauthenticatedRout, authenticatedRoute,} from "../utils/routs";
import {LoginPage} from "../pages/LoginPage";
import {MainPage} from "../pages/MainPage";
import {RequireAuth} from "../hoc/RequireAuth";
import {RequireHome} from "../hoc/RequireHome";


export const Router: React.FC = () => {

    return(
        <>
            <Routes>
                <Route path={authenticatedRoute.path} element={<RequireAuth>
                        <MainPage/>
                    </RequireAuth>}/>
                <Route path={unauthenticatedRout.path} element={<RequireHome>
                        <LoginPage/>
                    </RequireHome>}/>
            </Routes>
        </>
    )
};