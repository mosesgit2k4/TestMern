import { Router } from "express";
import { UserControllers } from "./userManagement/usercontroller.js";
import { ProductControllers } from "./userManagement/productcontroller.js";
import { OrderControllers } from "./userManagement/ordercontroller.js";
export const usermanagementrouter:Router = Router()

usermanagementrouter.post('/register',UserControllers.createUser);
usermanagementrouter.post('/newproduct',ProductControllers.addnewProduct)
usermanagementrouter.post('/order',OrderControllers.addnewOrder)
usermanagementrouter.post('/orderitem',OrderControllers.addnewOrderItem)



