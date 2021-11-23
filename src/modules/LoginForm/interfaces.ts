export interface FormValues {
    email: string;
    password: string;
    loginError? : boolean;
}
export interface MyFormProps {
    initialEmail?: string;
    message: string;
}
export interface OtherProps {
    message: string;
}