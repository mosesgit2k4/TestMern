import { Router } from "express";
import { UserControllers } from "./userManagement/controllers.js";

export const usermanagementrouter:Router = Router()

usermanagementrouter.post('/register',UserControllers.createUser);




