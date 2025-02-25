import { useState, useEffect } from "react";
import axios from "axios";

function fetchFoods(id) {
  const [MenuData, setMenuData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const proxyServer = "https://cors-anywhere.herokuapp.com/";
        const swiggyApi = `https://www.swiggy.com/mapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=17.5641438&lng=78.4376862&restaurantId=${id}&submitAction=ENTER`;

        const response = await axios.get(proxyServer + swiggyApi);

        setMenuData(
          response?.data?.data?.cards[0]?.card?.card?.imageGridCards?.info || []
        );
      } catch (e) {
        console.log("Error:", e?.message);
      }
    };

    if (id) fetchData(); // Only fetch if `id` is provided

  }, [id]); // Fetch data whenever `id` changes

  return { MenuData };
}

export default fetchFoods;
