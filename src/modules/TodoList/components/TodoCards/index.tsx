import React, {useEffect, useState} from 'react';
import './TodoCards.scss';
import {Input, List, Select} from 'antd';
import {filteringTypesOfTodoState, filteringValuesOfTodoState, TodoCardsInterface} from "./TodoCards.interface";
import {TodoCard} from "../TodoCard";
import {Todo} from "../../../../interfaces/todo";
import {SearchOutlined} from '@ant-design/icons';
import {filteringByTask} from "../../../../utils/helpers/filteringByTask";
import {filteringBySate} from "../../../../utils/helpers/filteringByTodoState";
import {CreateTodo} from "../CreateTodo";

const {Option} = Select;


export const TodoCards: React.FC<TodoCardsInterface> = ({
                                                            performers,
                                                            todos,
                                                            editTodo,
                                                            changeStateTodo,
                                                            changePerformerTodo,
                                                            deleteTodo,
                                                            createTodo
                                                        }: TodoCardsInterface) => {

    const [searchValue, setSearchValue] = useState<string>("");
    const [todosList, setTodosList] = useState<Todo[]>(todos);
    const [stateFilterValue, setStateFilterValue] = useState<filteringTypesOfTodoState>(filteringValuesOfTodoState.all);

    const onSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
        const inputValue = event.target.value;

        setTodosList(filteringByTask({
            searchValue: inputValue,
            arrTodos: todos
        }));
        setSearchValue(inputValue);
    }

    const filterByTodoState = (filterParam: filteringTypesOfTodoState) => {
        setTodosList(filteringBySate({
            filterValue: filterParam,
            arrTodos: todos
        }));
        setStateFilterValue(filterParam)
    }

    useEffect(() => {
        setTodosList(todos);
    }, [todos]);


    return (
        <div>
            <div className="todos-actions">
                <Input size="large" placeholder="Посик по заданиям"
                       prefix={<SearchOutlined style={{opacity: "0.5"}}/>}
                       onChange={onSearch}
                       value={searchValue}
                       style={{width: "60%"}}/>
                <Select
                    value={stateFilterValue}
                    style={{width: 120, margin: '0 8px'}}
                    onChange={(e) => filterByTodoState(e)}
                    size="large"
                >
                    <Option key={filteringValuesOfTodoState.all}
                            value="Все">{filteringValuesOfTodoState.all}</Option>
                    <Option key={filteringValuesOfTodoState.waiting}
                            value="Ожидание">{filteringValuesOfTodoState.waiting}</Option>
                    <Option key={filteringValuesOfTodoState.atWork}
                            value="В работе">{filteringValuesOfTodoState.atWork}</Option>
                    <Option key={filteringValuesOfTodoState.done}
                            value="Готово">{filteringValuesOfTodoState.done}</Option>
                </Select>
            </div>
            <div className="list-todos">
                <div className="column-container">
                    <List
                        bordered
                        size="small"
                        dataSource={todosList}
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
                        }}
                    />
                    <CreateTodo createTodo={createTodo}/>
                </div>

            </div>
        </div>
    );
};