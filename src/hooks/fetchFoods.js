import { useState, useEffect } from "react";
import axios from "axios";

function fetchFoods() {
  const [FoodData, setFoodData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const proxyServer = "https://cors-anywhere.herokuapp.com/";
        const swiggyApi =
          "https://www.swiggy.com/mapi/restaurants/list/v5?offset=0&is-seo-homepage-enabled=true&lat=17.5641438&lng=78.4376862&carousel=true&third_party_vendor=1";

        const response = await axios.get(proxyServer + swiggyApi);
        
        setFoodData(
          response?.data?.data?.cards[0]?.card?.card?.imageGridCards?.info || []
        );
      } catch (e) {
        console.log("Error:", e?.message);
      }
    };

    fetchData();
  }, []);

  return { FoodData };
}

export default fetchFoods;
