import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import { restaurantList } from "./config";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import RestaurantCard from "./components/RestaurantCard";
import { createBrowserRouter, Outlet, RouterProvider, UNSAFE_RouteContext } from "react-router-dom";
//import About from "./components/About"
import Contact from "./components/ContactUs";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
import Profile from "./components/Profile";
import { useState } from "react";
import userContext from "./utils/userContext";
import { Provider } from "react-redux";
import store from "./utils/store";
import Cart from "./components/Cart";

//import Instamart from "./components/Instamart";


const Instamart = lazy(()=> import("./components/Instamart"));

const About = lazy(()=> import("./components/About"));


const root = ReactDOM.createRoot(document.getElementById("root"));

const AppLayout = () => {

  const [userData, setUserData] = useState({ //In real world we will get this userData from an API call (Loggedin user name)
      name: "Akshit Rachure",
      email: "myemail@gmail.com"
  })

    return(
        <Provider store={store}>
          <userContext.Provider value={{
            userDetails: userData,
            setUserData: setUserData
          }}>
          
              <Header/>
              <Outlet/>
              <userContext.Provider value={{
                userDetails:{
                  name:"ABCDEF",
                  email:"aaa@gmail.com"
                },
                
              }}>
              <Footer/>
              </userContext.Provider>
              
              
          </userContext.Provider>
        </Provider>
    )
}

const appRouter = createBrowserRouter([
  {
    path:'/',
    element:<AppLayout/>,
    errorElement:<Error/>,
    children:[
      {
        path:'/',
        element:<Body/>,
        errorElement:<Error/>
      },
      {
        path:'/about',
        element:<Suspense fallback={<h1>Loading...</h1>}><About/></Suspense>,
        errorElement:<Error/>,
        children:[
          {
            path:"profile",
            element:<Profile/>
          }
        ]
      },
      {
        path:'/contact',
        element:<Contact/>,
        errorElement:<Error/>
      },
      {
        path:'/restaurant/:resId',
        element:<RestaurantMenu/>,
        errorElement:<Error/>
      },
      {
        path:'/instamart',
        element:<Suspense fallback={<h1>Loading...</h1>}><Instamart/></Suspense>,
        errorElement:<Error/>
      },
      {
        path: '/cart',
        element: <Cart/>
      }
    ]
  },
  
  
]);

root.render(<RouterProvider router={appRouter}/>);