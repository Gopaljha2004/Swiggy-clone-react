import { motion } from "motion/react";
import React from "react";
import { Link } from "react-router";
import { CgSmartHomeCooker } from "react-icons/cg";
import { IoIosSearch } from "react-icons/io";
import { RiDiscountPercentLine } from "react-icons/ri";
import { IoHelpBuoyOutline } from "react-icons/io5";
import { RiUser3Line } from "react-icons/ri";
import { useSelector } from "react-redux";



const RestaurantHeader = () => {

  const count = useSelector(state => state.cartSlice.count);

  return (
    <div className="h-10 max-w-[80%] mt-5 container mx-auto shadow-2xl">
      <header className="flex items-center justify-between ">
       <Link to="/">
       <h1>Siwggy Logo</h1></Link> 
        <input type="text" placeholder="others" />

        <div className="flex gap-10">
          <div >
          <Link to="/corporate" className="flex items-center gap-2 font-semibold text-xl hover:text-orange-500">
            <CgSmartHomeCooker />
            Swiggy Corporate
          </Link>
          </div>
         

          <div>
          <Link className="flex items-center gap-2 font-semibold text-xl hover:text-orange-500" to="/search">
          <IoIosSearch />
          Search
          </Link>
          </div>
         
          <div>
          <Link className="flex items-center gap-2 font-semibold text-xl hover:text-orange-500" to="/search">
          <RiDiscountPercentLine />
          Offers
          </Link>
          </div>
         
         <div>
         <Link className="flex items-center gap-2 font-semibold text-xl hover:text-orange-500" to="/search">
         <IoHelpBuoyOutline />
          Help
          </Link>
         </div>
        
   
         <div className="flex items-center gap-2 font-semibold text-xl hover:text-orange-500">
         <RiUser3Line />
           Sign In
         </div>

         
         <Link to={"/checkout"}>
         <div className="flex items-center gap-2 font-semibold text-xl hover:text-orange-500">
          {/* cartCount */}
          <div className="relative flex items-center justify-center ">
          <svg  viewBox="-1 0 37 32" height="20" width="20" fill="gray"><path d="M4.438 0l-2.598 5.11-1.84 26.124h34.909l-1.906-26.124-2.597-5.11z"></path></svg>
          <span className="absolute text-white p-2 ">{count}</span>
          </div>
          Cart
         </div>
         </Link>
        

        </div>
      </header>
    </div>
  );
};

export default RestaurantHeader;
