import {Performer} from "../../../../interfaces/performer";
import {ChangePerformerTodoInterface} from "../../containers/TodoList.interface";

export interface SelectPerformerInterface {
    changePerformerTodo: ({todoId,performerId,performer} :ChangePerformerTodoInterface) => void;
    performerId : string;
    performer : string | null;
    todoId : string;
    performersList : Performer[] | null;
}
