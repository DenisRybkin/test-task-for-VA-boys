export interface Todo {
    id : number;
    taskTitle : string | null;
    task : string | null;
    performer : string | null;
    performerId : number;
    state : TodoStateTypes;
}
export type TodoStateTypes = 'Ожидание' | 'В работе' | 'Готово';