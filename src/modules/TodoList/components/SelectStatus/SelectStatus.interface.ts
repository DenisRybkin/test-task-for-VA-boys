import {changeStateTodoInterface, editTodoInterface} from "../../containers/TodoList.interface";

export interface SelectStatusInterface {
    stateValue? : TodoStateTypes;
    todoId : string;
    changeStateTodo : ({todoStatus,todoId}: changeStateTodoInterface) => void;
}

export type TodoStateTypes = 'Ожидание' | 'В работе' | 'Готово';