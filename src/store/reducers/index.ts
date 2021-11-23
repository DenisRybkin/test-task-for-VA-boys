import {combineReducers} from "redux";
import {performersReducer} from "./performersReducer";
import {todosReducer} from "./todosReducer";
import {authReducer} from "./authReducer";

export const rootReducer = combineReducers({
    performers : performersReducer,
    todos : todosReducer,
    user : authReducer,
})

export type RootState = ReturnType<typeof rootReducer>