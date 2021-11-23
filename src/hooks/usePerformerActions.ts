import {useDispatch} from "react-redux";
import {bindActionCreators} from "redux";
import  * as PerformerActionCreators from '../store/actionCreates/performersAction';

export const usePerformerActions = () => {
    const dispatch = useDispatch();
    return bindActionCreators(PerformerActionCreators,dispatch)
}