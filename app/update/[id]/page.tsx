import { getProduct } from '@/actions/product'
import Form from '@/components/Form'
import React from 'react'

export default async function page({ params: { id } }: { params: { id: string } }) {
  const product = await getProduct(id)
  return (
    <div className='bg-black'>
        {product && product.id && <Form product={product}/>}
    </div>
  )
}
