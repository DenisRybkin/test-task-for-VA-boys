import axios from "axios";
import {Todo} from "../interfaces/todo";

class Service {

    async fetchTodos () : Promise<Todo[]>  {
        const {data} = await axios.get<Todo[]>('https://619c0b4768ebaa001753c757.mockapi.io/todos');
        return data;
    }
    async setTodo (todo: Todo) : Promise<Todo> {
        return new Promise((resolve, reject) =>{
            axios.put<Todo>(`https://619c0b4768ebaa001753c757.mockapi.io/todos/${todo.id}`,todo)
                .then(({data}) => resolve(data))
                .catch((error) => reject(error));
        });
    }
    async deleteTodo (id: string) : Promise<Todo> {
        return new Promise((resolve, reject) =>{
            axios.delete<Todo>(`https://619c0b4768ebaa001753c757.mockapi.io/todos/${id}`)
                .then(({data}) => resolve(data))
                .catch((error) => reject(error));
        });
    }
}

export const TodosService = new Service()