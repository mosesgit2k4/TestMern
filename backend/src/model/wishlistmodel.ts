import { DataTypes, Model, type Optional, type Sequelize } from "sequelize";
import dotenv from "../config/dotenv.js";
import User from "./usermodel.js";
import Product from "./productmodel.js";

interface wishlistAttributes {
    wishlist_id:number;
    user_id:number;
    product_id:number;
}

interface wishlistwithoutId extends Optional<wishlistAttributes,"wishlist_id">{}

class Wishlist extends Model<wishlistAttributes,wishlistwithoutId> implements wishlistAttributes
{
    declare wishlist_id: number;
    declare user_id: number;
    declare product_id: number;
}

export function initWishlist(sequelize: Sequelize) {
    Wishlist.init({
        wishlist_id: {
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
            }
        },
        product_id: {
            type:DataTypes.INTEGER,
            allowNull:false,
            references: {
                model:Product,
                key:"product_id"
            }
        }
    },{
        sequelize,
        tableName: dotenv.wishlisttable
    })
}

export default Wishlist