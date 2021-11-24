import {Performer} from "../../../../interfaces/performer";
import {Todo} from "../../../../interfaces/todo";
import {
    changePerformerTodoInterface,
    changeStateTodoInterface,
    editTodoInterface
} from "../../containers/TodoList.interface";

export interface TodoCardsInterface {
    deleteTodo : (id : string) => void;
    changePerformerTodo: ({todoId,performerId,performer} :changePerformerTodoInterface) => void;
    changeStateTodo : ({todoStatus,todoId}: changeStateTodoInterface) => void;
    performers: Performer[];
    todos : Todo[];
    editTodo : ({todo, task, taskTitle} : editTodoInterface) => Promise<string | boolean>;
}