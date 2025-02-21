import React from 'react'
import { GrocerGridCard } from '../../data/Grocery'
import GroceryItem from './GroceryItem'


const Grocerys = () => {
  return (
    <div className=' container mx-auto mt-15'>
        <h2 className='text-2xl font-semibold ml-5 mb-5' >Shop Groceries on Instamart</h2>
      <div className='flex flex-wrap gap-10' >
           {
            GrocerGridCard.map((grocery) => {
                return (
                    <>
                    <GroceryItem key={grocery?.id} grocery={grocery}/>
                    </>
                )
            })
           }
      </div>
    </div>
  )
}

export default Grocerys