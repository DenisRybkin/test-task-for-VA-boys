import {Todo} from "../../../../interfaces/todo";
import {CreateTodoInterface} from "../../containers/TodoList.interface";

export interface CreateTodoCmpInterface {
    createTodo : ({task,taskTitle} : CreateTodoInterface) => Promise<Todo|string>
}