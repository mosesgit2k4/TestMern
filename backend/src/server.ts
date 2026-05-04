import app from './app.js'
import { connectDb, sequelize } from "./config/database.js";
import dotenv from './config/dotenv.js';


(async () => {
    await connectDb();
    await sequelize.sync({ alter: true });
    app.listen(dotenv.PORT, () => {
        console.log(`Server running on http://localhost:${dotenv.PORT}`);
    });
})();
