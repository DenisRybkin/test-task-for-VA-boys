import RegistrationForm from '../components/RegistrationForm';
import { withFormik } from 'formik';
import {validate as validateForm} from "../../../utils/validate/validate";


export default withFormik({

    validate: values => {
        let errors = {};

        validateForm({isAuth : false,values : values, errors : errors})

        return errors;
    },

    handleSubmit: (values, { setSubmitting }) => {
        setTimeout(() => {
            console.log('lox');
            // alert(JSON.stringify(values, null, 2));
            // setSubmitting(false);
        }, 1000);
    },

    displayName: 'RegistrationForm', // helps with React DevTools
})(RegistrationForm);