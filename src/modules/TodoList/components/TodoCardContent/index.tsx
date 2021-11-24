import React, {ReactNode, useMemo, useCallback, useState} from 'react';
import {Avatar, Button, Card, Form, Input, Result, Skeleton} from "antd";
import './TodoCardContent.scss'
import {TodoCardsContentInterface} from "./TodoCardsContent.interface";
import {TodosService} from "../../../../services/TodosService";
import {checkResultStatus} from "../../../../utils/helpers/checkResultStatus";
import {ResultStatusType} from "antd/lib/result";

const {Meta} = Card;


export const TodoCardContent : React.FC<TodoCardsContentInterface> = ({buttonIsSubmitting,setButtonIsSubmitting,activeTabKey,todo,performers,editTodo} : TodoCardsContentInterface) => {

    const [taskTitle, setTaskTitle] = useState<string>(todo.taskTitle!);
    const [task, setTask] = useState<string>(todo.task!);
    const [resultRequest, setResultRequest] = useState<null|true|string>(null);


    const isDisabled : boolean = (task === todo.task && taskTitle === todo.taskTitle);

    const onChangeTaskTitle = (event : React.ChangeEvent<HTMLInputElement>) => {
        setTaskTitle(event.target.value);
    };

    const onChangeTask = (event : React.ChangeEvent<HTMLInputElement>) => {
        setTask(event.target.value);
    };


    const onRemakeTodo = async () => {
        await editTodo({todo, taskTitle, task})
            .then(res => setResultRequest(res === true ? true : String(res)));
        setButtonIsSubmitting(true);
    }

    const onResetTaskValues =  ()  => {
        setTaskTitle(todo.taskTitle!);
        setTask(todo.task!);
        setButtonIsSubmitting(true);
    }

    const returnAvatar = useMemo(()=> {
        if(!todo.performerId || !todo.performer){
            return null;
        }
        if(performers.length > 0){
            // @ts-ignore
            return <Avatar src={performers[todo.performerId].avatar}/>
        } else {
            return null;
        }
    } ,[performers,todo])



    const contentList : {task : ReactNode, edit : ReactNode} = {
        task: <Skeleton loading={false} avatar active>
            <Meta
                avatar={returnAvatar}
                title={todo.taskTitle}
                description={todo.task}
            />
        </Skeleton>,
        edit: !buttonIsSubmitting ? <Form
            name="basic"
            labelCol={{ span: 6 }}
            wrapperCol={{ span: 16 }}
            initialValues={{taskTitle : taskTitle, task :task}}
            // onFinish={onFinish}
            // onFinishFailed={onFinishFailed}
            autoComplete="off"
        >
            <Form.Item
                label="Заголовок"
                name="taskTitle"
                rules={[{ required: true, message: 'Пожалуйста введите заголовок !'}]}
            >
                <Input onChange={onChangeTaskTitle} />
            </Form.Item>

            <Form.Item
                label="Задание"
                name="task"
                rules={[{ required: true, message: 'Пожалуйста введите задание !' }]}
            >
                <Input onChange={onChangeTask} />
            </Form.Item>
            <div className="flex-container">
                <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                    <Button disabled={isDisabled}
                            danger
                            onClick={onResetTaskValues}>
                        Сброс
                    </Button>
                </Form.Item>
                <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                    <Button onClick={onRemakeTodo}
                            disabled={isDisabled}
                            type="primary">
                        Сохранить
                    </Button>
                </Form.Item>
            </div>
        </Form> : <Result
            // @ts-ignore
            status={checkResultStatus({
                resultRequest,
                positiveResult :"success" as ResultStatusType,
                negativeResult : "error" as ResultStatusType
            }!)}
            title={(resultRequest !== null) ? resultRequest === true ? "Успешно" : "Ошибка !" : "Успешно"}
            />,
    };
    return (
        <div>
            {contentList[activeTabKey]}
        </div>
    );
};