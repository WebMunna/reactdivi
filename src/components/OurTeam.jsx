import CountUp from 'react-countup'
import imgBall from '../img/ball.png'
import imgMan from '../img/man.png'
import { useEffect } from 'react'
import { FaCheckCircle } from 'react-icons/fa'

import AOS from 'aos'
import 'aos/dist/aos.css'


const OurTeam = () => {


    
    useEffect(() => {
        AOS.init({
          offset: 100,
          duration: 1000,
          easing: 'ease'
        });
      })
  

    let ourTTTeam = "bg-blue  w-full relative border-b-4 border-green-500 z-100 relative  bg-[url('./img/crfield.jpg')] lg:bg-cover md:bg-contain sm:bg-contain sm2:bg-cover  bg-no-repeat bg-bottom "
   
    let ourTeam = " mx-auto w-[80%] "
    let counterAnimation = '  pt-[20px] mx-auto flex  justify-between'
    let counterText = 'lg:text-[100px] md:text-[70px] sm:text-[40px] sm2:text-[30px]'
    let counterBox = 'flex flex-col items-center justify-center  rounded-full border-4 sm:border-2 sm2:border-2 sm:p-[5px]  sm2:m-[1px]  border-green-500 sm:w-[160px] sm2:w-[160px] md:w-[200px] lg:w-[300px] sm:h-[160px] sm2:h-[100px] md:h-[200px] lg:h-[300px] bg-green-200 sm:text-[50px] sm2:text-[15px] md:text-[70px] lg:text-[100px] font-sans2'
    let teamBox = ' mx-auto pt-[100px] md:flex md:flex-row lg:flex lg:flex-row sm:flex-col justify-between'
    let teamBBox= ' '
    let teamC = 'font-sans pb-[0px] inline sm:text-[20px] md:text-[25px] lg:text-[30px] font-bold'
    let ballMan = ' sm2:w-[200px] mx-auto lg:w-[400px]'
    let ball = 'sm2:mx-auto sm:mx-auto lg:relative md:relative sm:relative z-10 lg:left-[-100px]  md:left-[-50px]    sm:left-[10px]   sm:w-[150px] sm2:w-[120px] md:w-[200px] lg:w-[300px]'
    let man = 'sm2:mx-auto box-border  sm:mx-auto sm:w-[150px] sm2:w-[150px] md:w-[200px] lg:w-[500px]'
    let oneTeam = ' sm:min-w-[300px] md:min-w-[500px] lg:min-w-[550px] box-border md:flex md:flex-col lg:flex lg:flex-col'
    let teamText = ' text-center text-green-700'
    let teamTitle = 'font-sans2 sm:text-[35px] sm2:text-[35px] md:text-[40px] lg:text-[50px] '
    let teamTalk = 'lg:w-[400px] sm2:w-90%]  mx-auto font-bold'
    let teamCareer = 'sm2:w-[90%] mt-[30px] sm2:w-[360px] sm:w-[360px] md:w-[450px] lg:w-[450px] mx-auto sm:grid sm:grid-cols-2 md:grid md:grid-cols-2  lg:grid lg:grid-cols-2  sm:gap-x-6 sm:gap-y-4 md:gap-x-10 md:gap-y-7 lg:gap-x-12 lg:gap-y-7   text-center text-green-800'
    let careerBox = ' p-[10px] rounded-md sm:w-[150px] md:w-[200px] lg:w-[200px] flex flex-col items-center text-center '
    let careerTitle = 'pb-[5px] sm:font-semibold sm:text-[15px] sm2:font-semibold sm2:text-[15px] pt-[15px] md:font-bold md:text-[20px] pt-[20px] lg:font-bold lg:text-[20px] lg:pt-[20px]'
    let careerTalk = 'font-semibold text-[15px]'
    let careerCircle = 'sm:text-green-400 sm:font-1.4em md:text-green-400 lg:text-green-400 '


 
  let okUndo = ''




  return (
      <div id='ourteams' className={ourTTTeam}>
     
    <div className={ourTeam}>
      
        <div className={counterAnimation}>
            <div data-aos='zoom-in' className={counterBox}>
              <CountUp className={counterText} end={11} duration={5}/>
              
              <div className={teamC}>team</div>
              
            </div>
             
            <div data-aos='zoom-in' className={counterBox}>
              <CountUp className={counterText}  end={215} duration={5}/>
              <div className={teamC}>Players</div>
            </div>
             
            <div data-aos='zoom-in' className={counterBox}>
              <CountUp className={counterText}  end={11} duration={5}/>
              <div className={teamC}>Prizes Won</div>
            </div>
             
        </div>
        
        <div className={teamBBox}>
         <div className={teamBox}>

             <div className={ballMan}>
                  <div data-aos='zoom-in' className={ball}><img src={imgBall} alt='ball' /></div>
                  <div data-aos='zoom-in' className={man}><img src={imgMan} alt='man'/></div>
             </div>

             <div className={oneTeam}>
                   <div className={teamText}>
                       
                       <div className={teamTitle}>
                           ONE TEAM
                       </div>
                       <div className={teamTalk}>
                           Be part of an amazing baseball team. 
                           <br/>
                           We all come together to practice
                            our favorite sport and get the best out of ourselves
                       </div>
                   </div>

                   <div className={teamCareer}>
                        <div data-aos='zoom-in' className={careerBox}>
                            <FaCheckCircle className={careerCircle} size='80px' />
                            <h1 className={careerTitle}>Career-Oriented</h1>
                            <h4 className={careerTalk}>Become a professional baseball player by 
                             becoming our team member.</h4>
                        </div>
                        <div data-aos='zoom-in' className={careerBox}>
                            <FaCheckCircle className={careerCircle} size='80px'/>
                            <h1 className={careerTitle}>Career-Oriented</h1>
                            <h4 className={careerTalk}>Become a professional baseball player by 
                             becoming our team member.</h4>
                        </div>
                        <div data-aos='zoom-in' className={careerBox}>
                            <FaCheckCircle className={careerCircle} size='80px'/>
                            <h1 className={careerTitle}>Career-Oriented</h1>
                            <h4 className={careerTalk}>Become a professional baseball player by 
                             becoming our team member.</h4>
                        </div>
                        <div data-aos='zoom-in' className={careerBox}>
                            <FaCheckCircle className={careerCircle} size='80px'/>
                            <h1 className={careerTitle}>Career-Oriented</h1>
                            <h4 className={careerTalk}>Become a professional baseball player by 
                             becoming our team member.</h4>
                        </div>
                   </div>
             </div>

         </div>
         </div>

    </div>
    

    </div>
  )
}

export default OurTeam