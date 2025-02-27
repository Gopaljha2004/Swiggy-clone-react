import React from 'react'
import RestaurantHeader from '../components/RestaurantHeader'
import { Outlet } from 'react-router'

const SecondHome = () => {
  return (
    <div>
        <RestaurantHeader/>
        <Outlet/>
    </div>
  )
}

export default SecondHome