import {Performer} from "../../../../interfaces/performer";
import {Todo} from "../../../../interfaces/todo";
import {EditTodoInterface} from "../../containers/TodoList.interface";

export interface TodoCardsContentInterface {
    buttonIsSubmitting: boolean;
    setButtonIsSubmitting: (value : boolean) => void
    activeTabKey : tabListTypes;
    performers : Performer[];
    todo : Todo;
    editTodo : ({todo, task, taskTitle} : EditTodoInterface) => Promise<string | boolean>;
}
export enum tabListKeys  {
    keyTask = 'task',
    keyEdit = 'edit',
}
export type tabListTypes = tabListKeys.keyTask | tabListKeys.keyEdit