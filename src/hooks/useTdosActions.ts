import {useDispatch} from "react-redux";
import {bindActionCreators} from "redux";
import  * as TodosAction from '../store/actions/todoActions';

export const useTodosActions = () => {
    const dispatch = useDispatch();
    return bindActionCreators(TodosAction,dispatch)
}