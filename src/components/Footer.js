import { useContext } from "react";
import userContext from "../utils/userContext";

const Footer = () =>{

    const { userDetails } = useContext(userContext);

    return(
        <>
        <div className="relative bottom-0 ml-2 h-10 flex bg-orange-200">
            {/* <h1 className="font-bold text-3xl">Footer</h1> */}
            <p className="p-2 m-1 text-center">Copyright @Akshit 2023</p>
        </div>

        </>
        
    )
}

export default Footer;