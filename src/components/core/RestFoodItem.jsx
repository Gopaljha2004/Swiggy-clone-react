import React from 'react'

const RestFoodItem = ({foodItem}) => {
  return (
    <div className='shrink-0'>
        <img className='w-50 h-50 object-cover' src={"https://media-assets.swiggy.com/swiggy/image/upload/"+foodItem?.imageId} alt="" />
    </div>
  )
}

export default RestFoodItem