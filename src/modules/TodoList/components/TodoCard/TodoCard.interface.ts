import {Performer} from "../../../../interfaces/performer";
import {Todo} from "../../../../interfaces/todo";

export interface TodoCardInterface {
    performers: Performer[];
    todo : Todo;
    loading : boolean;
}