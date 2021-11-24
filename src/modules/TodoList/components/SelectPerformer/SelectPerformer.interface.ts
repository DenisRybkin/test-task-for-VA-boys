import {Performer} from "../../../../interfaces/performer";
import {changePerformerTodoInterface} from "../../containers/TodoList.interface";

export interface SelectPerformerInterface {
    changePerformerTodo: ({todoId,performerId,performer} :changePerformerTodoInterface) => void;
    performerId : string;
    performer : string | null;
    todoId : string;
    performersList : Performer[] | null;
}
