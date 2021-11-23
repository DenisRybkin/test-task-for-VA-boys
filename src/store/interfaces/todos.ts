import {Todo, TodoStateTypes} from "../../interfaces/todo";

export interface TodosState {
    todos : Todo[] | [];
    loading : boolean;
    error : null | string;
}

export enum TodoActionsType  {
    FETCH_TODOS = "FETCH_TODOS",
    FETCH_TODOS_SUCCESS = "FETCH_TODOS_SUCCESS",
    FETCH_TODOS_ERROR = "FETCH_TODOS_ERROR",
    SET_TODO_STATE = "SET_TODO_STATE",
    ASSIGN_TODO_PERFORMER = "ASSIGN_TODO_PERFORMER",
    CREATE_TODO = "CREATE_TODO",
    SET_TODO_TASK = "SET_TODO_TASK",
    DELETE_TODO_TASK = "DELETE_TODO_TASK"
}
export interface FetchTodoAction {
    type: TodoActionsType.FETCH_TODOS
}
export interface FetchTodoSuccessAction {
    type: TodoActionsType.FETCH_TODOS_SUCCESS;
    payload : Todo[];
}
export interface FetchTodoErrorAction {
    type: TodoActionsType.FETCH_TODOS_ERROR;
    payload : { error :string };
}
export interface SetTodoStatAction {
    type: TodoActionsType.SET_TODO_STATE;
    payload : {id: number, state : TodoStateTypes}
}
export interface AssignTodoPerformerAction {
    type: TodoActionsType.ASSIGN_TODO_PERFORMER;
    payload : {id: number, performer : string,performerId: number}
}
export interface CreateTodoAction {
    type: TodoActionsType.CREATE_TODO;
    payload : {todo : Todo};
}
export interface SetTodoTaskAction {
    type: TodoActionsType.SET_TODO_TASK;
    payload : {id: number, task : string, taskTitle : string}
}
export interface DeleteTodoTaskAction {
    type: TodoActionsType.DELETE_TODO_TASK;
    payload : {id: number}
}
export type TodosAction =
    FetchTodoAction |
    FetchTodoSuccessAction |
    FetchTodoErrorAction |
    SetTodoStatAction |
    AssignTodoPerformerAction |
    CreateTodoAction |
    SetTodoTaskAction |
    DeleteTodoTaskAction;