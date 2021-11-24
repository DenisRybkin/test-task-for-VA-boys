import React, {useEffect} from 'react';
import './TodoList.scss'
import {TodoCards} from "../components/TodoCards";
import {usePerformerActions} from "../../../hooks/usePerformerActions";
import {useTodosActions} from "../../../hooks/useTdosActions";
import {useTypedSelector} from "../../../hooks/useTypedSelector";
import {Result} from "antd";
import {CheckIsLoading} from "../../../utils/helpers/checkIsLoading";
import {TodosService} from "../../../services/TodosService";
import {changePerformerTodoInterface, changeStateTodoInterface, editTodoInterface,} from "./TodoList.interface";
import {Todo} from "../../../interfaces/todo";

export const TodoList: React.FC = () => {
    const {fetchPerformers} = usePerformerActions();
    const {fetchTodos} = useTodosActions();

    const {performers, loading : performersLoading, error : performersError} = useTypedSelector(state => state.performers);
    const {todos, loading : todosLoading , error : todosError} = useTypedSelector(state => state.todos);
    useEffect(() => {
        fetchPerformers();
        fetchTodos();
    }, []);

    const editTodo = async ({todo, task, taskTitle} : editTodoInterface) : Promise<string|true> => {
        const newTodo = todo;
        let isSuccess = false;
        let reqError  = '';

        newTodo.task = task;
        newTodo.taskTitle = taskTitle;

        await TodosService.setTodo(newTodo)
            .then(() => isSuccess = true)
            .catch(error => reqError = error)

        return isSuccess ? isSuccess : reqError;
    }

    const changeStateTodo = async ({todoId,todoStatus}: changeStateTodoInterface) => {
        const arrOfOnceTodo = todos.find((item) => item.id === todoId);
        arrOfOnceTodo!.state = todoStatus;
        await TodosService.setTodo(arrOfOnceTodo!);
    }

    const changePerformerTodo = async ({todoId,performerId,performer}: changePerformerTodoInterface) => {
        const arrOfOnceTodo = todos.find((item) => item.id === todoId);
        arrOfOnceTodo!.performer = performer;
        arrOfOnceTodo!.performerId = performerId;
        await TodosService.setTodo(arrOfOnceTodo!);
    }
    const deleteTodo = async (id : string) => {
        await TodosService.deleteTodo(id);
    }

    const resultOfLoading = CheckIsLoading({
        firstLoading : performersLoading,
        secondLoading : todosLoading,
        firstError : performersError,
        secondError : todosError,
        })
    return (
        <div>
            {!(resultOfLoading.error || resultOfLoading.errors) ?
                <TodoCards deleteTodo={deleteTodo}
                           changePerformerTodo={changePerformerTodo}
                           changeStateTodo={changeStateTodo}
                           editTodo={editTodo}
                           todos={todos}
                           performers={performers}/>
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

