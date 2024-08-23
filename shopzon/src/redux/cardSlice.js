import { createSlice } from "@reduxjs/toolkit";

const fetchFromLocalStorage = () => {
    let cart = localStorage.getItem('cart');
    if (cart) {
        return JSON.parse(localStorage.getItem('cart'));
    }
    else {
        return [];
    }
}

const storeInLocalStorage = (data) => {
    localStorage.setItem('cart', JSON.stringify(data));
}


const initialState = {
    carts: fetchFromLocalStorage(),
    itemCount: 0,
    totalAmount: 0,
}

const cardSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {

        addToCart: (state, action) => {
            const isItemCart = state.carts.find(item => item.id === action.payload.id)

            if (isItemCart) {
                const tempCart = state.carts.map(item => {
                    if (item.id === action.payload.id) {
                        let tempQty = item.quantity + action.payload.quantity;
                        let tempTotalPrice = tempQty + item.price;
                        return {
                            ...item, quantity: tempQty, totalPrice: tempTotalPrice
                        }
                    }
                    else {
                        return item;
                    }
                });

                state.carts = tempCart;
                storeInLocalStorage(state.carts); //ekleme
            }
            else {
                state.carts.push(action.payload);
                storeInLocalStorage(state.carts); //ekleme işlemi ürünleri
            }

        },
        removeFromCart: (state, action) => { //silme işlemi
            const tempCart = state.carts.filter(item => item.id !== action.payload)
            state.carts = tempCart
            storeInLocalStorage(state.carts)
        },
        clearCart: (state) => { //tüm kartları temizleme 

            state.carts = []; //sadece boş array çevir
            storeInLocalStorage(state.carts);
        },
        getCartTotal: (state) => { // ürün sayısı,toplam fiyatı döndürme işlemi
            state.totalAmount = state.carts.reduce((cartTotal, cartItem) => {
                return cartTotal += cartItem.price * cartItem.quantity
            }, 0)
            state.itemCount = state.carts.length
        }
    }


});

export const {addToCart, removeFromCart, clearCart, getCartTotal} = cardSlice.actions;
export default cardSlice.reducer;
