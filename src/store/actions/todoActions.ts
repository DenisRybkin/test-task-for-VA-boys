import {
    AssignTodoPerformerAction,
    CreateTodoAction,
    CreateTodoParam,
    DeleteTodoTaskAction,
    DeleteTodoTaskParam,
    setPerformerTodoParam,
    setStateTodoActionParam,
    SetTodoStatAction,
    SetTodoTaskAction,
    SetTodoTaskParam,
    TodoActionsType
} from "../interfaces/todos";
import {Todo} from "../../interfaces/todo";

export const setStateTodo = ({id,state}: setStateTodoActionParam) : SetTodoStatAction => ({
    type : TodoActionsType.SET_TODO_STATE,
    payload : {id,state},
})

export const setPerformerTodo = ({id,performerId,performer} : setPerformerTodoParam) :AssignTodoPerformerAction => ({
    type : TodoActionsType.ASSIGN_TODO_PERFORMER,
    payload : {id,performer,performerId}
})
export const CreateTodo = (todo : Todo) : CreateTodoAction => ({
    type : TodoActionsType.CREATE_TODO,
    payload : {todo}
})
export const SetTodoTask = ({id,task,taskTitle} : SetTodoTaskParam) : SetTodoTaskAction => ({
    type : TodoActionsType.SET_TODO_TASK,
    payload : {id,task,taskTitle}
})
export const DeleteTodoTask = ({id} : DeleteTodoTaskParam) : DeleteTodoTaskAction => ({
    type : TodoActionsType.DELETE_TODO_TASK,
    payload : {id}
})