import { FaReact } from 'react-icons/fa'
import { Link } from "react-scroll"

const header = () => {

  console.log(window.innerWidth)
  return (
    <div className="fixed w-full border-b-4 border-green-500 z-40 bg-white text-slate-600  h-20" >

      <div className="container  mx-auto flex justify-between h-20"> 
      <a href="/" className="self-center  text-md font-bold ">
        <FaReact className='inline' size='30px'/> Divi</a>
        <ul className="flex  gap-4 font-semibold items-center">
            <li><Link to ='home' smooth={true} duration={1000} >Home</Link></li>
            <li><Link to ='ourteams' smooth={true} duration={1000} className="">Ourteams</Link></li>
            <li><Link to ='topplayers' smooth={true} duration={1000} className="">Topplayers</Link></li>
            <li><Link to ='contact' smooth={true} duration={1000} className="" >Contact</Link></li>
            <li><Link to ='info' smooth={true} duration={1000} className="">Info</Link></li>

    
        </ul>
      </div>

 
    </div>
  )
}

export default header