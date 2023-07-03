import { useState, useEffect } from "react";
import { FETCH_RESTAURANT_DETAILS_URL } from "../config";

const useRestaurantDetails=()=>{
    
    const [restaurant, setRestaurant] = useState([]);

    useEffect(()=>{
        getRestaurantDetails();
    },[]);


    async function getRestaurantDetails(){
        const data = await fetch(FETCH_RESTAURANT_DETAILS_URL);
        const json =  await data.json();
        setRestaurant(json?.data?.cards[2]?.data?.data?.cards);
    }
    return restaurant;
}


export default useRestaurantDetails;