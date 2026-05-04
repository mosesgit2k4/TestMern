import { Sequelize} from "sequelize";
import dotenv from "./dotenv.js";

export const sequelize = new Sequelize(dotenv.DB_NAME,dotenv.DB_USER,dotenv.DB_PASSWORD,{
    host: dotenv.DB_HOST,
    dialect: "mysql",
    logging: false
});

export async function connectDb() {
    try {
        await sequelize.authenticate();
        console.log("Database connected");
        
    } catch (error) {
        console.log("Error")
        console.error("Unable to connect to DB",error);
        process.exit(1);
        
    }
}
