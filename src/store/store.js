import {configureStore} from '@reduxjs/toolkit';
import cartReducer from '../slice/cartSlice';

const store = configureStore({
    reducer:{
        cartSlice:cartReducer,
    }
})

export default store