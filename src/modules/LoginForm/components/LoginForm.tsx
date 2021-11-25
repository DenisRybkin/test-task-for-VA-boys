import React, {useState} from 'react';
import './Auth.scss';
import {Checkbox, Form, Input,Button} from "antd";
import {LockOutlined, MailOutlined} from "@ant-design/icons";
import { Layout } from 'antd';
import {firstCheckingValidateStatus} from "../../../utils/helpers/checkValidateStatus";
import {FormValues, OtherProps} from "../interfaces";
import {FormikProps} from "formik";
import {useAuthActions} from "../../../hooks/useAuthActions";
import {authenticationUser} from "../../../utils/helpers/authenticationUser";
import { useNavigate } from "react-router-dom";
import {WhiteShadowBlock} from "../../../components/WhiteShadowBlock";

const { Content } = Layout;

const LoginForm = ({
                       values,
                       touched,
                       errors,
                       isSubmitting,
                       handleChange,
                       handleBlur,
                       isValid,
                   } :OtherProps & FormikProps<FormValues>) => {
    const [formIsDispatched, setFormIsDispatched] = useState<boolean>(false);
    const [loginError, setLoginError] = useState<boolean>(false);

    let navigate = useNavigate();

    const {authUser} = useAuthActions();


    const onChangeInput = (event : any) => {
        if(loginError){
            setLoginError(false);
        }
        handleChange(event);

    }

    const authorization = () => {
        setFormIsDispatched(true);
       if(authenticationUser(values)){
           authUser(values.email);
           navigate('/', { replace: true });
           window.localStorage.isAuth='true';
           setFormIsDispatched(false);
       } else {
           setFormIsDispatched(false);
           setLoginError(true);
       }
    }

    return (
        <Layout className="wrapper">
            <Content>
                <div className="auth__content">
                    <div className="auth__head">
                        <h2>Войти в аккаунт</h2>
                        <p>Пожалуйста, войдите в аккаунт</p>
                    </div>
                </div>
                <WhiteShadowBlock>
                    <div className="auth__form">
                        <div className="auth__form-container">
                            {loginError && <b className="auth__form__error-message">Неверный логин или пароль!</b>}
                            <Form
                                name="normal_login"
                                className="login-form"
                                initialValues={{
                                    remember: true,
                                }}
                                onFinish={authorization}
                            >
                                <Form.Item
                                    hasFeedback
                                    validateStatus={
                                        loginError ?
                                             "error" :
                                            firstCheckingValidateStatus({
                                                touched : touched.email,
                                                errors : errors.email,
                                                values : values.email,
                                            })
                                    }
                                    name="email"
                                    help={!touched.email ? null : errors.email}
                                >
                                    <Input id="email"
                                           size="large"
                                           type="email"
                                           onBlur={handleBlur}
                                           onChange={onChangeInput}
                                           prefix={<MailOutlined className="site-form-item-icon"/>}
                                           placeholder="E-mail"/>
                                </Form.Item>
                                <Form.Item
                                    hasFeedback
                                    validateStatus={
                                        loginError ? "error"
                                            :
                                            firstCheckingValidateStatus({
                                                touched : touched.password,
                                                errors : errors.password,
                                                values : values.password,
                                            })
                                    }
                                    name="password"
                                    help={!touched.password ? null : errors.password}
                                >
                                    <Input.Password
                                        id="password"
                                        onBlur={handleBlur}
                                        onChange={onChangeInput}
                                        prefix={<LockOutlined className="site-form-item-icon"/>}
                                        type="password"
                                        placeholder="Password"
                                        size="large"
                                    />
                                </Form.Item>
                                <Form.Item>
                                    <Form.Item name="remember" valuePropName="checked" noStyle>
                                        <Checkbox>Remember me</Checkbox>
                                    </Form.Item>

                                    <a className="login-form-forgot" href="http://localhost:3000/registration">
                                        Forgot password
                                    </a>
                                </Form.Item>

                                <Form.Item>
                                    {isSubmitting && !isValid && <span>Ошибка!</span>}
                                    <Button  type="primary"
                                             htmlType="submit"
                                             className="login-form-button"
                                             size="large"
                                             onClick={() => !isValid && setFormIsDispatched(false)}
                                             loading={isValid && formIsDispatched}>
                                        войти в аккаунт
                                    </Button>
                                </Form.Item>
                            </Form>
                        </div>
                    </div>
                </WhiteShadowBlock>
            </Content>
        </Layout>
    );
};

export default LoginForm;
