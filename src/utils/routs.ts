import {LoginPage} from "../pages/LoginPage";
import {MainPage} from "../pages/MainPage";

export enum Routs {
    LOGIN_ROUTE = '/login',
    MAIN_ROUTE = '/',
}

export const unauthenticatedRout =
    {
        path: Routs.LOGIN_ROUTE,
        Component: LoginPage
    }

export const authenticatedRoute = {
        path: Routs.MAIN_ROUTE,
        Component: MainPage
}
