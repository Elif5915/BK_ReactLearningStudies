import React, { useEffect } from 'react'
import { BiSearchAlt } from "react-icons/bi";
import { IoMdHeartEmpty } from "react-icons/io";
import { SlBasket } from "react-icons/sl";
import { useDispatch, useSelector } from 'react-redux';
import { getCartTotal } from '../../../redux/cardSlice';
import { useNavigate } from 'react-router-dom';

const NavbarRight = () => {

  const dispatch = useDispatch()
  const navigate = useNavigate()
  const {itemCount} = useSelector(state => state.carts)

  useEffect(() => {
    dispatch(getCartTotal())
  }, [dispatch])

  return (
    <div className='flex items-center gap-5'>
      <div className='flex items-center border p-1 rounded-full'>
        <input className='outline-none' type='text' placeholder='Arama Yapınız...'></input>
        <BiSearchAlt size={30} />
      </div>
      <IoMdHeartEmpty size={28} />
      <div onClick={() => navigate("cart")} className='relative'>
        <div className='absolute -top-3 -right-3 bg-red-400 text-white rounded-full w-5 h-5 flex items-center justify-center'>
          {itemCount}
        </div>
        <SlBasket size={28} />
      </div>

    </div>
  )
}

export default NavbarRight
