import {Performer} from "../../../../interfaces/performer";
import {Todo} from "../../../../interfaces/todo";
import {
    ChangePerformerTodoInterface,
    ChangeStateTodoInterface,
    EditTodoInterface
} from "../../containers/TodoList.interface";

export interface TodoCardInterface {
    deleteTodo : ( id: string) => void;
    changePerformerTodo: ({todoId,performerId,performer} :ChangePerformerTodoInterface) => void;
    changeStateTodo : ({todoStatus,todoId}: ChangeStateTodoInterface) => void;
    editTodo : ({todo, task, taskTitle} : EditTodoInterface) => Promise<string | boolean>;
    performers: Performer[];
    todo : Todo;
}