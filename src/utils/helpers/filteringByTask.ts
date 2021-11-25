import {Todo} from "../../interfaces/todo";

interface filteringByTaskInterface {
    searchValue : string;
    arrTodos : Todo[]
}

export const filteringByTask = ({searchValue,arrTodos} : filteringByTaskInterface) : Todo[] => {
    if(searchValue.length === 0){
        return arrTodos;
    }
    return  arrTodos.filter(todo =>
        todo.task!.toLowerCase().includes(`${searchValue.toLowerCase()}`)
    )
}