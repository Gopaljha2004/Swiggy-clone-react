import React from 'react';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router';

function SearchFood() {
  const [input, setInput] = useState("");
  const [menuData, setMenuData] = useState([]);
  const { id } = useParams();

  // Fetch data from Swiggy API
  async function fetchData() {
    try {
      const proxyServer = "https://cors-anywhere.herokuapp.com/";
      const swiggyApi = `https://www.swiggy.com/mapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.7040592&lng=77.10249019999999&restaurantId=${id}`;

      const response = await fetch(proxyServer + swiggyApi);
      const data = await response.json();
      const fooItems = data?.data?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards || [];
      const titleFiltered = fooItems.filter((item) => "title" in item?.card?.card);
      setMenuData(titleFiltered);
    } catch (e) {
      console.error("Error fetching data:", e.message);
    }
  }

  // Fetch data when the component mounts or when `id` changes
  useEffect(() => {
    fetchData();
  }, [id]);

  // Filter menu items based on the input (case-insensitive, contains the search term)
  const filteredMenu = menuData
    .flatMap((item) => 
      item?.card?.card?.itemCards?.map((cardItem) => ({
        name: cardItem?.card?.info?.name,
        description: cardItem?.card?.info?.description,
        imageId: cardItem?.card?.info?.imageId,
        price: cardItem?.card?.info?.price,
      })) || []
    )
    .filter((item) => item?.name?.toLowerCase().includes(input.toLowerCase()));

  // Function to handle adding an item to the cart
  const handleAddToCart = (item) => {
    setCart((prevCart) => [...prevCart, item]);
    alert(`${item.name} added to cart!`); // Simple feedback (you can customize this)
  };

  return (
    <div className='h-screen w-[80%] mx-auto mt-20'>
      <input
        className='w-full border px-2 py-2 rounded-xl text-2xl'
        value={input}
        onChange={(e) => setInput(e.target.value)}
        type="search"
        placeholder='Search for items like "tandoori"'
      />
      <h1 className='text-2xl font-bold mt-4'>Restaurant ID: {id}</h1>

      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-6'>
        {filteredMenu.length > 0 ? (
          filteredMenu.map((item) => (
            <div key={item.id} className="p-4 border rounded-lg shadow-md hover:shadow-lg transition-shadow">
              {item.imageId && (
                <img
                  src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fill/${item.imageId}`}
                  alt={item.name}
                  className='w-full h-48 object-cover rounded-t-lg'
                />
              )}
              <h2 className='text-xl font-semibold mt-2'>{item.name}</h2>
              <p className='text-gray-600 mt-2'>{item.description}</p>
              <p className='text-lg font-medium mt-2'>₹{item.price ? (item.price / 100).toFixed(2) : 'N/A'}</p>
              <button
                onClick={() => handleAddToCart(item)}
                className='mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors'
              >
                Add to Cart
              </button>
            </div>
          ))
        ) : (
          <p className='text-gray-500'>No items found matching your search.</p>
        )}
      </div>
    </div>
  );
}

export default SearchFood;