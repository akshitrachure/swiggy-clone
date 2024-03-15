import { useState, useEffect } from "react";
import { FETCH_RESTAURANT_DETAILS_URL } from "../config";
import { restaurantList } from "../config";
const useRestaurantDetails = () => {
  const [restaurant, setRestaurant] = useState([]);

  useEffect(() => {
    getRestaurantDetails();
  }, []);

  async function getRestaurantDetails() {
    try {
      const data = await fetch(FETCH_RESTAURANT_DETAILS_URL);
      const json = await data.json();
      setRestaurant(
        json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants
      );
    } catch (error) {
      // if (error.message)
      console.log(error);
      setRestaurant([
        "Disclaimer",
        "Please download the CORS extension for your browser to get the list of restaurants as I am using the live swiggy API for which I cannot allow CORS at the server end."
      ]);
    }
  }
  return restaurant;
};

export default useRestaurantDetails;
