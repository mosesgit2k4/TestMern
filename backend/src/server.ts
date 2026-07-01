import { connectDb, sequelize } from "./config/database.js";
import dotenv from './config/dotenv.js';
import { initModels } from './model/index.js';

(async () => {
    await connectDb();
    initModels();
    await sequelize.sync({ alter: true });
    const { default: app } = await import('./app.js');
    app.listen(dotenv.PORT, () => {
        console.log(`Server running on http://localhost:${dotenv.PORT}`);
    });
})();
