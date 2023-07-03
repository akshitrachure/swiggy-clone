import userContext from "../utils/userContext";

const Contact = () =>{
    return(
        <div className="p-2 border-black-1">
        <h1 className="text-xl pb-2 mb-2">Contact US here:</h1>
            Full Name: <input type="text" placeholder="Enter your name" className="focus:bg-green-200 p-2 m-2 border-2" value=""></input> <br/>
            Email: <input type="email" placeholder="Enter your email" className="focus:bg-green-200 p-2 m-2 border-2" value=""></input> <br/>
            Comments: 
            <br/><textarea className="focus:bg-green-200 p-2 m-2 border-2" rows="4" cols="50" placeholder="Comments"></textarea><br/><br/>
            
            {/* 
            <h2 className="p-2"></h2>
            <userContext.Consumer>
                {({userDetails})=> <p>{userDetails.name} - {userDetails.email}</p>}
             </userContext.Consumer> */}
        </div>
    )
} 


export default Contact;