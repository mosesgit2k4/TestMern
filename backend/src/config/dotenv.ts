import dotenv from 'dotenv'

dotenv.config()

export default {
    DB_HOST: process.env.DB_HOST!,
    DB_USER: process.env.DB_USER!,
    DB_PASSWORD: process.env.DB_PASSWORD!,
    DB_NAME: process.env.DB_NAME!,
    PORT: process.env.PORT!,
    usertable: process.env.USERDETAILS!,
    orderitemtable: process.env.ORDERITEMS!,
    ordertable:process.env.ORDER!,
    producttable: process.env.PRODUCT!
}
