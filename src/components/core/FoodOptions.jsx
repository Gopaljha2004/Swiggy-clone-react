import React from 'react'
import { imageGridCards } from '../../data/foodOptions'
import OptionCard from './OptionCard'


const FoodOptions = () => {
  return (
    <div className='mx-w-[80%]  container mx-auto mt-24 mb-10'>
        <h2 className='text-2xl font-semibold ml-4'>Order our best food options</h2>
        
        <div className='flex flex-wrap'>
            {
                imageGridCards.map((options) => {
                   return(
                    <>
                    <OptionCard key={options?.id} options={options}/>
                    </>
                   )
                } )
            }
        </div>
    </div>
  )
}

export default FoodOptions