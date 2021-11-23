import {FormValues} from "../../modules/LoginForm/interfaces";

export interface ValidateProps {
    isAuth: boolean;
    values: FormValues;
    errors: FormValues;
}
export interface Errors {
    email?: string;
    password?: string;
}
export interface Values {
    email: string;
    password: string;
}

export enum KeysTypes {
    email = 'email',
    password = 'password',
}
export type KeysProps = KeysTypes.email | KeysTypes.password
export interface RulesInterface  {
    email : (errors :Errors, value : string) => void,
    password : (errors :Errors , value : string) => void
}