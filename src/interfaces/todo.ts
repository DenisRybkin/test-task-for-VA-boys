export interface Todo {
    id : string;
    taskTitle : string | null;
    task : string | null;
    performer : string | null;
    performerId : string;
    state : TodoStateTypes;
}
export type TodoStateTypes = 'Ожидание' | 'В работе' | 'Готово';