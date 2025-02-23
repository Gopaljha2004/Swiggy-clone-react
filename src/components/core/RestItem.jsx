import React from "react";
import { FcRating } from "react-icons/fc";
import { Link } from "react-router";


const RestItem = ({ rest }) => {
  return (
    <Link to={"/city/hyderabad/"+rest?.info?.id}>
    <div className=" shrink-0 mx-auto  w-[300px] transform transition duration-200 hover:scale-95">
      <img
        className="w-70 h-50 object-cover rounded-xl"
        src={
          "https://media-assets.swiggy.com/swiggy/image/upload/" +
          rest?.info?.cloudinaryImageId
        }
        alt=""
      />
      <h3 className="font-bold">{rest?.info?.name}</h3>
      <div className="flex gap-1 items-center text-gray-700 font-semibold">
        <FcRating/>
        <span>{rest?.info?.avgRating}</span>
        <span>{rest?.info?.sla?.slaString}</span>
      </div>
      <div className="h-6 text-gray-700 font-semibold overflow-hidden">{rest?.info?.cuisines.join(" ")}</div>
      <div className="text-gray-700 font-semibold"> {rest?.info?.areaName}</div>
    </div>
    </Link>
    
  );
};

export default RestItem;
