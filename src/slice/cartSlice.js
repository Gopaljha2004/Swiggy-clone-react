import {createSlice} from '@reduxjs/toolkit';

const cart = createSlice({
    name:"cartSlice",
    initialState:{ items:[] , count:0 },
    reducers:{
        addItem:(state, action) =>{
         state.items.push({...action.payload , quantity:1});
         state.count++;
        },
        IncrementItem : (state, action) =>{
            const element = state.items.find(item => item.id === action.payload.id);
            element.quantity++;
            state.count++;

        },
        DecrementItem : (state, action) =>{
           const element = state.items.find(item => item.id === action.payload.id);
           if(element.quantity > 1){
            element.quantity--;
           }else{
            state.items = state.items.filter(item => item.id !== action.payload.id);
           }
           state.count--;
        },
    }
})

export const {addItem , IncrementItem , DecrementItem} = cart.actions;
export default cart.reducer;