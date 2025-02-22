import { useState , useEffect } from "react";

function fetchRestaurants(){

     const [RestData , setRestData] = useState([]);
      
           async function fetchData(){
            try{
              const proxyServer = "https://cors-anywhere.herokuapp.com/"
              const swiggyApi =  "https://www.swiggy.com/mapi/restaurants/list/v5?offset=0&is-seo-homepage-enabled=true&lat=17.5641438&lng=78.4376862&carousel=true";
              const response = await fetch(proxyServer+swiggyApi);
              const data = await response.json();
              setRestData(data.data.cards[1].card.card.gridElements.infoWithStyle.restaurants);
            }catch(e){
              console.log("error" , e.messssage)
            }
           }
      

     useEffect(() =>{
       fetchData();
     }, [])

    return {RestData}

    }

export default fetchRestaurants;