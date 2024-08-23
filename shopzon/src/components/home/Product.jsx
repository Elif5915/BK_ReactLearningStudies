import React from 'react'
import { useNavigate } from 'react-router-dom'

const Product = ({product}) => {
  const navigate = useNavigate();
  return (
    <div onClick={() => navigate(`products/${product?.id}`)} className='w-[340px] p-3 mb-4 mx-4 border rounded-md relative cursor-pointer'>
        <div className='text-1xl font-bold absolute rounded-md top-0 right-0 bg-black text-white p-2 m-1'>{product?.price} <span className='text-sm'>TL</span></div>
      <img className='w-[200px] h-[200px] object-cover m-auto' src={product?.image} alt=''></img>
      <div className='text-center font-bold px-3 mt-3 '>{product?.title}</div>
    </div>
  )
}

export default Product
