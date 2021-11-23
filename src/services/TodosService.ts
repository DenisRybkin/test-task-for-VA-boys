import axios from "axios";
import {Todo} from "../interfaces/todo";

class Service {

    async fetchTodos () : Promise<Todo[]>  {
        const {data} = await axios.get<Todo[]>('https://619c0b4768ebaa001753c757.mockapi.io/todos');
        return data;
    }
}

export const TodosService = new Service()