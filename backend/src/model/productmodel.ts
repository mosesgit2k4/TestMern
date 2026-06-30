import {DataTypes,Model, type Optional} from "sequelize"
import dotenv from "../config/dotenv.js";
import { sequelize } from "../config/database.js";

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
},{
    sequelize,
    tableName: dotenv.producttable
});

export default Product