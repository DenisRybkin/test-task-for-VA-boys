import {Dispatch} from "redux";
import {TodoActionsType, TodosAction} from "../interfaces/todos";
import {TodosService} from "../../services/TodosService";

export const fetchTodos = () => {
    return async (dispatch: Dispatch<TodosAction>) => {
        try {
            dispatch({type : TodoActionsType.FETCH_TODOS});
            const todos = await TodosService.fetchTodos();
            dispatch({type : TodoActionsType.FETCH_TODOS_SUCCESS, payload : todos })
        } catch (error) {
            dispatch({type : TodoActionsType.FETCH_TODOS_ERROR,
                payload: {error : 'Произогла ошибка при загрузки заданий'}})
        }
    }
}