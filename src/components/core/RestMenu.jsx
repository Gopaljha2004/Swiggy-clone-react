import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import MenuCard from "./MenuCard";

const RestMenu = () => {
  const { id } = useParams();
  console.log("Restaurant ID:", id);

  const [menuData, setMenuData] = useState([]);

  async function fetchData() {
    try {
      const proxyServer = "https://cors-anywhere.herokuapp.com/";
      const swiggyApi = `https://www.swiggy.com/mapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.7040592&lng=77.10249019999999&restaurantId=${id}`;

      const response = await fetch(proxyServer + swiggyApi);
      const data = await response.json();

      console.log("API Response:", data); // Log full response structure

      const menuItems =
        data?.data?.cards?.find((card) => card?.groupedCard)?.groupedCard?.cardGroupMap?.REGULAR?.cards || [];
      const filterData = menuItems.filter((items) => "title" in items?.card?.card)

      setMenuData(filterData);
    } catch (e) {
      console.error("Error fetching data:", e.message);
    }
  }

  useEffect(() => {
    fetchData();
  }, [id]); // Run effect when id changes

  if (menuData.length === 0) return <h1>Data not received</h1>;

  console.log("menu data" , menuData)

  return (
    <div>
      <div className="w-[90%] mx-auto mt-20">
        {
          menuData.map((menu) =>{
            return (
              <>
              <MenuCard key={menu?.card?.card?.title} menuInfo={menu?.card?.card}/>
              </>
            )
          })
        }
      </div>
    </div>
  );
};

export default RestMenu;
