import { DataTypes, Model, type Optional, type Sequelize } from "sequelize";
import dotenv from "../config/dotenv.js";

interface ProductAttributes {
    product_id:number;
    product_name:string;
    product_description:string;
    price:number;
}
interface ProductwithoutidAttributes
    extends Optional<ProductAttributes,"product_id"> {}

class Product extends Model<ProductAttributes,ProductwithoutidAttributes>
implements ProductAttributes{
    declare product_id: number;
    declare product_name: string;
    declare product_description: string;
    declare price:number;
}

export function initProduct(sequelize: Sequelize) {
    Product.init({
        product_id: {
            type:DataTypes.INTEGER,
            autoIncrement:true,
            primaryKey:true
        },
        product_name:{
            type:DataTypes.STRING,
            allowNull:false
        },
        product_description: {
            type:DataTypes.STRING,
            allowNull:false
        },
        price: {
            type:DataTypes.INTEGER,
            allowNull:false
        }
    }, {
        sequelize,
        tableName: dotenv.producttable
    });
}

export default Product