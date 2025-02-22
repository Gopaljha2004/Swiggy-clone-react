import React from 'react'
import { DineCard } from './DineCard'
import { dineoutRestaurants } from '../../data/dinoutData'


export const DineOut = () => {
  return (
    <div className='w-[90%] mt-20 mb-20 mx-auto '>
      <h3 className='text-bold text-2xl '>Discover best restaurants on Dineout</h3>
      <div className='flex-nowrap gap-10 overflow-x-auto flex mt-10 '>
        {
          dineoutRestaurants.map((restInfo) => {
            return(
              <>
              <DineCard key={restInfo?.info.id}  restInfo={restInfo}/>
              </>
            )
          })
        }
      </div>
    </div>
  )
}
