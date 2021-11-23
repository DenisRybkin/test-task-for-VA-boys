import React, {useState} from 'react';
import {Form, Input} from "antd";
import {LockOutlined, UserOutlined, MailOutlined, InfoCircleTwoTone} from "@ant-design/icons";
import {Button, WhiteShadowBlock} from "../../../components";
import {Link} from 'react-router-dom'
import {checkValidateStatus} from "../../../utils/helpers/checkValidateStatus";

const RegistrationForm = ({
                              values,
                              touched,
                              errors,
                              isSubmitting,
                              handleChange,
                              handleBlur,
                              handleSubmit,
                              isValid,
                          }) => {

    const [success, setSuccess] = useState(true);

    const [formIsDispatched, setFormIsDispatched] = useState(false);

    return (
        <>
            <div className="auth__content">
                <div className="auth__head">
                    <h2>Регистрация</h2>
                    <p>Для входа в чат, вам нужно зарегестрироваться</p>
                </div>
            </div>
            <WhiteShadowBlock>
                {success ? (<Form
                    name="normal_login"
                    className="login-form"
                    onFinish={handleSubmit}
                >
                    <Form.Item
                        hasFeedback
                        validateStatus={
                            formIsDispatched ?
                                isValid ? "success" : "error"
                                :
                            checkValidateStatus({
                                touched: touched.email,
                                errors: errors.email,
                                values: values.email,
                            })
                        }
                        name="email"
                        help={!touched.email ? null : errors.email}
                    >
                        <Input id="email"
                               size="large"
                               type="email"
                               onBlur={handleBlur}
                               onChange={handleChange}
                               prefix={<MailOutlined className="site-form-item-icon"/>}
                               placeholder="E-mail"/>
                    </Form.Item>
                    <Form.Item
                        hasFeedback
                        name="username"
                        validateStatus={
                            formIsDispatched ?
                                isValid ? "success" : "error"
                                :
                            checkValidateStatus({
                                touched: touched.username,
                                errors: errors.username,
                                values: values.username,
                            })
                        }
                        help={!touched.username ? null : errors.username}
                        tooltip="Как ты хочешь, чтобы тебя назвали другие участники?"
                    >
                        <Input prefix={<UserOutlined className="site-form-item-icon"/>}
                               onBlur={handleBlur}
                               onChange={handleChange}
                               id="username"
                               placeholder="Ваше имя"
                               size="large"
                        />
                    </Form.Item>
                    <Form.Item
                        hasFeedback
                        validateStatus={
                            formIsDispatched ?
                                isValid ? "success" : "error"
                                :
                            checkValidateStatus({
                                touched: touched.password,
                                errors: errors.password,
                                values: values.password,
                            })
                        }
                        name="password"
                        help={!touched.password ? null : errors.password}
                    >
                        <Input.Password
                            id="password"
                            onBlur={handleBlur}
                            onChange={handleChange}
                            prefix={<LockOutlined className="site-form-item-icon"/>}
                            type="password"
                            placeholder="Password"
                            size="large"
                        />
                    </Form.Item>
                    <Form.Item
                        name="confirm"
                        dependencies={['password']}
                        hasFeedback
                        validateStatus={
                            formIsDispatched ?
                                isValid ? "success" : "error"
                                :
                            checkValidateStatus({
                                touched: touched.password,
                                errors: errors.password,
                                values: values.password,
                            })
                        }
                        help={!touched.confirmPassword ? null : errors.confirmPassword}
                        rules={[
                            {
                                required: true,
                                message: "Подтвердите пароль!",
                            },
                            ({getFieldValue}) => ({
                                validator(_, value) {
                                    if (!value || getFieldValue('password') === value) {
                                        return Promise.resolve();
                                    }
                                    return Promise.reject(new Error('Подтверждения пароля не прошло'));
                                },
                            }),
                        ]}
                    >
                        <Input.Password prefix={<LockOutlined className="site-form-item-icon"/>}
                                        type="password"
                                        placeholder="confirm password"
                                        size="large"
                                        id="confirmPassword"
                                        onBlur={handleBlur}
                                        onChange={handleChange}/>
                    </Form.Item>
                    <Form.Item>
                        {isSubmitting && !isValid && <span>Ошибка!</span>}
                        <Button onClick={() => {
                                setFormIsDispatched(true)
                                handleSubmit();
                            }}
                                type="primary"
                                htmlType="submit"
                                className="login-form-button"
                                size="large">
                            зарегестрироваться
                        </Button>
                    </Form.Item>

                    <Link to="/login" className="registration-link">Войти в аккаунт</Link>
                </Form>) : (
                    <div className="auth__success-block">
                        <div>
                            <InfoCircleTwoTone style={{fontSize: "50px"}}/>
                        </div>
                        <h2>Подтвердите свой аккаунт</h2>
                        <p>На вашу почту отправленно письмо с сылкой на подтверждение аккауната.</p>
                    </div>
                )}
            </WhiteShadowBlock>
        </>
    );
};

export default RegistrationForm;