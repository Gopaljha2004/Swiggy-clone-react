import React from "react";
import RestaurantHeader from "../components/RestaurantHeader";
import fetchRestaurants from "../hooks/fetchRestaurants";
import fetchFoods from "../hooks/fetchFoods";
import RestFoodItem from "../components/core/RestFoodItem";
import RestItem from "../components/core/RestItem";
import RestaurantShimmer from "../components/shimmer/RestaurantShimmer";
import { IoFilter } from "react-icons/io5";
import { RiArrowDownSLine } from "react-icons/ri";

const Restaurents = () => {
  const { RestData } = fetchRestaurants();
  const { FoodData } = fetchFoods();

  console.log(RestData);

  if (RestData?.length == 0 || FoodData?.length == 0)
    return <RestaurantShimmer />;

  return (
    <div>
      <RestaurantHeader />
      {/* section */}
      <div className="w-[90%] mx-auto container mt-20">
        <h3 className="text-2xl ml-4 font-semibold ">What's on your mind?</h3>
        <div className="flex flex-nowrap overflow-x-auto ">
          {FoodData.map((foodItem) => {
            return <RestFoodItem key={foodItem?.id} foodItem={foodItem} />;
          })}
        </div>
      </div>
      {/* section -2 */}
      <div className="w-[90%] mx-auto  mt-20">
        <h3 className="text-2xl ml-4 font-semibold ">
          Top restaurant chains in Hyderabad
        </h3>
        <div className="flex flex-nowrap overflow-x-auto gap-2 mt-5">
          {RestData.map((rest) => {
            return (
              <>
                <RestItem key={rest?.info?.id} rest={rest} />
              </>
            );
          })}
        </div>
      </div>

      <div className="w-[91%] mx-auto  mt-20">
        {/* filter div */}
        <h3 className="text-2xl ml-4 font-semibold ">
          Restaurants with online food delivery in Hyderabad
        </h3>
        <div  className="flex gap-5 mt-5 ">
          <button className="border flex gap-2 items-center text-gray-700 rounded-2xl p-2 cursor-pointer">
            Filter
            <IoFilter />
          </button >
          <button className="border flex gap-2 items-center text-gray-700 rounded-2xl p-2 cursor-pointer">
            Sort by
            <RiArrowDownSLine />
          </button>
          <button className="border text-gray-700 rounded-2xl p-2 cursor-pointer">Fast Delivey</button>
          <button className="border text-gray-700 rounded-2xl p-2 cursor-pointer">New on swiggy</button>
          <button className="border text-gray-700 rounded-2xl p-2 cursor-pointer">Rating 4.0+</button>
          <button className="border text-gray-700 rounded-2xl p-2 cursor-pointer">Pure Veg</button>
          <button className="border text-gray-700 rounded-2xl p-2 cursor-pointer">Offers</button>
          <button className="border text-gray-700 rounded-2xl p-2 cursor-pointer">Rs. 300-Rs. 600</button>
          <button className="border text-gray-700 rounded-2xl p-2 cursor-pointer">Less than Rs. 300</button>
        </div>
        <div className="flex flex-wrap gap-2 mt-5">
          {RestData.map((rest) => {
            return (
              <>
                <RestItem key={rest?.info?.id} rest={rest} />
              </>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Restaurents;
