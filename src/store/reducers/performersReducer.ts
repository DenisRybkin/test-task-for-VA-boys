import {PerformersAction, PerformersState, PerformersTypes} from "../interfaces/performer";


const initialState : PerformersState = {
    performers : [],
    loading : false,
    error : null,
}

export const performersReducer = (state = initialState,action:PerformersAction) : PerformersState => {
    switch (action.type) {
        case PerformersTypes.FETCH_PERFORMERS :
            return {loading : true, error : null, performers: []}
        case PerformersTypes.FETCH_PERFORMERS_SUCCESS :
            return {loading : false, error : null, performers: action.payload}
        case PerformersTypes.FETCH_PERFORMERS_ERROR :
            return {loading : false, error : action.payload, performers: []}
        default :
            return state;
    }
}