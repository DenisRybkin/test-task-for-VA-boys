import React, {useEffect} from 'react';
import './TodoList.scss'
import {TodoCards} from "../components/TodoCards/TodoCards";
import {usePerformerActions} from "../../../hooks/usePerformerActions";
import {useTodosActions} from "../../../hooks/useTdosActions";
import {useTypedSelector} from "../../../hooks/useTypedSelector";
import {TodoListInterface} from "./TodoList.interface";
import {Result, Spin} from "antd";
import {CheckIsLoading} from "../../../utils/helpers/checkIsLoading";

export const TodoList: React.FC = () => {
    const {fetchPerformers} = usePerformerActions();
    const {fetchTodos} = useTodosActions();

    const {performers, loading : performersLoading, error : performersError} = useTypedSelector(state => state.performers);
    const {todos, loading : todosLoading , error : todosError} = useTypedSelector(state => state.todos);
    useEffect(() => {
        fetchPerformers();
        fetchTodos();
    }, []);

    const resultOfLoading = CheckIsLoading({
        firstLoading : performersLoading,
        secondLoading : todosLoading,
        firstError : performersError,
        secondError : todosError,
        })
    console.log(resultOfLoading);
    return (
        <div>
            {!(resultOfLoading.error || resultOfLoading.errors) ?
                <TodoCards loading={resultOfLoading.loading} todos={todos} performers={performers}/>
                :
                <Result
                    status="error"
                    title="Пожалуйста,повторите попытку позже"
                    subTitle={resultOfLoading.error ?
                    resultOfLoading.error
                    :
                    `${resultOfLoading.errors.firstError} и ${resultOfLoading.errors.secondError}`}
                />
            }

        </div>
    );
};

