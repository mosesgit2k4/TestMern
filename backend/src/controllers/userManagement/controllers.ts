import { UserServices} from "../../service/UserService.js";
import type { Request, Response } from "express";

class UserController {

    createUser = async(req: Request, res: Response) => {
        try{
            const  role_id = 1
            const { username, password, email, phnnumber, address} = req.body as any;
            const user = await UserServices.createUser({
                username,
                password,
                email,
                phnnumber,
                address,
                role_id 
            })
            res.status(200).json({
                user,
                message:"User created successfully"
            })
        }
        catch(err){
            res.status(500).json({ error: (err as Error).message || 'Internal server error' })
        }
    }
}

export const UserControllers = new UserController()