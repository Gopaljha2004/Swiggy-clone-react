import React from 'react'
import { motion } from 'motion/react'

const GroceryItem = ({grocery}) => {
  return (
    <motion.div
     whileHover={{
      scale:1.1
     }}
    className='flex flex-col justify-center items-center'>
        <img className='w-50 h-50 object-contain' src={"https://media-assets.swiggy.com/swiggy/image/upload/" + grocery?.imageId} alt="item" />
        <span className='text-base font-semibold  '>{grocery?.action?.text}</span>
    </motion.div>
  )
}

export default GroceryItem