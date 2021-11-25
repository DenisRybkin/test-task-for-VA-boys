import {TodoActionsType, TodosAction, TodosState} from "../interfaces/todos";

const initialState : TodosState = {
    todos : [],
    loading : false,
    error : null,
}
export const todosReducer = (state = initialState, action :TodosAction) : TodosState => {
    switch (action.type) {
        case TodoActionsType.FETCH_TODOS:
            return {...state, loading : true, }
        case TodoActionsType.FETCH_TODOS_SUCCESS :
            return {...state, loading: false, todos: action.payload}
        case TodoActionsType.FETCH_TODOS_ERROR :
            return {...state, loading: true, error: action.payload.error}
        case TodoActionsType.CREATE_TODO : {
            return {...state , todos : [...state.todos, action.payload.todo]}
        }
        case TodoActionsType.SET_TODO_STATE : {
            const newTodos = state.todos.map(item => {
                if (item.id === action.payload.id) {
                    item.state = action.payload.state
                }
                return item;
            })
            return {...state, todos: newTodos}
        }
        case TodoActionsType.ASSIGN_TODO_PERFORMER : {
            const newTodos = state.todos.map(item => {
                if(item.id === action.payload.id){
                    item.performer = action.payload.performer;
                    item.performerId = action.payload.performerId
                }
                return item;
            });
            return {...state, todos : newTodos}
        }
        case TodoActionsType.SET_TODO_TASK : {
            const newTodos = state.todos.map(item => {
                if(item.id === action.payload.id){
                    item.task = action.payload.task;
                    item.taskTitle = action.payload.taskTitle;
                }
                return item;
            });
            return {...state, todos : newTodos}
        }
        case  TodoActionsType.DELETE_TODO_TASK :
            return {...state, todos : state.todos.filter(item => item.id !== action.payload.id)}
        default :
            return state
    }
}