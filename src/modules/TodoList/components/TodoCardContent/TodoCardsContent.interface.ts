import {Performer} from "../../../../interfaces/performer";
import {Todo} from "../../../../interfaces/todo";
import {editTodoInterface} from "../../containers/TodoList.interface";

export interface TodoCardsContentInterface {
    buttonIsSubmitting: boolean;
    setButtonIsSubmitting: (value : boolean) => void
    activeTabKey : tabListTypes;
    performers : Performer[];
    todo : Todo;
    editTodo : ({todo, task, taskTitle} : editTodoInterface) => Promise<string | boolean>;
}
export enum tabListKeys  {
    keyTask = 'task',
    keyEdit = 'edit',
}
export type tabListTypes = tabListKeys.keyTask | tabListKeys.keyEdit