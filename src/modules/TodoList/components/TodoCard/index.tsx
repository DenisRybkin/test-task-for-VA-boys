import React, {useState} from 'react';
import './TodoCard.scss'
import {Card} from 'antd';
import {SelectStatus} from "../SelectStatus";
import {TodoCardInterface} from "./TodoCard.interface";
import {SelectPerformer} from "../SelectPerformer";
import {TodoCardContent} from "../TodoCardContent";
import {tabListKeys, tabListTypes} from "../TodoCardContent/TodoCardsContent.interface";
import {ProfileOutlined, EditOutlined, DeleteOutlined} from '@ant-design/icons';


const tabList = [
    {
        key: 'task',
        tab: <p><ProfileOutlined style={{fontSize: "20px"}}/> Задача</p>,
    },
    {
        key: 'edit',
        tab: <p><EditOutlined style={{fontSize: "20px"}}/> Редактирование</p>,
    },
];

export const TodoCard: React.FC<TodoCardInterface> = ({
                                                          performers,
                                                          todo,
                                                          editTodo,
                                                          changeStateTodo,
                                                          changePerformerTodo,
                                                          deleteTodo
                                                      }: TodoCardInterface) => {

    const [activeTabKey, setActiveTabKey] = useState<tabListTypes>(tabListKeys.keyTask);
    const [buttonIsSubmitting, setButtonIsSubmitting] = useState<boolean>(false);

    const toggleTab = (key: tabListTypes) => {
        setActiveTabKey(key);
    };

    return (
        <Card
            style={{width: 400, marginTop: 16}}
            tabList={tabList}
            activeTabKey={activeTabKey}
            onTabChange={key => {
                // @ts-ignore
                toggleTab(key);
                setButtonIsSubmitting(false)

            }}
            actions={[
                <SelectStatus changeStateTodo={changeStateTodo}
                              todoId={todo.id}
                              stateValue={todo.state}
                />,
                <SelectPerformer changePerformerTodo={changePerformerTodo}
                                 performerId={todo.performerId}
                                 performer={todo.performer}
                                 todoId={todo.id}
                                 performersList={performers}
                />,
                <DeleteOutlined onClick={() => deleteTodo(todo.id)}
                                className="delete-icon"
                                style={{fontSize: "23px"}}/>
            ]}
        >
            <TodoCardContent editTodo={editTodo}
                             setButtonIsSubmitting={setButtonIsSubmitting}
                             buttonIsSubmitting={buttonIsSubmitting}
                             activeTabKey={activeTabKey}
                             todo={todo}
                             performers={performers}/>
        </Card>
    );
};