import app from './app.js';
import { connectDb, sequelize } from "./config/database.js";
const port = 3000;
;
(async () => {
    await connectDb();
    await sequelize.sync({ alter: true });
    app.listen(port, () => {
        console.log(`Server running on http://localhost:${port}`);
    });
})();
//# sourceMappingURL=server.js.map