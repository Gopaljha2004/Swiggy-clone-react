import React from "react";
import { FcOk } from "react-icons/fc";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItem, IncrementItem, DecrementItem } from "../../slice/cartSlice";

const MenuItems = ({ menuItems }) => {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.cartSlice.items);
  const element = items.find(item => item.id === menuItems.id)
  const count = element ? element.quantity : 0;

  const handleAddItem = () => {
    dispatch(addItem(menuItems));
  };

  const handleIncrementItem = () => {
    dispatch(IncrementItem(menuItems));
  };

  const handleDecrementItem = () => {
    dispatch(DecrementItem(menuItems));
  };

  return (
    <div className="flex justify-between items-start mt-10 mx-auto mb-10 p-4 bg-white shadow-md rounded-lg">
      {/* Left Section - Text Info */}
      <div className="w-[45%] space-y-2">
        <h4 className="text-xl font-semibold text-gray-800">
          {menuItems?.name}
        </h4>
        <span className="text-lg font-medium text-gray-600">
          {"₹" +
            (menuItems?.price / 100 ||
              menuItems?.variantsV2?.variantGroups[0]?.variations[0]?.price ||
              menuItems.defaultPrice / 100)}
        </span>
        <div className="flex items-center gap-2 text-green-500 font-semibold">
          <FcOk />
          <span>{menuItems?.ratings?.aggregatedRating?.rating || 4.45}</span>
          <span>
            {"(" +
              (menuItems?.ratings?.aggregatedRating?.ratingCountV2 || 30) +
              ")"}{" "}
          </span>
        </div>
        <p className="text-gray-600 text-sm leading-5">
          {menuItems?.description}
        </p>
      </div>

      {/* Right Section - Image & Button */}
      <div className="w-[30%] flex flex-col items-center">
        {/* Fix Image Container */}
        <div className="w-full aspect-[4/3] overflow-hidden rounded-lg shadow">
          <img
            className="w-full h-full object-cover "
            src={
              "https://media-assets.swiggy.com/swiggy/image/upload/" +
              menuItems?.imageId
            }
            alt="food-images"
          />
        </div>
        {count === 0 ? (
          <button
            onClick={() => handleAddItem()}
            className="mt-3 px-5 py-2 text-lg font-bold text-green-600 border border-green-400 rounded-lg bg-white hover:bg-green-50 transition"
          >
            ADD
          </button>
        ) : (
          <div className="flex gap-5 mt-5 text-2xl font-bold border border-green-400 rounded-lg p-2 text-green-500">
            <button className="cursor-pointer" onClick={() => handleDecrementItem()}>
              -
            </button>
            <div className="text-green-500">{count}</div>
            <button className="cursor-pointer" onClick={() => handleIncrementItem()}>
              +
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default MenuItems;
