import React from 'react'
import { useSelector } from 'react-redux'
import CheckoutHeader from '../components/core/CheckoutHeader';

const Checkout = () => {

     const items = useSelector(state => state.cartSlice.items);
     console.log(items);

  return (
    <div>
    <CheckoutHeader/>
      <div className='text-2xl font-bold'>
        {
        items.map((item) =>{
            return(
                <div key={item.id}>{item.name}</div>
            )
        })
    }
    </div>
    </div>)
}

export default Checkout