import User from "../model/usermodel.js";

interface Createusers {
    username:string;
    email:string;
    password:string;
    phnnumber:string;
    address:string;
    role_id:number;
}

class UserService {
    async createUser(userData: Createusers){
        try {
            if(userData.role_id == 1){
                 const user  = await User.create(userData)
                 return user
            }
            else{
                const user  = await User.create(userData)
                return user
            }
           
        } catch (error) {
            return error
        }
    }
}

export const UserServices = new UserService()