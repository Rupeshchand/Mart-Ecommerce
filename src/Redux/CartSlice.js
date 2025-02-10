import { createSlice } from "@reduxjs/toolkit"; 
const CartSlice = createSlice({
    name:'cart',
    initialState:[],
    reducers:{
        add(state,action){
            const {id,quantity = 1,productName,price,imgUrl} = action.payload
            const existingItem = state.find(item => item.id === action.payload.id)
            if(existingItem){
                existingItem.quantity += quantity
            }
            else{
                state.push({id,quantity,productName,price,imgUrl})
            }
         },
        remove(state,action){
            const existingItem = state.find(item => item.id === action.payload.id)
            if(existingItem && existingItem.quantity > 1){
                existingItem.quantity -= 1
            }
            else
            return state.filter(item => item.id !== action.payload.id)
        }
    }
})
export const {add,remove} = CartSlice.actions 
export default CartSlice.reducer