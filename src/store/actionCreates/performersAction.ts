import {PerformersAction, PerformersTypes} from "../interfaces/performer";
import {Dispatch} from "redux";
import axios from "axios";
import {Performer} from "../../interfaces/performer";
import {PerformerService} from "../../services/PerformerService";

export const fetchPerformers = () => {
    return async (dispatch: Dispatch<PerformersAction>) => {
        try {
            dispatch({type : PerformersTypes.FETCH_PERFORMERS});
            const performers = await PerformerService.fetchingPerformers();
            dispatch({type : PerformersTypes.FETCH_PERFORMERS_SUCCESS, payload : performers })
        } catch (error) {
            dispatch({type : PerformersTypes.FETCH_PERFORMERS_ERROR,
                payload: 'Произогла ошибка при загрузки исполнителей' })
        }
    }
}