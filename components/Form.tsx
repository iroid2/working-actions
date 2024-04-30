"use client"
import { dataType } from '@/Types/Types'
import { CreateProduct, updateProductById } from '@/actions/product'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form';

export default function Form({product}:{product:dataType}) {
    const {handleSubmit, register, reset ,formState:{errors}}= useForm<dataType>({
        defaultValues:product
    })
    const router=useRouter()
    const id= product?.id
    async function onSubmit(data:dataType) {
        console.log(data)
        reset()
        try {
            if(id){
                // update
                const updateProduct= await updateProductById(id,data)
            }else{
                const newProduct= await CreateProduct(data)
            }
            router.push('/')
        } catch (error) {
            
        }
    }
  return (
    <div>
        <section className="bg-gray-50 dark:bg-gray-900">
  <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
    
      <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                  Create a Product
              </h1>
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 md:space-y-6" action="#">
                  <div>
                      <label htmlFor="prodName" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Product Name</label>
                      <input type="prodName" {...register("prodName")} name="prodName" id="prodName" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" required />
                      {errors.prodName && <span className='text-red-500'>This field is required</span>}
                  </div>
                  <div>
                      <label htmlFor="proddesc" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Product Desc</label>
                      <textarea  {...register("proddesc")}   name="proddesc" id="proddesc" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" required />
                      {errors.proddesc && <span className='text-red-500'>This field is required</span>}
                  </div>
                  
                 
                  <button type="submit" className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 bg-blue-800 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Create a Product</button>
                  <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                      Already have an account? <a href="#" className="font-medium text-primary-600 hover:underline dark:text-primary-500">Login here</a>
                  </p>
              </form>
          </div>
      </div>
  </div>
</section>
    </div>
  )
}
