import { Link } from "react-router-dom";
import logo from '../../assets/images/rohitLogoT.png' 

const NavbarSegment = ({open,t,link,closeHandler})=>{

  

    return(
    <div className={`w-full sm:w-1/5 sm:h-screen h-[200px] ${link?`bg-[#080410]`:`bg-white`} sm:border-b-8 border-[#702ae9] px-5 shadow-2xl
    ${open && `animate-slidedown`}
    ${!open && `animate-slideup`} flex justify-center items-center`}
    style={{animationDelay:`${t}ms`}}>
            {link && <Link to={link} 
    className="text-bold font-serif text-[#762bf8] text-center sm:text-4xl  text-md hover:mb-2 active:scale-90 hover:text-white
    hover:border-b-2 hover:border-[#762bf8] hover:scale-110" 
            onClick={closeHandler}>{link}</Link>}
     <div className="sm:w-[300px] sm:h-[300px] w-[150px] h-[150px] rounded-full">
        {!link && <Link to='/Admin' onClick={closeHandler}><img src={logo} className='rounded-full w-full h-full hover:scale-125'/></Link>}
     </div>
    </div>
    )
}


export default NavbarSegment;