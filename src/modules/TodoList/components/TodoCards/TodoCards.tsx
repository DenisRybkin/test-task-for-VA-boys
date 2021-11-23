import React from 'react';
import './TodoCards.scss'
import {Skeleton, Card, Avatar, List, Spin} from 'antd';
import {EllipsisOutlined} from '@ant-design/icons';
import {SelectStatus} from "../SelectStatus";
import {TodoCardsInterface} from "./TodoCards.interface";
import {SelectPerformer} from "../SelectPerformer";
import {TodoCard} from "../TodoCard/TodoCard";

const {Meta} = Card;


export const TodoCards: React.FC<TodoCardsInterface> = ({performers, todos}: TodoCardsInterface) => {
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
                            <TodoCard todo={item} performers={performers} loading={false}/>
                        </div>
                    )}
                }
            />

        </div>
    );
};

