'use server'
import { dataType } from "@/Types/Types";
import { PrismaClient, Product } from "@prisma/client";
import { revalidatePath } from "next/cache";

const prisma= new PrismaClient()
export async function CreateProduct(data:dataType) {
    
    try {
        const newProduct= await prisma.product.create({
            data
        })
        console.log(data)
    } catch (error) {
        console.log(error)
    }
}

export async function getAllProducts() {
    // console.log(data)
    try {
        const products= await prisma.product.findMany()
        return products
    } catch (error) {
        console.log("none is available")
    }
}
export async function getProduct(id:any) {
    // console.log(data)
    try {
        const product= await prisma.product.findUnique({
            where :{
                id
            }
        })
        return product;
    } catch (error) {
        console.log("this product is not available")
    }
}

export async function updateProductById(id:any|undefined,data:dataType) {
    const {prodName,
        proddesc,
        }=data
    try {
        const updatedProduct =await prisma.product.update({
            where :{
                id
            },
            data:{
                prodName,
                proddesc,
            }
        })
    } catch (error) {
        console.log("failed to update")
        console.log(error)
    }
}
export async function deleteProductById(id:any) {
    try {
       if(id){
        const deleteProduct= await prisma.product.delete({
            where :{
                id
            }
        })
        revalidatePath('/')
        console.log(deleteProduct)
        return deleteProduct;
       }

    } catch (error) {
        console.log(error)
    }
}