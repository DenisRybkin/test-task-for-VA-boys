import {useDispatch} from "react-redux";
import {bindActionCreators} from "redux";
import  * as TodosActionCreators from '../store/actionCreates/todosAction';

export const useTodosActionsCreators = () => {
    const dispatch = useDispatch();
    return bindActionCreators(TodosActionCreators,dispatch)
}