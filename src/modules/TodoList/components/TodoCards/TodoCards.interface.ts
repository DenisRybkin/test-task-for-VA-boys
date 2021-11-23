import {Performer} from "../../../../interfaces/performer";
import {Todo} from "../../../../interfaces/todo";

export interface TodoCardsInterface {
    performers: Performer[];
    todos : Todo[];
    loading : boolean;
}