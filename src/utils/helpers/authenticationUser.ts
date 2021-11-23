interface UserDataInterface {
    email : string,
    password : string,
}
const UserData : UserDataInterface = {
    email : "denis.rybkin.94@mail.ru",
    password : "testTEST12345"
}


export const authenticationUser = ({email, password} : UserDataInterface) : boolean => {
    return email === UserData.email && password === UserData.password;
}