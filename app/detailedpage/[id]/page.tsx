import { getProduct } from '@/actions/product'
import Image from 'next/image'
import React from 'react'

export default async function page({params:{id}}:{params:{id:string}}) {
  console.log("first")
  const product = await getProduct(id)
  return (
    <div className=' w-max-4xl'>
      <Image className="rounded-t-lg mx-auto" src="https://cdn.mercurycomputerslimited.com/wp-content/uploads/2022/05/HP-Laptop-15-dw1174nia.jpg" alt="" width={500} height={500}  />
       <div className="text-center">
       <h1 className='text-4xl font-bold'>{product?.prodName}</h1>
       <h1>{product?.proddesc}</h1>
       <h1>{product?.proddesc}</h1>
       </div>
      
      {/* <h1>{product?.prodName}</h1> */}
    </div>
  )
}
