import {useDispatch} from "react-redux";
import {bindActionCreators} from "redux";
import  * as AuthAction from '../store/actions/authAction';

export const useAuthActions = () => {
    const dispatch = useDispatch();
    return bindActionCreators(AuthAction,dispatch)
}