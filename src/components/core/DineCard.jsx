import React from "react";

export const DineCard = ({ restInfo }) => {
  return (
    <div className="shrink-0">
      <div className="relative  ">
        <img
          className="w-90 h-50 object-cover rounded-2xl "
          src={
            "https://media-assets.swiggy.com/swiggy/image/upload/" +
            restInfo?.info?.mediaFiles[0]?.url
          }
          alt="Restaurant"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent z-0"></div>
        <p className="text-xl text-white font-bold absolute bottom-4 left-2 z-10">
          {restInfo?.info?.name}
        </p>
        <p className="text-xl text-white font-bold absolute bottom-4 right-2 z-10">
          {restInfo?.info?.rating?.value}
        </p>
      </div>
      {/* second div */}
      <div>
        <div className="text-base text-slate-800 flex justify-between font-semibold">
          <span>{restInfo.info.cuisines}</span>
          <span>{restInfo.info.costForTwo}</span>
        </div>

        <div className="text-base text-slate-800 flex justify-between font-semibold">
          <span>{restInfo.info.locationInfo.formattedAddress}</span>
          <span>{restInfo.info.locationInfo.distanceString}</span>
        </div>

        {/* <div className="bg-[#1BA672] text-white font-semibold rounded-md py-1 px-1 mx-auto ">
            <span>
            {restInfo?.info?.offerInfoV3?.vendorOffer?.title}
            </span>
            <span>
            {restInfo?.info?.offerInfoV3?.vendorOffer?.subtitle}
            </span>

            </div> */}
      </div>
    </div>
  );
};
