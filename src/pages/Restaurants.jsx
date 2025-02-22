import React from "react";
import RestaurantHeader from "../components/RestaurantHeader";
import fetchRestaurants from "../hooks/fetchRestaurants";
import fetchFoods from "../hooks/fetchFoods";
import RestFoodItem from "../components/core/RestFoodItem";

const Restaurents = () => {
  const { RestData } = fetchRestaurants();
  const { FoodData } = fetchFoods();

  console.log(FoodData);

  return (
    <div>
      <RestaurantHeader />
      {/* section */}
      <div className="mx-w-[80%] mx-auto container mt-20">
        <h3 className="text-2xl ml-4 font-semibold ">What's on your mind?</h3>
        <div className="flex flex-nowrap overflow-x-auto ">
        {
          FoodData.map((foodItem) =>{
            return(
              <RestFoodItem key={foodItem.id} foodItem={foodItem} />
            )
          })
        }
        </div>
      </div>

      <div className="mx-w-[80%] mx-auto container mt-20">
      <h3 className="text-2xl ml-4 font-semibold ">What's on your mind?</h3>
      <div>
        {
          RestData.map((rest) =>{
            return(
              <>
              
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
