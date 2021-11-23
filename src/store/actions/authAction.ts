import {userTypes} from "../interfaces/authUser";


export const authUser = (userData : string) => ({
    type : userTypes.AUTHORIZATION_USER,
    payload : userData
})
