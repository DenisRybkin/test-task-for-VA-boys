import {Todo, TodoStateTypes} from "../../../interfaces/todo";

export interface editTodoInterface {
    todo: Todo;
    task : string;
    taskTitle : string;
}
export interface changeStateTodoInterface {
    todoStatus : TodoStateTypes;
    todoId : string;
}
export interface changePerformerTodoInterface {
    performer : string;
    performerId : string;
    todoId : string;
}