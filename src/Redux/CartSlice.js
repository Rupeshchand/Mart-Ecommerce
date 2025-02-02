import { createSlice } from "@reduxjs/toolkit"; 
const cartSlice = createSlice({
    name:'cart',
    initialState:[],
    reducers:{
        add(state,action){

        },
        remove(state,action){

        }
    }
})
console.log(cartSlice)

export const {add,remove} = cartSlice.actions 
export default cartSlice.reducer