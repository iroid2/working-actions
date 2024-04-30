"use client"
import { dataType } from '@/Types/Types'
import { deleteProductById } from '@/actions/product'
import { Trash2 } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function Card({prodName,id,
    proddesc}:dataType) {
  return (
    <div className=''>
<Link href={`/detailedpage/${id}`} className=" flex items-center bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    <a href="#">
        <Image className="rounded-t-lg mx-auto" src="https://cdn.mercurycomputerslimited.com/wp-content/uploads/2022/05/HP-Laptop-15-dw1174nia.jpg" alt="" width={500} height={500}  />
    </a>
    
    <div className="p-2 ">
        <a href="#" >
            <h5 className="mb-2 text-[18px] font-bold tracking-tight text-gray-900 dark:text-white">{prodName}</h5>
        </a>
        <p className="mb-3 text-[14px] font-normal text-gray-700 dark:text-gray-400">The HP 39.6 cm (15.6″)   {proddesc}</p>
        <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            More Details
             <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
            </svg>
        </a>
    </div>
    
</Link>
<div className="flex justify-between p-3">
    <Link href={`/update/${id}`} className='bg-blue-700 Link-1  px-2  rounded-[8px] text-white'>Edit</Link>
    <button onClick={()=>deleteProductById(id)}><Trash2   /></button>
</div>
    </div>
  )
}
