import React from "react";
import { IoHelpBuoyOutline } from "react-icons/io5";
import { RiUser3Line } from "react-icons/ri";
import { Link } from "react-router";

const CheckoutHeader = () => {
  return (
    <div className="h-20 shadow-2xl p-5 ">
      <header className="flex justify-between items-center font-semibold text-xl ">
        <div className="flex gap-7">
          <div>Swiggy Logo</div>
          <div>Secure Checkout</div>
        </div>

        <div className="flex gap-10">
          <div >
            <Link
              className="flex items-center gap-2 font-semibold text-xl hover:text-orange-500"
              to="/search"
            >
              <IoHelpBuoyOutline />
              Help
            </Link>
          </div>

          <div className="flex items-center gap-2 font-semibold text-xl hover:text-orange-500">
            <RiUser3Line />
            Sign In
          </div>
        </div>
      </header>
    </div>
  );
};

export default CheckoutHeader;
