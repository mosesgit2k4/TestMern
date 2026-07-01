import { sequelize } from "../config/database.js";
import { initUser } from "./usermodel.js";
import { initProduct } from "./productmodel.js";
import { initOrder } from "./ordermodel.js";
import { initOrderItem } from "./orderitemmodel.js";
import { initWishlist } from "./wishlistmodel.js";

export function initModels() {
    initUser(sequelize);
    initProduct(sequelize);
    initOrder(sequelize);
    initOrderItem(sequelize);
    initWishlist(sequelize);
}
