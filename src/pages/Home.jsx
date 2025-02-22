import React from 'react'
import Header from '../components/core/Header'
import FoodOptions from '../components/core/FoodOptions'
import Grocerys from '../components/core/Grocerys'
import { DineOut } from '../components/core/DineOut'


const Home = () => {
  return (
    <div>
         <Header/>
         <FoodOptions/>
         <Grocerys/>
         <DineOut/>

         <div className='mt-20 mb-10'>
         <img className='h-80  w-full object-cover' src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/m/seo/App_download_banner.png" alt="" />
         </div>
    </div>
  )
}

export default Home