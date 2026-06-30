import OrderItem from "../model/orderitemmodel.js";
import Order from "../model/ordermodel.js";

interface AddNewOrder {
    user_id:number;
    order_total:number;
    order_status:string;
}

interface AddnewOrderItem{
    order_id:number;
    product_id:number;
    quantity:number;
    price:number;

}
class OrderService {
    async addnewOrder (newOrder:AddNewOrder){
        try {
            const order = await Order.create(newOrder)
            return order
        } catch (error) {
            return error
        }
    }
}

class OrderItemService{
    async addnewOrderItem (newOrderItem:AddnewOrderItem){
        try {
            const orderitem = await OrderItem.create(newOrderItem)
            return orderitem
        } catch (error) {
            return error
        }
    }
}
export const OrderServices = new OrderService()
export const OrderItemServices = new OrderItemService()

