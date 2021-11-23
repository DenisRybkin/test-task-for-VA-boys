import LoginForm from '../components/LoginForm';
import {FormikErrors, withFormik} from 'formik';
// @ts-ignore
import {validate as validateForm, ValidateProps} from "../../../utils/validate/validate.ts";
import {FormValues, MyFormProps} from "../interfaces";

export default withFormik<MyFormProps, FormValues>({



    validate: (values :FormValues) => {
        let errors : FormikErrors<FormValues> = {};

        validateForm(<ValidateProps>{
            isAuth: true,
            values: values,
            errors: errors
        })

        return errors;
    },

    handleSubmit: (values, { setSubmitting }) => {

    },

    displayName: 'LoginForm', // helps with React DevTools
})(LoginForm);