//import { restaurantList } from "../config";
import RestaurantCard from "./RestaurantCard";
import { useEffect, useState, useContext } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import { filterData } from "../utils/helper";
import useRestaurantDetails from "../utils/useRestaurantDetails";
// import { FETCH_RESTAURANT_DETAILS_URL } from "../config";
import useOnline from "../utils/useOnline";
import userContext from "../utils/userContext";

const Body = () => {
  const [searchText, setSearchText] = useState("");
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);

  const { userDetails, setUserData } = useContext(userContext);

  const restaurantsDetails = useRestaurantDetails();
  console.log("Rest details");
  console.log(restaurantsDetails);

  console.log("All rests");
  console.log(allRestaurants);

  useEffect(() => {
    console.log("Inside use effect");
    console.log(restaurantsDetails);
    setAllRestaurants(restaurantsDetails);
    setFilteredRestaurants(restaurantsDetails);
  }, [restaurantsDetails]);

  const isOnline = useOnline();

  if (!isOnline)
    return <h1>🔴 Offline, please check your internet connection!!</h1>;

  if (!allRestaurants) return null;

  if (allRestaurants[0] === "Disclaimer") {
    return (
      <div className="mx-auto my-10 py-5 border ">
        <h2 className="text-xl font-bold">{restaurantsDetails[0]}</h2>
        <p className="py-4">{restaurantsDetails[1]}</p>
        <p>
          Please click on the below links to download the extension based on
          your browser
        </p>
        <ul>
          <li>
            Chrome&nbsp;:&nbsp;&nbsp;&nbsp;
            <a
              className="text-blue-600"
              href="https://chromewebstore.google.com/detail/allow-cors-access-control/lhobafahddgcelffkeicbaginigeejlf"
            >
              Download link
            </a>
          </li>
          <li>
            Edge&nbsp;:&nbsp;&nbsp;&nbsp;
            <a
              className="text-blue-600"
              href="https://microsoftedge.microsoft.com/addons/detail/allow-cors-accesscontro/bhjepjpgngghppolkjdhckmnfphffdag"
            >
              Download link
            </a>
          </li>
        </ul>
      </div>
    );
  }

  return allRestaurants?.length === 0 ? (
    <Shimmer />
  ) : (
    <>
      <div className="my-5 p-5">
        <input
          data-testid="search-input"
          type="text"
          className="focus:bg-green-200 p-2 m-2"
          placeholder="Search"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
            {
              console.log(e.target.value);
            }
          }}
        ></input>
        <button
          data-testid="search-btn"
          className="w-20 h-8 px-2 m-4 bg-purple-600 hover:bg-gray-500 text-white rounded-md"
          onClick={() => {
            const filteredData = filterData(searchText, allRestaurants);
            setFilteredRestaurants(filteredData);
          }}
        >
          Search
        </button>

        {/* <input placeholder="userData" className="focus:bg-green-200 p-2 m-2" value={userDetails.name} onChange={(e)=>setUserData({
                    ...userDetails,
                    name:e.target.value,                    
                    })}></input> */}
      </div>

      <div
        className="flex flex-wrap sm:text-center justify-center"
        data-testid="res-list"
      >
        {filteredRestaurants.length === 0 ? (
          <h1>No restaurants match your search</h1>
        ) : (
          filteredRestaurants.map((restaurant) => {
            return (
              <Link
                to={"/restaurant/" + restaurant?.info?.id}
                key={restaurant?.info?.id}
              >
                <RestaurantCard {...restaurant?.info} />
                {/* {console.log(restaurant)} */}
              </Link>
            );
          })
        )}
      </div>
    </>
  );
};

export default Body;
