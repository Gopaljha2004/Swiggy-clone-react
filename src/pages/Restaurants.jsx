import React from "react";
import RestaurantHeader from "../components/RestaurantHeader";
import fetchRestaurants from "../hooks/fetchRestaurants";
import fetchFoods from "../hooks/fetchFoods";
import RestFoodItem from "../components/core/RestFoodItem";
import RestItem from "../components/core/RestItem";
import RestaurantShimmer from "../components/shimmer/RestaurantShimmer";


const Restaurents = () => {
  const { RestData } = fetchRestaurants();
  const { FoodData } = fetchFoods();

  console.log(RestData)

  if(RestData?.length==0 || FoodData?.length ==0)
    return <RestaurantShimmer/>

  return (
    <div>
      <RestaurantHeader />
      {/* section */}
      <div className="w-[90%] mx-auto container mt-20">
        <h3 className="text-2xl ml-4 font-semibold ">What's on your mind?</h3>
        <div className="flex flex-nowrap overflow-x-auto ">
        {
          FoodData.map((foodItem) =>{
            return(
              <RestFoodItem key={foodItem?.id} foodItem={foodItem} />
            )
          })
        }
        </div>
      </div>
{/* section -2 */}
      <div className="w-[90%] mx-auto  mt-20">
      <h3 className="text-2xl ml-4 font-semibold ">Top restaurant chains in Hyderabad</h3>
      <div className="flex flex-nowrap overflow-x-auto gap-2 mt-5">
        {
          RestData.map((rest) =>{
            return(
              <>
              <RestItem key={rest?.info?.id} rest={rest}/>
              </>
            )
          })
        }
      </div>
      </div>
    </div>
  );
};

export default Restaurents;
