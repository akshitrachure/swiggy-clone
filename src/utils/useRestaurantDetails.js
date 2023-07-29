import { useState, useEffect } from "react";
import { FETCH_RESTAURANT_DETAILS_URL } from "../config";

const useRestaurantDetails=()=>{
    
    const [restaurant, setRestaurant] = useState([]);

    useEffect(()=>{
        getRestaurantDetails();
    },[]);


    async function getRestaurantDetails(){
        //console.log("Fetchingg details");
        const data = await fetch(FETCH_RESTAURANT_DETAILS_URL);
      //  console.log("Fetched details");
        const json =  await data.json();
       // console.log(json);
        setRestaurant(json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
       // console.log(json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    }
    return restaurant;
}


export default useRestaurantDetails;