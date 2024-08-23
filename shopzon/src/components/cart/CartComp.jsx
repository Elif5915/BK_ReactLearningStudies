import React from 'react'
import { removeFromCart } from '../../redux/cardSlice'
import { useDispatch } from 'react-redux'

const CartComp = ({cart}) => {
  const dispatch = useDispatch()

  return (
    <div className='my-20 flex items-center justify-between'>
      <img className='w-[200px] h-[200px] object-cover' src={cart?.image} alt=''></img>
      <div className='w-[480px]'>
        <div className='text-2xl'>{cart?.title}</div>
        <div>{cart?.description}</div>
      </div>
      <div className='font-bold text-1xl'>{cart?.price} TL ({cart?.length})</div>
      <div onClick={() => dispatch(removeFromCart(cart?.id))} className='bg-red-500 text-white w-[150px] text-1xl cursor-pointer rounded-md h-10 flex items-center justify-center'>Ürünü Sil</div>
    </div>
  )
}

export default CartComp
