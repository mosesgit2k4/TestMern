import { ProductServices } from "../../service/productService.js";
import type { Request,Response } from "express";

class ProductController {
    addnewProduct = async (req:Request,res:Response) => {
        try {
            const {product_name,product_description,price} = req.body as any
            const product = await ProductServices.addnewProduct({
                product_name,product_description,price
            })
            res.status(200).json({product,message: "Product Added Successfully"})
        } catch (err) {
            res.status(500).json({error:(err as Error).message || "Internal Server Error"})
        }
    }
}
export const ProductControllers  = new ProductController()