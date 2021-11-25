import React, {useState} from 'react';
import './CreateTodo.scss';
import {Button, Input, Form, Card} from "antd";
import {CloudUploadOutlined, AppstoreAddOutlined, UploadOutlined} from '@ant-design/icons';
import {CreateTodoCmpInterface} from "./CreateTodo.interface";
import {Simulate} from "react-dom/test-utils";
import {ResultRequest} from "../../../../components/ResultRequest";

const inputStyleConfig = {width: "90%"}

export const CreateTodo = ({createTodo}:CreateTodoCmpInterface) => {

    const [showForm, setShowForm] = useState<boolean>(false);
    const [loadingAddTodo, setLoadingAddTodo] = useState<boolean>(false);
    const [resultRequest, setResultRequest] = useState<true|string|null>(null);

    const closeForm = () => {
        setShowForm(false)
    }


    const addTodo = (values : {task : string, taskTitle :string}) => {
        setLoadingAddTodo(true);
        createTodo({
            task : values.task,
            taskTitle : values.taskTitle
        }).then(() =>{
            setResultRequest(true);
            }).catch((error) =>{
            setResultRequest(error);
        }).finally(() => {
            setTimeout(() =>{
                setResultRequest(null);
                closeForm();
                setLoadingAddTodo(false)
                } ,2000);
        })
    }

    return (
        <div className="center-container">
            {
                showForm ?
                    resultRequest !== null ?
                        <ResultRequest status={resultRequest === true ? "success" : "error"}
                                       title={resultRequest === true ? "Задача создана успешно" : `${resultRequest}`}/>
                        :
                    <div className="form-new-todo">
                        <Card style={{width: "70%"}}
                              title="Добавьте задачу"
                              bordered>
                            <Form
                                name="basic"
                                labelCol={{span: 7}}
                                wrapperCol={{span: 17}}
                                initialValues={{remember: true}}
                                onFinish={addTodo}
                                autoComplete="off"
                            >
                                <Form.Item
                                    label="Заголовк"
                                    name="taskTitle"
                                    rules={[{required: true, message: 'Введите заголовк задачи!'}]}
                                >
                                    <Input size="middle"
                                           placeholder="Введите заголовк задачи"
                                           prefix={<AppstoreAddOutlined style={{opacity: "0.5"}}/>}
                                           style={inputStyleConfig}/>
                                </Form.Item>

                                <Form.Item
                                    label="Задача"
                                    name="task"
                                    rules={[{required: true, message: 'Введите задачу!'}]}
                                >
                                    <Input size="middle"
                                           placeholder="Введите задачу"
                                           prefix={<AppstoreAddOutlined style={{opacity: "0.5"}}/>}
                                           style={inputStyleConfig}/>
                                </Form.Item>

                                <div className="form-buttons">
                                    <Form.Item wrapperCol={{offset: 8, span: 16}}>
                                        <Button type="primary"
                                                icon={<CloudUploadOutlined/>}
                                                size="middle" danger
                                                onClick={closeForm}>
                                            Отмена
                                        </Button>
                                    </Form.Item>
                                    <Form.Item wrapperCol={{offset: 8, span: 16}}>
                                        <Button loading={loadingAddTodo}
                                                htmlType="submit"
                                                type="primary"
                                                icon={<CloudUploadOutlined/>}
                                                size="middle">
                                            Добавить задачу
                                        </Button>
                                    </Form.Item>
                                </div>
                            </Form>
                        </Card>
                    </div>
                    :
                    <Button onClick={() => setShowForm(true)}
                            type="primary"
                            shape="round"
                            icon={<UploadOutlined/>}
                            size="large">
                        Добавить задачу
                    </Button>
            }
        </div>
    );
};

