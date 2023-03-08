import { Outlet } from "react-router-dom"
import NavBar from "./Navbar/NavBar"



const RootLayout = ()=>(

    <>
        <NavBar/>
        <div className="w-screen h-screen overflow-hidden overflow-y-scroll relative">
            <Outlet/>
          
        </div>
    </>
)
   
        
        
  


export default RootLayout