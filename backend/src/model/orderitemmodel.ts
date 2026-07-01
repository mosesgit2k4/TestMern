import { DataTypes, Model, type Optional, type Sequelize } from "sequelize";
import dotenv from "../config/dotenv.js";
import Order from "./ordermodel.js";
import Product from "./productmodel.js";

interface OrderItemAttributes {
    order_item_id: number;
    order_id:number;
    product_id: number;
    quantity:number;
    price:number;
}
interface OrderItemwithoutidAttributes
    extends Optional<OrderItemAttributes,"order_item_id"> {}

class OrderItem extends Model<OrderItemAttributes,OrderItemwithoutidAttributes> implements OrderItemAttributes{
    declare order_item_id: number;
    declare order_id: number;
    declare product_id: number;
    declare quantity: number;
    declare price: number;
    declare readonly createdAt: Date;
    declare readonly updatedAt: Date;
}

export function initOrderItem(sequelize: Sequelize) {
    OrderItem.init({
        order_item_id:{
            type:DataTypes.INTEGER,
            autoIncrement:true,
            primaryKey:true
        },
        order_id:{
            type:DataTypes.INTEGER,
            allowNull:false,
            references: {
                model:Order,
                key:"order_id"
            },
            onUpdate:"CASCADE",
            onDelete:"RESTRICT"
        },
        product_id:{
            type: DataTypes.INTEGER,
            allowNull:false,
            references: {
                model:Product,
                key: "product_id"
            },
            onUpdate:"CASCADE",
            onDelete:"RESTRICT"
        },
        quantity:{
            type:DataTypes.INTEGER,
            allowNull:false,
        },
        price: {
            type:DataTypes.INTEGER,
            allowNull:false
        }
    },{
        sequelize,
        tableName:dotenv.orderitemtable
    })
}

export default OrderItem