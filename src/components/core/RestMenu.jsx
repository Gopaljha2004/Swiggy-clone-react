import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import MenuCard from "./MenuCard";
import { Link } from "react-router";

const RestMenu = () => {
  const { id } = useParams();
  console.log("Restaurant ID:", id);

  const [menuData, setMenuData] = useState([]);
  const [selected , setSelected] = useState(null)

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

  if (menuData.length === 0) return <h1 className="text-center mt-20 text-4xl font-semibold ">Data is Loading Please Wait...</h1>;

  console.log("menu data" , menuData)

  return (
    <div >
               <Link to={`/city/hyderabad/${id}/search`}>
               <div className="container mx-auto w-full mt-10">
            <span className="bg-gray-400 text-3xl py-6 px-6 text-white font-semibold rounded-2xl">Search For Food Items</span>
          </div>
              </Link>
           

      <div className="w-[90%] mx-auto mt-20">
        <div>

        <div className="mx-auto ml-45" >
        <button className={`border px-5 py-3 font-bold  rounded-2xl ${selected==="veg" ? "bg-green-400 text-white" : "bg-gray-500 text-white"} `} onClick={() => setSelected(selected==="veg" ? null : "veg")}>Veg</button>
        <button className={`border px-5 py-3 font-bold rounded-2xl  ${selected==="nonveg" ? "bg-red-500 text-white" : "bg-gray-500 text-white"} `} onClick={() => setSelected(selected==="nonveg" ? null : "nonveg")}>Non Veg</button>
      </div>
        </div>

        {
          menuData.map((menu) =>{
            return (
              <>
              <MenuCard key={menu?.card?.card?.title} menuInfo={menu?.card?.card} foodSelected={selected}/>
              </>
            )
          })
        }
      </div>
    </div>
  );
};

export default RestMenu;
