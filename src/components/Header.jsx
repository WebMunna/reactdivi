import { useState, useEffect } from 'react'
import { FaReact, FaBars } from 'react-icons/fa'
import { Link } from "react-scroll"

import AOS from 'aos'
import 'aos/dist/aos.css'

const Header = () => {

  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 500,
      easing: 'ease'
    });
   
  })

  const [ dropsMenu, setDropsMenu ] = useState(false)


  console.log(dropsMenu)

  let mainBBox = " absolute sticky top-0 w-full border-b-4 border-green-500 z-40 bg-white text-slate-600  h-20" 
  let menuBox = "lg:container md:container sm:w-[80%] sm2:w-[80%]  mx-auto flex justify-between h-20"
  let menus = "lg:flex md:flex sm:hidden sm2:hidden  gap-4 font-semibold items-center"
  let dropMenu = 'lg:hidden md:hidden flex items-center justify-center'
  let dmenusAdd = 'transition ease-in-out delay-150 w-[80%] h-[200px] flex flex-col justify-between py-[10px] rounded-b-sm mx-auto text-center relative top-[0px] text-slate-600 bg-white font-semibold'
  let dmenusDel = 'hidden w-[80%] h-[200px] flex flex-col justify-between py-[10px] rounded-b-sm mx-auto text-center relative top-[0px] text-slate-600 bg-white font-semibold'
  return (
    <div className={mainBBox}>

      <div className={menuBox}> 
      <a href="/" className="self-center  text-md font-bold ">
        <FaReact className='inline' size='30px'/> Divi</a>

      <div className={dropMenu} onClick={() => setDropsMenu(!dropsMenu)}>
         <FaBars/> </div>
         
        <ul className={menus}>
            <li><Link to ='home' smooth={true} duration={1000} >Home</Link></li>
            <li><Link to ='ourteams' smooth={true} duration={1000} className="">Ourteams</Link></li>
            <li><Link to ='topplayers' smooth={true} duration={1000} className="">Topplayers</Link></li>
            <li><Link to ='contact' smooth={true} duration={1000} className="" >Contact</Link></li>
            <li><Link to ='info' smooth={true} duration={1000} className="">Info</Link></li>

    
        </ul>
      </div>

      

      { dropsMenu &&
      <ul data-aos='fade-down'  className={dmenusAdd}>
            <li><Link to ='home' smooth={true} duration={1000} >Home</Link></li>
            <li><Link to ='ourteams' smooth={true} duration={1000} className="">Ourteams</Link></li>
            <li><Link to ='topplayers' smooth={true} duration={1000} className="">Topplayers</Link></li>
            <li><Link to ='contact' smooth={true} duration={1000} className="" >Contact</Link></li>
            <li><Link to ='info' smooth={true} duration={1000} className="">Info</Link></li>

    
        </ul>

      }

      

 
    </div>
  )
}

export default Header