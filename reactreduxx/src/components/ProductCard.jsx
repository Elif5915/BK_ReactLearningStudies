import React, { useState } from 'react'
import { BsThreeDots } from "react-icons/bs";
import { useDispatch } from 'react-redux';
import { deleteDataFunc, updateDataFunc } from '../redux/dataSlice';
import { modalFunc } from '../redux/modalSlice';
import { useNavigate } from 'react-router-dom';

const ProductCard = ({ dt }) => {
  const [openEdit, setOpenEdit] = useState(false)
  const dispatch = useDispatch();
  const navigate = useNavigate(); //yönlendirme yapmak için bunu çağırdım

  const updateFunc = () => {
    dispatch(modalFunc()) //modal penceresinin açılması isteğimiz bu.
    setOpenEdit(false) // modal pencersi açıldıktan sonra üç nokta basınca çıkan pencerenin kapanmasını istedik.
    navigate(`/?update=${dt?.id}`) //enpointe paramtere olarak ürün id gönderdik.

  }

  return (
    <div className='w-[200px] h-[200px] relative m-2'>
      <img className='w-full h-full rounded-md' src={dt?.url} alt='' ></img>
      <div className='obsulute left-0 bottom-0 bg-indigo-600 text-white w-full'>
        <div>{dt?.name}</div>
        <div>{dt?.price}£</div>
      </div>
      <div onClick={() => setOpenEdit(!openEdit)} className='absolute top-0 right-2  '>
        <BsThreeDots color='black' size={28} />
      </div>
      {
        openEdit && (
          <div className='bg-white border border-white text-black absolute top-5 right-2 p-2 text-sm '>
            <div onClick={() => dispatch(deleteDataFunc(dt?.id))} className='cursor-pointer'>Sil</div>
            <div onClick={updateFunc} className='cursor-pointer'>Güncelle</div>

          </div>
        )}

    </div>
  )
}

export default ProductCard
