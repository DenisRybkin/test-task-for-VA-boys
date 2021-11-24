import React from 'react';
import './TodoCards.scss'
import {List} from 'antd';
import {TodoCardsInterface} from "./TodoCards.interface";
import {TodoCard} from "../TodoCard";


export const TodoCards: React.FC<TodoCardsInterface> = ({
                                                            performers,
                                                            todos,
                                                            editTodo,
                                                            changeStateTodo,
                                                            changePerformerTodo,
                                                            deleteTodo
                                                        }: TodoCardsInterface) => {
    return (
        <div>
            <List
                header={<div>Header</div>}
                footer={<div>Footer</div>}
                bordered
                dataSource={todos}
                renderItem={item => {
                    return (
                        <div className="list-item">
                            <TodoCard deleteTodo={deleteTodo}
                                      changePerformerTodo={changePerformerTodo}
                                      changeStateTodo={changeStateTodo}
                                      editTodo={editTodo}
                                      todo={item}
                                      performers={performers}
                            />
                        </div>
                    )
                }
                }
            />
        </div>
    );
};