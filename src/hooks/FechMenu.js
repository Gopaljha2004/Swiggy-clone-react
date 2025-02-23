import { useState , useEffect } from "react";

function fetchFoods(){

     const [MenuData , setMenuData] = useState([]);
      
           async function fetchData(){
            try{
              const proxyServer = "https://cors-anywhere.herokuapp.com/"
              const swiggyApi =  "https://www.swiggy.com/mapi/restaurants/list/v5?offset=0&is-seo-homepage-enabled=true&lat=17.5641438&lng=78.4376862&carousel=true&third_party_vendor=1";
              const response = await fetch(`https://proxy.moesif.com/https://www.swiggy.com/mapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=17.5641438&lng=78.4376862&restaurantId=${id}&submitAction=ENTER`);
              const data = await response.json();
              setMenuData(data?.data?.cards[0]?.card?.card?.imageGridCards?.info);
            }catch(e){
              console.log("error" , e?.messssage)
            }
           }
      

     useEffect(() =>{
       fetchData();
     }, [])

    return {MenuData}

    }

export default fetchFoods;