import {User} from "../../interfaces/user";
import {UserAction, userTypes} from "../interfaces/authUser";

const initialState : User = {
    isAuth : false,
    eMail : null
}

export const authReducer = (state = initialState, action :UserAction) : User => {
    switch (action.type) {
        case userTypes.AUTHORIZATION_USER:
            return {...state,isAuth : true, eMail: action.payload}
        default :
            return state;
    }
}