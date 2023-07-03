import { useState, useEffect } from "react";
import { FETCH_MENU_URL } from "../config";


const useRestaurantInfo=(resId)=>{
    const [restaurant, setRestaurant] = useState(null);
    
    useEffect(()=>{
        getRestaurantInfo();
    },[]);
    // https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9689968&lng=77.72088529999999&restaurantId=32171&submitAction=ENTER
    
    async function getRestaurantInfo(){
        const data = await fetch(FETCH_MENU_URL+resId);
        const json =  await data.json();
        setRestaurant(json.data);
    
        console.log(json);
    }
    return restaurant;
}

export default useRestaurantInfo;


