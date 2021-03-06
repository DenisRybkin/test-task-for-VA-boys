import React, {ReactNode, useState, useEffect} from 'react';
import {Avatar, Button, Card, Form, Input, Result, Skeleton} from "antd";
import './TodoCardContent.scss'
import {TodoCardsContentInterface} from "./TodoCardsContent.interface";

import {checkResultStatus} from "../../../../utils/helpers/checkResultStatus";
import {ResultStatusType} from "antd/lib/result";
import {ResultRequest} from "../../../../components/ResultRequest";

const {Meta} = Card;


export const TodoCardContent : React.FC<TodoCardsContentInterface> = ({buttonIsSubmitting,setButtonIsSubmitting,activeTabKey,todo,performers,editTodo} : TodoCardsContentInterface) => {

    const [taskTitle, setTaskTitle] = useState<string>(todo.taskTitle!);
    const [task, setTask] = useState<string>(todo.task!);
    const [resultRequest, setResultRequest] = useState<null|true|string>(null);
    const [loading, setLoading] = useState<boolean>(false);
    const [avatarPerformer, setAvatarPerformer] = useState<null | string>(null);


    const isDisabled : boolean = (task === todo.task && taskTitle === todo.taskTitle);

    const onChangeTaskTitle = (event : React.ChangeEvent<HTMLInputElement>) => {
        setTaskTitle(event.target.value);
    };

    const onChangeTask = (event : React.ChangeEvent<HTMLInputElement>) => {
        setTask(event.target.value);
    };


    const onRemakeTodo = async () => {
        setLoading(true);
        // await editTodo({todo, taskTitle, task})
        //     .then(res => setResultRequest(res === true ? true : String(res)));
        // setButtonIsSubmitting(true);
        // setLoading(false);
    }

    const onResetTaskValues =  ()  => {
        setTaskTitle(todo.taskTitle!);
        setTask(todo.task!);
        setButtonIsSubmitting(true);
    }

    const returnAvatar = () => {
        if(!todo.performerId || !todo.performer){
            return null;
        }
        if(performers.length > 0){
            return performers[Number(todo.performerId)-1].avatar
        } else {
            return null;
        }
    }

    useEffect(() => {
        console.log(returnAvatar());
        return setAvatarPerformer(returnAvatar());
    }, [returnAvatar, todo]);




    const contentList : {task : ReactNode, edit : ReactNode} = {
        task: <Skeleton loading={false} avatar active>
            <Meta
                avatar={<Avatar src={avatarPerformer}/>}
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
                label="??????????????????"
                name="taskTitle"
                rules={[{ required: true, message: '???????????????????? ?????????????? ?????????????????? !'}]}
            >
                <Input onChange={onChangeTaskTitle} />
            </Form.Item>

            <Form.Item
                label="??????????????"
                name="task"
                rules={[{ required: true, message: '???????????????????? ?????????????? ?????????????? !' }]}
            >
                <Input onChange={onChangeTask} />
            </Form.Item>
            <div className="flex-container">
                <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                    <Button disabled={isDisabled}
                            danger
                            onClick={onResetTaskValues}>
                        ??????????
                    </Button>
                </Form.Item>
                <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                    <Button onClick={onRemakeTodo}
                            disabled={isDisabled}
                            type="primary"
                            loading={loading}>
                        ??????????????????
                    </Button>
                </Form.Item>
            </div>
        </Form> : <ResultRequest
            // @ts-ignore
            status={checkResultStatus({
                resultRequest,
                positiveResult :"success" as ResultStatusType,
                negativeResult : "error" as ResultStatusType
            }!)}
            title={(resultRequest !== null) ? resultRequest === true ? "??????????????" : "???????????? !" : "??????????????"}
            />,
    };
    return (
        <div>
            {contentList[activeTabKey]}
        </div>
    );
};