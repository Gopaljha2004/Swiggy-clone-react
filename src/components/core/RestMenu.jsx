import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router";
import MenuCard from "./MenuCard";

const RestMenu = () => {
  const { id } = useParams();
  console.log("Restaurant ID:", id);

  const [menuData, setMenuData] = useState([]);
  const [selected, setSelected] = useState(null);

  async function fetchData() {
    try {
      const proxyServer = "https://cors-anywhere.herokuapp.com/";
      const swiggyApi = `https://www.swiggy.com/mapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.7040592&lng=77.10249019999999&restaurantId=${id}`;

      const response = await fetch(proxyServer + swiggyApi);
      const data = await response.json();

      console.log("API Response:", data);

      const menuItems =
        data?.data?.cards?.find((card) => card?.groupedCard)?.groupedCard
          ?.cardGroupMap?.REGULAR?.cards || [];
      const filterData = menuItems.filter(
        (items) => "title" in items?.card?.card
      );

      setMenuData(filterData);
    } catch (e) {
      console.error("Error fetching data:", e.message);
    }
  }

  useEffect(() => {
    fetchData();
  }, [id]);

  if (menuData.length === 0)
    return (
      <h1 className="text-center mt-20 text-4xl font-semibold">
        Data is Loading Please Wait...
      </h1>
    );

  console.log("menu data", menuData);

  return (
    <div className="container mx-auto px-4">
      {/* Search Link */}
      <div className="mt-10  flex justify-center">
        <Link to={`/city/hyderabad/${id}/search`}>
          <span className="inline-block bg-gray-400 text-3xl py-2 px-6 text-center w-[900px] text-white font-semibold rounded-2xl hover:bg-gray-500 transition-colors">
            Search For Food Items
          </span>
        </Link>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto mt-12">
        {/* Filter Buttons */}
        <div className="flex justify-center gap-4 mb-8">
          <button
            className={`px-6 py-3 font-bold rounded-2xl transition-colors ${
              selected === "veg"
                ? "bg-green-400 text-white"
                : "bg-gray-500 text-white hover:bg-gray-600"
            }`}
            onClick={() => setSelected(selected === "veg" ? null : "veg")}
          >
            Veg
          </button>
          <button
            className={`px-6 py-3 font-bold rounded-2xl transition-colors ${
              selected === "nonveg"
                ? "bg-red-500 text-white"
                : "bg-gray-500 text-white hover:bg-gray-600"
            }`}
            onClick={() => setSelected(selected === "nonveg" ? null : "nonveg")}
          >
            Non Veg
          </button>
        </div>

        {/* Menu Cards */}
        <div className="grid grid-cols-1 gap-6">
          {menuData.map((menu) => (
            <MenuCard
              key={menu?.card?.card?.title}
              menuInfo={menu?.card?.card}
              foodSelected={selected}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default RestMenu;