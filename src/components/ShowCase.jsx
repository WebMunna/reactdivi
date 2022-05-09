import { FaFacebook, FaTwitter, FaInstagram} from 'react-icons/fa'

const ShowCase = () => {

  let circleClasses = "inline-block p-3  rounded-full w-13 mx-auto";
  let iconStyles = { color: "white", fontSize: "1.5em" };
  let mainBox = " border-b-4  border-green-500 box bg-slate-500 border-box sm:min-h-[370px] md:min-h-[450px]  lg:min-h-[700px] flex items-center justify-center    bg-[url('./img/showcase.png')] lg:bg-cover md:bg-cover sm:bg-cover sm2:bg-cover sm2:bg-center bg-no-repeat"
  let contentBox = ' p-[20px]  sm:min-h-[300px] sm:min-w-[50%] md:min-h-[350px] lg:min-h-[400px] w-[80%] mx-auto  flex flex-col justify-between'
  let iconBoxes = 'sm:mb-[10px] sm2:mb-[10px] sm:gap-2 sm2:gap-2 flex justify-between w-[40%]'
  let titleB = 'sm:mb-[10px] sm2:mb-[10px] font-sans2 sm2:text-[30px] sm:text-[30px] md:text-[40px] lg:text-[50px] text-white'
  let descript = 'sm:mb-[10px] sm2:mb-[10px] lg:w-[60%]  md:w-[60%] sm:w-[60%] sm2:w-[90%] font-sans font-bold sm:font-[20px] md:text-[20px] lg:font-[25px] text-white'
  let buttonL = 'bg-green-700 w-[100px] h-[40px]  flex justify-center items-center rounded-sm border-2 text-white'
  return ( 
    <div className={mainBox} >



       <div id='home' className={contentBox}>


           <div className={iconBoxes}> 

           <span style={{ background: "#3B5998" }} className={circleClasses}>
               <FaFacebook style={iconStyles} />
           </span>

           <span style={{ background: "#1DA1F2" }} className={circleClasses}>
               <FaTwitter style={iconStyles} />
           </span>

          <span style={{ background: "grey" }} className={circleClasses}>
               <FaInstagram style={iconStyles} />
          </span>

           </div>


           <div className={titleB}>DON'T HOLD BACK</div>
           <div className={descript}>
            Be part of an amazing baseball team. We all come together
            to practice our favorite sport and get the best out of ourselves.
           </div>
           <div className={buttonL}><a href='#'>Learn More</a></div>
       </div>
    </div>
  )
}

export default ShowCase