import {
    AssignTodoPerformerAction,
    CreateTodoAction, DeleteTodoTaskAction,
    SetTodoStatAction,
    SetTodoTaskAction,
    TodoActionsType
} from "../interfaces/todos";
import {Todo, TodoStateTypes} from "../../interfaces/todo";

export interface setStateTodoActionParam {
    id: string;
    state : TodoStateTypes;
}
export interface setPerformerTodoParam {
    id: string;
    performer : string;
    performerId: string;
}
export interface CreateTodoParam {
    todo : Todo;
}
export interface SetTodoTaskParam {
    id: string;
    task : string, taskTitle : string;
}
export interface DeleteTodoTaskParam {
    id: string;
}

export const setStateTodo = ({id,state}: setStateTodoActionParam) : SetTodoStatAction => ({
    type : TodoActionsType.SET_TODO_STATE,
    payload : {id,state},
})

export const setPerformerTodo = ({id,performerId,performer} : setPerformerTodoParam) :AssignTodoPerformerAction => ({
    type : TodoActionsType.ASSIGN_TODO_PERFORMER,
    payload : {id,performer,performerId}
})
export const CreateTodo = ({todo} : CreateTodoParam) : CreateTodoAction => ({
    type : TodoActionsType.CREATE_TODO,
    payload : {todo}
})
export const SetTodoTask = ({id,task,taskTitle} : SetTodoTaskParam) : SetTodoTaskAction => ({
    type : TodoActionsType.SET_TODO_TASK,
    payload : {id,task,taskTitle}
})
export const DeleteTodoTask = ({id} : DeleteTodoTaskParam) : DeleteTodoTaskAction => ({
    type : TodoActionsType.DELETE_TODO_TASK,
    payload : {id}
})