import {ChangeStateTodoInterface} from "../../containers/TodoList.interface";

export interface SelectStatusInterface {
    stateValue : TodoStateTypes;
    todoId : string;
    changeStateTodo : ({todoStatus,todoId}: ChangeStateTodoInterface) => void;
}

export type TodoStateTypes = 'Ожидание' | 'В работе' | 'Готово';