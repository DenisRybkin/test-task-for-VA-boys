export interface User {
    name : string,
    isAuth : boolean,
    eMail : string,
}

export enum userTypes {
    AUTHORIZATION_USER = 'AUTHORIZATION_USER',
}
export interface UserAction {
    type : userTypes.AUTHORIZATION_USER
    payload : string
}