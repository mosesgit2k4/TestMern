import { Sequelize } from "sequelize";
export const sequelize = new Sequelize("users", "root", "Mo$27012004", {
    host: "localhost",
    dialect: "mysql",
    logging: false
});
export async function connectDb() {
    try {
        await sequelize.authenticate();
        console.log("Database connected");
    }
    catch (error) {
        console.log("Error");
        console.error("Unable to connect to DB", error);
        process.exit(1);
    }
}
//# sourceMappingURL=database.js.map