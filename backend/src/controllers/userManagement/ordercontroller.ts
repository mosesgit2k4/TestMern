import { OrderItemServices, OrderServices } from "../../service/orderService.js";
import type { Request,Response } from "express";

class OrderController {
    addnewOrder = async (req:Request,res:Response) => {
        try {
            const {user_id,order_total,order_status} = req.body as any
            const order = await OrderServices.addnewOrder({
                user_id,order_total,order_status
            })
            res.status(200).json({order, message:"Order Created Successfully"})
        } catch (error) {
            res.status(500).json({error: (error as Error).message || "Internal Server Error"})
        }
    }
    addnewOrderItem = async(req:Request,res:Response) => {
        try {
            const {order_id,product_id,quantity,price} = req.body
            const orderitem = await OrderItemServices.addnewOrderItem({
                order_id,product_id,quantity,price
            })
            res.status(200).json({orderitem,message:"Order Item created successfully"})
        } catch (error) {
            res.status(500).json({error: (error as Error).message || "Internal Server Error"})
        }
    }
}

export const OrderControllers = new OrderController()