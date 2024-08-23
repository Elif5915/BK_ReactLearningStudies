import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { getCartTotal } from '../redux/cardSlice'
import { useEffect } from 'react'
import CartComp from '../components/cart/CartComp'



const Cart = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { carts, totalAmount, itemCount } = useSelector(state => state.carts)

  console.log(carts, totalAmount, itemCount, "CATS");

  useEffect(() => {
    dispatch(getCartTotal())
  }, [dispatch])

  return (
    <div>
      {
        carts?.length > 0 ? <div>
          {
            carts?.map((cart, i) => (
              <CartComp  key={i} cart={cart}/>
            ))
          }

          <div className='flex items-center justify-end text-2xl'>TOPLAM TUTAR :  <span className='font-bold text-3xl ml-2'>{totalAmount} TL</span></div>

        </div> :
          <div>
            Kartınız boş...
          </div>

      }
    </div>
  )
}

export default Cart
