import {Errors,
    KeysProps,
    RulesInterface,
    ValidateProps,
    Values} from "./validate.interface";



export const validate = ({isAuth,values, errors}: ValidateProps) => {

    const rules : RulesInterface = {
        email: (errors :Errors, value : string) : void => {
            if (!value) {
                errors.email = 'Введите E-mail!';
            } else if (
                !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)
            ) {
                errors.email = 'Неверный E-mail!';
            }
        },
        password: (errors :Errors , value : string) : void => {
            if (!value) {
                errors.password = 'Придумайте и введите свой пароль';
            } else if (
                !/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})/.test(value)
            ) {
                errors.password = isAuth ? 'Неверный пароль' : 'Слишком легкий пароль!';
            }
        },

    }

    Object.keys(values as Values).forEach(
        // @ts-ignore
        (key: KeysProps ) => {
            rules[key] && rules[key](errors, values[key]);
        }
    );
}