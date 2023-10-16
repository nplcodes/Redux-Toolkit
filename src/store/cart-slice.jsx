import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        itemsList:[],
        totalQuantity:0,
        showCart: false
    },
    reducers: {
        addToCart(state, action){
            const newItem = action.payload
            //check if item available
            const existingItem = state.itemsList.find((item)=> item.id === newItem.id);
            if(existingItem){
                existingItem.quantity+=1;
                existingItem.totalPrice +=newItem.price;
            }
            else{
                state.itemsList.push({
                    price: newItem.price,
                    id: newItem.id,
                    quantity: 1,
                    totalPrice: newItem.price,
                    name: newItem.name,
                })
                state.totalQuantity +=1
            }
        },
        removeFromCart(state, action) {
            const id = action.payload;
      
            const existingItem = state.itemsList.find((item) => item.id === id);
            if (existingItem.quantity === 1) {
              state.itemsList = state.itemsList.filter((item) => item.id !== id);
              state.totalQuantity--;
            } else {
              existingItem.quantity--;
              existingItem.totalPrice -= existingItem.price;
            }
          },        
          setShowcart(state){
            state.showCart = !state.showCart
        }
    }
})

export const cartActions = cartSlice.actions; 

export default cartSlice;