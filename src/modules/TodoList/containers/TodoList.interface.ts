import {Todo, TodoStateTypes} from "../../../interfaces/todo";

export interface EditTodoInterface {
    todo: Todo;
    task : string;
    taskTitle : string;
}
export interface ChangeStateTodoInterface {
    todoStatus : TodoStateTypes;
    todoId : string;
}
export interface ChangePerformerTodoInterface {
    performer : string;
    performerId : string;
    todoId : string;
}
export interface CreateTodoInterface {
    taskTitle : string;
    task : string;
}
export interface NewTodo {
    taskTitle : string;
    task : string;
    performer : string | null;
    performerId : string;
    state : TodoStateTypes;
}