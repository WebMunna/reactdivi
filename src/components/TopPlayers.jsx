import { FaFacebook, FaTwitter, FaGooglePlus, FaInstagram } from 'react-icons/fa'
import pic1 from '../img/pic-1.png'
import pic2 from '../img/pic-2.png'
import pic3 from '../img/pic-3.png'
import { useEffect } from 'react'

import AOS from 'aos'
import 'aos/dist/aos.css'

const TopPlayers = () => {

    useEffect(() => {
        AOS.init({
          offset: 100,
          duration: 1000,
          easing: 'ease'
        });
      })

    let mainBBox = "pt-[30px] bg-[url('./img/field.jpg')] border-b-4 border-green-500 lg:bg-contain md:bg-cover sm:bg-cover sm2:bg-cover lg:h-[750px] md:h-[1130px] sm:h-[1150px]"
    let mainBox = 'w-[80%] mx-auto '
    let pTitle = 'text-green-700 font-sans2 text-center sm:text-[35px] sm2:text-[35px] md:text-[40px] lg:text-[50px] py-[50px]'
    let playerBoxes = 'lg:flex md:grid md:grid-cols-2 sm:grid sm:grid-cols-2 justify-between'
    let playerBox = 'md:mx-auto mt-[30px] text-center flex-col lg:w-[250px] md:w-[230px] sm:w-[150px] mx-auto items-center justify-center'
    let playerPic = 'flex w-[300px] border-4 border-green-500 items-center mx-auto rounded-full'
    let pName = 'font-sans2 text-[30px] text-green-700'
    let pTalk = 'font-bold text-green-700'
    let playerLinks = 'text-green-900 mt-[10px] flex items-center justify-between lg:w-[200px] lg:w-[150px] sm:w-[120px] mx-auto'
  return (
      <div id='topplayers' className={mainBBox}>
    <div className={mainBox}>
        <div className={pTitle}>
            TOP PLAYERS OF THE MONTH
        </div>

        <div className={playerBoxes}>
            <div data-aos='fade-right' className={playerBox}>
                 <img className={playerPic} src={pic1} alt='pic1'/>
                 <div className={pName}>
                     YVES
                 </div>
                 <div className={pTalk}>
                 Pitcher
                 We’re very proud to have Yves in one of 
                 our teams. He’s amazing because he does 
                 this, that and definitely that other thing
                  he’s oh-so-good at.
                 </div>
                 <div className={playerLinks}>
                     <FaFacebook/> <FaTwitter/> <FaGooglePlus/> <FaInstagram/>
                 </div>
            </div>
            <div data-aos='zoom-in' className={playerBox}>
                 <img className={playerPic} src={pic2} alt='pic1'/>
                 <div className={pName}>
                     Laura
                 </div>
                 <div className={pTalk}>
                 Catcher
                 We’re very proud to have Laura in one of our teams.
                 She’s amazing because she does this, 
                 that and definitely that other 
                 thing she’s oh-so-good at.
                 </div>
                 <div className={playerLinks}>
                     <FaFacebook/> <FaTwitter/> <FaGooglePlus/> <FaInstagram/>
                 </div>
            </div>
            <div data-aos='fade-left' className={playerBox}>
                 <img className={playerPic} src={pic3} alt='pic1'/>
                 <div className={pName}>
                     DAVE
                 </div>
                 <div className={pTalk}>
                 Pitcher
                 We’re very proud to have Dave in one of our teams. 
                 He’s amazing because he does this, that and
                 definitely that other 
                 thing he’s oh-so-good at.
                 </div>
                 <div className={playerLinks}>
                     <FaFacebook/> <FaTwitter/> <FaGooglePlus/> <FaInstagram/>
                 </div>
            </div>
        </div>
        </div>

    </div>
  )
}

export default TopPlayers