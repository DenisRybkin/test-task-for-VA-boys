import {Performer} from "../../../../interfaces/performer";
import {Todo} from "../../../../interfaces/todo";
import {
    changePerformerTodoInterface,
    changeStateTodoInterface,
    editTodoInterface
} from "../../containers/TodoList.interface";

export interface TodoCardInterface {
    deleteTodo : ( id: string) => void;
    changePerformerTodo: ({todoId,performerId,performer} :changePerformerTodoInterface) => void;
    changeStateTodo : ({todoStatus,todoId}: changeStateTodoInterface) => void;
    editTodo : ({todo, task, taskTitle} : editTodoInterface) => Promise<string | boolean>;
    performers: Performer[];
    todo : Todo;
}