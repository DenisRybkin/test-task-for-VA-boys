import {Performer} from "../../../../interfaces/performer";
import {Todo} from "../../../../interfaces/todo";
import {
    ChangePerformerTodoInterface,
    ChangeStateTodoInterface, CreateTodoInterface,
    EditTodoInterface
} from "../../containers/TodoList.interface";
import React from "react";

export interface TodoCardsInterface {
    createTodo : ({task,taskTitle} : CreateTodoInterface) => Promise<Todo|string>
    deleteTodo : (id : string) => void;
    changePerformerTodo: ({todoId,performerId,performer} :ChangePerformerTodoInterface) => void;
    changeStateTodo : ({todoStatus,todoId}: ChangeStateTodoInterface) => void;
    performers: Performer[];
    todos : Todo[];
    editTodo : ({todo, task, taskTitle} : EditTodoInterface) => Promise<string | boolean>;
}

export enum filteringValuesOfTodoState {
    all = 'Все',
    waiting = 'Ожидание',
    atWork = 'В работе',
    done = 'Готово'

}

export type filteringTypesOfTodoState = filteringValuesOfTodoState.all
    | filteringValuesOfTodoState.waiting
    | filteringValuesOfTodoState.atWork
    | filteringValuesOfTodoState.done;