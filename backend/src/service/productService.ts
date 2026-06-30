import Product from "../model/productmodel.js";

interface AddNewProduct {
    product_name: string;
    product_description: string;
    price:number;
}

class ProductService {
    async addnewProduct (productData: AddNewProduct){
        try {
            const product = await Product.create(productData)
            return product
        } catch (error) {
            return error
        }
    }
}

export const ProductServices = new ProductService()