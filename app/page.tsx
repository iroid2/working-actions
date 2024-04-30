
import { getAllProducts } from '@/actions/product'
import Card from '@/components/Card'
import Link from 'next/link'
import React from 'react'

export default async function page() {
 const products= await getAllProducts()
//  console.log(products)
  return (
    <div className='p-10'>
      <div className="hero">hero
      </div>
      <Link href={'/createproduct'} className='bg-black px-3 py-2 rounded-[5px] m-4 text-white'>Create Product</Link>
      <div className="products grid grid-cols-1 md:grid-cols-3 gap-8">
      
        {
          products?.map((product,i)=>{
            return(
              <Card key={i} id={product.id } prodName={product.prodName } proddesc={product.proddesc} />
            )
          })
        }
        
      </div>
    </div>
  )
}
