export interface SelectStatusInterface {
    stateValue? : TodoStateTypes;
    todoId : number;
}

export type TodoStateTypes = 'Ожидание' | 'В работе' | 'Готово';