import React from "react";
import { MdArrowOutward } from "react-icons/md";
import { motion } from "motion/react";
import { Link } from "react-router";

const Header = () => {
  return (
    <div className="bg-[#ff5200] text-white">
      <div className="flex justify-between container mx-auto py-8">
        <img
          className="h-12 w-48  "
          src="https://res.cloudinary.com/dutdah0l9/image/upload/v1720058694/Swiggy_logo_bml6he.png"
          alt="swiggy-logo"
        />
        <div className="flex  items-center font-semibold gap-10 ">
          <a
            target="_blank"
            className="font-semibold  text-base"
            href="https://www.swiggy.com/corporate/"
          >
            Swiggy Corporate
          </a>
          <a target="_blank" href="https://partner.swiggy.com/login#/swiggy">
            Parter with us
          </a>
          <div className="flex gap-4 items-center border border-white px-6 py-3 rounded-md">
            <a href="">Get The App</a>
            <MdArrowOutward className="h-[20px]" />
          </div>
          <motion.a
            whileHover={{
              scale: 1.1,
            }}
            className="bg-black text-white px-6 py-3 rounded-md"
            href=""
          >
            Sign in
          </motion.a>
        </div>
      </div>

      <div className=" relative ">
        <div className="text-5xl max-w-[60%] container mx-auto font-semibold text-center ">
          Order food & groceries. Discover best restaurants. Swiggy it!
        </div>
        <div className="container mx-auto max-w-[80%]  flex gap-5 py-6 px-5  ">
          <img
            className="absolute top-0 left-0 h-113 w-62"
            src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/testing/seo-home/Veggies_new.png"
            alt="bag-img"
          />
          <img
            className="absolute top-0 right-0  h-113 w-62"
            src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/testing/seo-home/Sushi_replace.png"
            alt="food-img"
          />

          <input
            className="bg-white text-gray-600 pl-3 text-base p-3 w-[35%] rounded-md ml-15"
            type="text"
            placeholder="Enter your Delivery Location"
          />

          <input
            className="bg-white text-gray-600 pl-3 text-base p-3 w-[50%] rounded-md"
            type="search"
            placeholder="Search For Restuarants items and more"
          />
        </div>
      </div>

      <div className="flex mt-16 max-w-[80%] gap-5 container mx-auto">
        <motion.div
          whileHover={{
            scale: 1.1,
          }}
        >
          <Link to="/restaurants">
            <img
              src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/8/1/fa01e85b-3057-482d-9523-5289722b1df2_Food4BU.png"
              alt="rest"
            />
          </Link>
        </motion.div>

        <motion.div
          whileHover={{
            scale: 1.1,
          }}
        >
          <Link to="/instamart">
            <img
              src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/8/16/ca34e375-f1bd-4a2e-a3e7-0a20833be83b_IM4BU1.png"
              alt="rest"
            />
          </Link>
        </motion.div>

        <motion.div
          whileHover={{
            scale: 1.1,
          }}
        >
          <Link to="/dineout">
            <img
              src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/8/1/76c30e5a-8adb-4795-bf5b-fa64e9e9e1d3_DO4BU.png"
              alt="rest"
            />
          </Link>
        </motion.div>

        <motion.div
          whileHover={{
            scale: 1.1,
          }}
        >
          <Link to="/genie">
            <img
              src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/31/14033c0b-8907-420b-b72a-d26cfa68dc7b_Genie4BU.png"
              alt="rest"
            />
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default Header;
