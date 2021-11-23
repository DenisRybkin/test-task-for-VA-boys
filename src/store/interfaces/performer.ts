import {Performer} from "../../interfaces/performer";

export interface PerformersState {
    performers : Performer[];
    loading: boolean;
    error : null | string;
}

export enum PerformersTypes {
    FETCH_PERFORMERS = 'FETCH_PERFORMERS',
    FETCH_PERFORMERS_SUCCESS = 'FETCH_PERFORMERS_SUCCESS',
    FETCH_PERFORMERS_ERROR = 'FETCH_PERFORMERS_ERROR',
}
export interface FetchPerformersAction {
    type : PerformersTypes.FETCH_PERFORMERS;
}
export interface FetchPerformersSuccessAction {
    type : PerformersTypes.FETCH_PERFORMERS_SUCCESS;
    payload: Performer[];
}

export interface FetchPerformersErrorAction {
    type : PerformersTypes.FETCH_PERFORMERS_ERROR;
    payload: string;
}

export type PerformersAction = FetchPerformersAction | FetchPerformersSuccessAction | FetchPerformersErrorAction;