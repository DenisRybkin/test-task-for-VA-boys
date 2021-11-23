import {Performer} from "../../../../interfaces/performer";

export interface SelectPerformerInterface {
    performer : string | null;
    todoId : number;
    performersList : Performer[] | null;
}
