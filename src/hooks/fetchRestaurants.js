import { useState, useEffect } from "react";
import axios from "axios";

function fetchRestaurants() {
  const [RestData, setRestData] = useState([]);

  async function fetchData() {
    try {
      const proxyServer = "https://cors-anywhere.herokuapp.com/";
      const swiggyApi =
        "https://www.swiggy.com/mapi/restaurants/list/v5?offset=0&is-seo-homepage-enabled=true&lat=17.5641438&lng=78.4376862&carousel=true&third_party_vendor=1";

      const response = await axios.get(proxyServer + swiggyApi);
      
      setRestData(
        response?.data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants || []
      );
    } catch (e) {
      console.log("Error:", e?.message);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  return { RestData };
}

export default fetchRestaurants;
