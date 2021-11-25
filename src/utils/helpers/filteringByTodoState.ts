import {Todo} from "../../interfaces/todo";
import {
    filteringTypesOfTodoState,
} from "../../modules/TodoList/components/TodoCards/TodoCards.interface";

interface filteringByTodoStateInterface {
    filterValue : filteringTypesOfTodoState;
    arrTodos : Todo[]
}

export const filteringBySate= ({filterValue,arrTodos} : filteringByTodoStateInterface) : Todo[] => {
    if(filterValue === "Все"){
        return arrTodos;
    }
    return  arrTodos.filter(todo =>
        todo.state!.toLowerCase().includes(`${filterValue.toLowerCase()}`)
    )
}