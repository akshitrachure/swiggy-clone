import React from "react";
import Profile from "./Profile";
import ProfileClass from "./ProfileClass";
import userContext from "../utils/userContext";
// const About = () => {
//     return(
//         <div>
//             <h1>This is About US Page.</h1>
//             <h2>H2 header</h2>
//             <Profile/>
//             <ProfileClass name="Akshit" age="21"/>
//         </div>
//     )
// }


class About extends React.Component{
    constructor(props){
        super(props);
        console.log("Parent constructor");
    }
    
    componentDidMount(){
        // this.timer = setInterval(()=>{
        //     console.log("Timer Start");
        // },1000);
        console.log("Parent componentDidMount");
    }

    componentWillUnmount(){
        // clearInterval(this.timer);
        console.log("Parent componentWillUnmount");
    }

    render(){
        console.log("Parent Render");
        return(
            
            <div className="p-2 m-2 container">
             <h1 className="font-bold text-3xl p-2 text-center">Food Villa</h1>
             <div className="p-2 text-justify">
                <p>Welcome to Food Villa, your go-to online food delivery platform for a gastronomic adventure! At Food Villa, we bring the culinary delights from our esteemed restaurant right to your doorstep. With a wide range of cuisines, convenient ordering options, and prompt delivery, we ensure that your dining experience is both delightful and hassle-free.</p>
             </div>
             <div className="p-2 text-justify">
                <p>At Food Villa, we collaborate with the best local restaurants and talented chefs to offer an extensive menu that caters to all tastes and preferences. From comforting classics to exotic delicacies, our curated selection of dishes promises to tantalize your taste buds. With a few clicks, you can explore a world of flavors and satisfy your cravings, all from the comfort of your own home.</p>
             </div>
             <div className="p-2 text-justify">
                <p>Our user-friendly online food delivery platform allows you to effortlessly browse through the menu, customize your order, and track its progress in real-time. With our secure payment options, you can enjoy a seamless and secure transaction process. Whether you're ordering for yourself or hosting a gathering, we offer options to accommodate both individual and group orders.</p>
             </div>
             <div className="p-2 text-justify">
                <p>At Food Villa, we prioritize the quality and freshness of our food. Our partner restaurants follow strict hygiene and food safety protocols, ensuring that every dish is prepared with the utmost care and attention to detail. We believe that great food should be accessible to all, and our competitive pricing reflects our commitment to providing exceptional value without compromising on taste or quality.</p>
             </div>
             <div className="p-2 text-justify">
                <p>Our dedicated delivery team works tirelessly to ensure that your order arrives promptly and in perfect condition. We understand the importance of timely delivery, and our goal is to bring the culinary delights from Food Villa to your doorstep, allowing you to savor your favorite dishes at your convenience.</p>
             </div>
             <div className="p-2 text-justify">
                <p>Join us at Food Villa, where we combine convenience, quality, and flavor to redefine the online food delivery experience. Let us take you on a gastronomic journey, one delicious meal at a time.</p>
             </div>
             
             
             
             {/* <h2 className="font-bold text-2xl p-2">H2 header</h2> */}
             {/* <Profile/> */}
             {/* <ProfileClass name="Akshit" age="21"/> */}
             {/* <userContext.Consumer>
                {({userDetails})=> <p>{userDetails.name} - {userDetails.email}</p>}
             </userContext.Consumer> */}
            </div>
        )
    }
}


export default About;