import { DataTypes, Model, type Optional } from "sequelize";
import { sequelize } from "../config/database.js";
import dotenv from "../config/dotenv.js";
import User from "./usermodel.js";

interface OrderAttributes {
    order_id: number;
    user_id:number;
    order_total: number;
    order_status:string;
}
interface OrderwithoutidAttributes
    extends Optional<OrderAttributes,"order_id"> {}

class Order extends Model<OrderAttributes,OrderwithoutidAttributes> implements OrderAttributes{
    declare order_id: number;
    declare user_id: number;
    declare order_total: number;
    declare order_status: string;
}

Order.init (
    {
        order_id: {
            type:DataTypes.INTEGER,
            autoIncrement:true,
            primaryKey:true
        },
        user_id: {
            type:DataTypes.INTEGER,
            allowNull:false,
            references: {
                 model:User,
                 key:"id"
            },
            onUpdate:"CASCADE",
            onDelete:"RESTRICT"

        },
        order_total: {
            type:DataTypes.INTEGER,
            

        },
        order_status: {
            type:DataTypes.ENUM("PENDING","FAILED","SUCCESS"),
            allowNull:false
        }
    },{
        sequelize,
        tableName: dotenv.ordertable
    }
)

export default Order