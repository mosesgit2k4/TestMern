import { DataTypes, Model, type Optional } from "sequelize";
import { sequelize } from "../config/database.js";
import bcrypt from "bcrypt";
import dotenv from "../config/dotenv.js";

interface UserAttributes {
    id: number;
    username: string;
    email: string;
    phnnumber: string;
    address: string;
    password: string;
    role_id: number;
}

interface UserCreateAttribute
    extends Optional<UserAttributes, "id" | "role_id"> {}

class User
    extends Model<UserAttributes, UserCreateAttribute>
    implements UserAttributes
{
    declare id: number;
    declare username: string;
    declare email: string;
    declare phnnumber: string;
    declare address: string;
    declare password: string;
    declare role_id: number;

    declare readonly createdAt: Date;
    declare readonly updatedAt: Date;

    static async hashPassword(password: string): Promise<string> {
        return bcrypt.hash(password, 10);
    }
}

User.init(
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },

        username: {
            type: DataTypes.STRING,
            allowNull: false,
        },

        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
        },

        phnnumber: {
            type: DataTypes.STRING,
            allowNull: false,
        },

        address: {
            type: DataTypes.TEXT,
            allowNull: false,
        },

        password: {
            type: DataTypes.STRING,
            allowNull: false,
        },

        role_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 1,
        },
    },
    {
        sequelize,
        tableName: dotenv.usertable,

        hooks: {
            beforeCreate: async (user: User) => {
                user.password = await User.hashPassword(user.password);
            },

            beforeUpdate: async (user: User) => {
                if (user.changed("password")) {
                    user.password = await User.hashPassword(user.password);
                }
            },
        },
    }
);

export default User;