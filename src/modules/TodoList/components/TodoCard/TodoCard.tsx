import React, {ReactNode, useState} from 'react';
import './TodoCard.scss'
import {Skeleton, Card, Avatar, Form, Input, Button} from 'antd';
import {SelectStatus} from "../SelectStatus";
import {TodoCardInterface} from "./TodoCard.interface";
import {SelectPerformer} from "../SelectPerformer";

const {Meta} = Card;
enum tabListKyes  {
    keyTask = 'task',
    keyEdit = 'edit',
}
type tabListTypes = tabListKyes.keyTask | tabListKyes.keyEdit

const tabList = [
    {
        key: 'task',
        tab: 'Задача',
    },
    {
        key: 'edit',
        tab: 'Редактирование',
    },
];

export const TodoCard: React.FC<TodoCardInterface> = ({performers, todo}: TodoCardInterface) => {
    const [activeTabKey, setActiveTabKey] = useState<tabListTypes>(tabListKyes.keyTask);

    const onTab1Change = (key : tabListTypes) => {
        // @ts-ignore
        const test = contentList[activeTabKey];
        setActiveTabKey(key);
    };

    const contentList : {task : ReactNode, edit : ReactNode} = {
        task: <Skeleton loading={false} avatar active>
            <Meta
                avatar={performers.length > 0 && <Avatar src={performers[todo.performerId].avatar}/>}
                title={todo.taskTitle}
                description={todo.task}
            />
        </Skeleton>,
        edit: <Form
            name="basic"
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 16 }}
            initialValues={{ remember: true }}
            // onFinish={onFinish}
            // onFinishFailed={onFinishFailed}
            autoComplete="off"
        >
            <Form.Item
                label="Username"
                name="username"
                rules={[{ required: true, message: 'Please input your username!' }]}
            >
                <Input />
            </Form.Item>

            <Form.Item
                label="Password"
                name="password"
                rules={[{ required: true, message: 'Please input your password!' }]}
            >
                <Input.Password />
            </Form.Item>



            <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                <Button type="primary" htmlType="submit">
                    Submit
                </Button>
            </Form.Item>
        </Form>,
    };

    return (
        <Card
            style={{width: 400, marginTop: 16}}
            tabList={tabList}
            activeTabKey={activeTabKey}
            onTabChange={key => {
                // @ts-ignore
                onTab1Change(key);
            }}
            actions={[
                <SelectStatus todoId={todo.id}
                              stateValue={todo.state}
                />,
                <SelectPerformer performer={todo.performer}
                                 todoId={todo.performerId}
                                 performersList={performers}
                />,
            ]}
        >
            {contentList[activeTabKey]}
        </Card>
    );
};