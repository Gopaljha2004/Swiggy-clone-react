import React, { use, useState } from "react";
import MenuItems from "./MenuItems";
import { IoIosArrowUp } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";

const MenuCard = ({ menuInfo, foodSelected }) => {
  console.log(menuInfo);
  const [isOpen, setIsOpen] = useState(true);



  if ("categories" in menuInfo) {
    return (
      <div className="w-full">
        <p className="text-3xl ml-44 font-bold mt-10">{menuInfo.title}</p>
        <div>
          {menuInfo?.categories?.map((items) => (
            <MenuCard
              key={items?.title}
              menuInfo={items}
              foodSelected={foodSelected}
            ></MenuCard>
          ))}
        </div>
      </div>
    );
  }

  if (!isOpen) {
    return (
      <div className="container w-[80%] mx-auto mt-4 mb-4 p-6 bg-white shadow-md rounded-lg">
        <div className="w-full flex justify-between ">
          <h3 className="text-2xl font-bold text-left pb-2">
            {menuInfo?.title}
          </h3>
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <IoIosArrowUp size={34} /> : <IoIosArrowDown size={32} />}
          </button>
        </div>
      </div>
    );
  }

  if (foodSelected === "veg") {
    return (
      <div className="container w-[80%] mx-auto mt-4 mb-4 p-6 bg-white shadow-md rounded-lg">
        <div className="w-full flex justify-between ">
          <h3 className="text-xl font-bold text-left pb-2">
            {menuInfo?.title}
          </h3>
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <IoIosArrowUp size={32} /> : <IoIosArrowDown size={32} />}
          </button>
        </div>
        <div className="mt-4 space-y-4">
          {menuInfo?.itemCards
            ?.filter((food) => "isVeg" in food?.card?.info)
            ?.map((menuItem) => (
              <MenuItems
                key={menuItem?.card?.info?.id}
                menuItems={menuItem?.card?.info}
              />
            ))}
        </div>
      </div>
    );
  }

  if (foodSelected === "nonveg") {
    return (
      <div className="container w-[80%] mx-auto mt-4 mb-4 p-6 bg-white shadow-md rounded-lg">
        <div className="w-full flex justify-between ">
          <h3 className="text-xl font-bold text-left pb-2">
            {menuInfo?.title}
          </h3>
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <IoIosArrowUp size={32} /> : <IoIosArrowDown size={32} />}
          </button>
        </div>
        <div className="mt-4 space-y-4">
          {menuInfo?.itemCards
            ?.filter((food) => !("isVeg" in food?.card?.info))
            ?.map((menuItem) => (
              <MenuItems
                key={menuItem?.card?.info?.id}
                menuItems={menuItem?.card?.info}
              />
            ))}
        </div>
      </div>
    );
  }

  return (
    <div className="container w-[80%] mx-auto mt-4 mb-4 p-6 bg-white shadow-md rounded-lg">
      <div className="w-full flex justify-between ">
        <h3 className="text-xl font-bold text-left pb-2">{menuInfo?.title}</h3>
        <button onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <IoIosArrowUp size={32} /> : <IoIosArrowDown size={32} />}
        </button>
      </div>
      <div className="mt-4 space-y-4">
        {menuInfo?.itemCards?.map((menuItem) => (
          <MenuItems
            key={menuItem?.card?.info?.id}
            menuItems={menuItem?.card?.info}
          />
        ))}
      </div>
    </div>
  );
};

export default MenuCard;
