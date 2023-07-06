import { useState, useEffect } from "react";
import { useParams } from "react-router";
import { IMG_CDN_URL } from "../config";
import Shimmer from "./Shimmer";
import useRestaurantInfo from "../utils/useRestaurantInfo";
import { useDispatch } from "react-redux";
import { addItem, removeItem } from "../utils/cartSlice";
import {restaurantMenuList} from "../config";

const RestaurantMenu=()=>{

    const {resId} = useParams();
    //const [restaurant, setRestaurant] = useState(null);


    const restaurantApi = useRestaurantInfo(resId);
    console.log("API", restaurantApi)
    const restaurant = restaurantMenuList;
    console.log("Restaurant");
    console.log(restaurant[0].data);

    const dispatch = useDispatch();

    function addFoodItem(item){
        dispatch(addItem(item));
    }

    function removeItems(id){
        dispatch(removeItem(id));
    }

    return !restaurant ? (<Shimmer/>) : (
        <div className="flex flex-wrap m-4">

        <div className="p-3">
            {/* <h1>Restaurant ID:{restaurant.id}</h1> */}
            <h1 className="font-bold text-3xl py-3 text-center">{restaurantApi?.cards[0]?.card?.card?.info?.name}</h1>
             <img className="w-96 py-2" src={IMG_CDN_URL+restaurantApi?.cards[0]?.card?.card?.info?.cloudinaryImageId} />
            <h3 className="px-4 font-semibold text-lg">Area: {restaurantApi?.cards[0]?.card?.card?.info?.areaName}</h3>
            <h3 className="px-4 font-semibold text-lg">City: {restaurantApi?.cards[0]?.card?.card?.info?.city}</h3>
            <h3 className="px-4 font-semibold text-lg">Rating: {restaurantApi?.cards[0]?.card?.card?.info?.avgRating} stars</h3>
            <h3 className="px-4 font-semibold text-lg">{restaurantApi?.cards[0]?.card?.card?.info?.costForTwo/100+"/- for two"}</h3>
        </div>
        <div className="px-10 py-3">
            <h1 className="font-bold text-3xl py-3" data-testid="menu">Menu</h1>
            <ul>
                {Object.values(restaurant[0]?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards).map((item)=>(<li className="py-1" key={item?.card?.info?.id}>{item?.card?.info?.name} - <button data-testid="add-btn" onClick={()=>addFoodItem(item?.card?.info)} className="rounded-md p-1 bg-green-200">Add</button> - <button className="p-1 rounded-md bg-red-200" onClick={()=>removeItems(item?.card?.info?.id)}>Remove</button></li>))}

                {/* {Object.values(restaurantApi?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards).map((item)=>(<li className="py-1" key={item?.card?.info?.id}>{item?.card?.info?.name} - <button data-testid="add-btn" onClick={()=>addFoodItem(item?.card?.info)} className="rounded-md p-1 bg-green-200">Add</button> - <button className="p-1 rounded-md bg-red-200" onClick={()=>removeItems(item?.card?.info?.id)}>Remove</button></li>))} */}
            </ul>
        </div>
         
        </div>
    )

}

export default RestaurantMenu;