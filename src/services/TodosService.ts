import axios from "axios";
import {Todo} from "../interfaces/todo";
import {NewTodo} from "../modules/TodoList/containers/TodoList.interface";
import {$api} from "../http";

class Service {

    async fetchTodos () : Promise<Todo[]>  {
        const {data} = await axios.get<Todo[]>('https://619c0b4768ebaa001753c757.mockapi.io/todos');
        return data;
    }
    async setTodo (todo: Todo) : Promise<Todo> {
        return new Promise((resolve, reject) =>{
            $api.put<Todo>(`todos/${todo.id}`,todo)
                .then(({data}) => resolve(data))
                .catch((error) => reject(error));
        });
    }
    async deleteTodo (id: string) : Promise<Todo> {
        return new Promise((resolve, reject) =>{
            $api.delete<Todo>(`todos/${id}`)
                .then(({data}) => resolve(data))
                .catch((error) => reject(error));
        });
    }
    async createTodo (todo : NewTodo) : Promise<Todo> {
        return new Promise((resolve, reject) =>{
            $api.post<Todo>(`/todos`,todo)
                .then(({data}) =>(resolve(data)))
                .catch((error) => reject(error));
        });
    }
}

export const TodosService = new Service()