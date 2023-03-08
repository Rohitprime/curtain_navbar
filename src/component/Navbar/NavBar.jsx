
import { useState } from "react"
import {GiHamburgerMenu} from 'react-icons/gi'
import {CgClose} from 'react-icons/cg'
import NavbarSegment from "./NavbarSegment"

const NavBar = ()=>{

  const [open,setOpen] = useState(false)
  const [hidden,setHidden] = useState(true)

  const openHandler = ()=>{
    setOpen(true)
    setHidden(false)
  }

  const closeHandler = ()=>{
    setOpen(false)
    console.log('from time out first'+hidden)
    setTimeout(()=>{
      setHidden(true)
      console.log('from time out second'+hidden)
    },1000)
  }


  return(
  <>
    {open && <CgClose className=" text-[#702ae9] z-[11] absolute top-[10px] right-0 h-[60px] w-[60px] hover:mb-3" onClick={closeHandler}/>}
    {!open && <GiHamburgerMenu className=" text-[#702ae9] z-[11] absolute top-[10px] right-0 h-[60px] w-[60px] hover:mb-3" onClick={openHandler}/>}

  {!hidden && <div className={`w-screen h-screen z-[10] flex sm:flex-row flex-col justify-center items-center`}>
      <NavbarSegment open={open} t={0}  closeHandler={closeHandler}/>
      <NavbarSegment open={open} t={75} link={'Home'} closeHandler={closeHandler}/>
      <NavbarSegment open={open} t={150} link={'About'} closeHandler={closeHandler}/>
      <NavbarSegment open={open} t={225} link={'Projects'} closeHandler={closeHandler}/>
      <NavbarSegment open={open} t={300} link={'Contect'} closeHandler={closeHandler}/>
    </div>}
  </>
  )
}




export default NavBar