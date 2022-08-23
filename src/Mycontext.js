import React,{useState,createContext} from 'react'
export const UserContext=createContext();
const Mycontext = (props) => {
    const [product,setproduct]=useState([]);
    const [loggedin,setloggedin]=useState(false);
    const userDetail={"email":"abc@gmail.com","name":"Shivam","password":12345};
  return (
   <>
   <UserContext.Provider value={{product,setproduct,userDetail,loggedin,setloggedin}}>
    {props.children}
   </UserContext.Provider>
   </>
  )
}
export default Mycontext;