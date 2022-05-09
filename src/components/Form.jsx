import { useEffect } from 'react'

import AOS from 'aos'
import 'aos/dist/aos.css'

const Form = () => {

    

    

    useEffect(() => {
        AOS.init({
          offset: 100,
          duration: 1000,
          easing: 'ease'
        });
      })

    let mainBBox = "pt-[30px] border-b-4 border-green-500 bg-[url('./img/field-ball.jpg')] bg-cover bg-center bg-blue-400  bg-no-repeat  h-[600px]  "
    let mainBox = '  w-[80%] mx-auto'
    let formTitle = 'text-green-700 text-center py-[50px] font-sans2 sm:text-[35px] sm2:text-[35px] md:text-[40px] lg:text-[50px]'
    let formInputs = ' flex flex-col items-center '
    let nameEmail = 'flex justify-betweem p-[5px]'
    let nameIn = ''
    let nameInput = 'text-black border-2 border-green-500  h-[40px] lg:w-[300px] md:w-[300px] sm:w-[250px] sm2:w-[150px] p-[5px]'
    let emailIn = ''
    let emailInput = 'border-2 border-green-500 h-[40px] lg:w-[300px] md:w-[300px] sm:w-[250px] p-[5px] sm2:w-[150px] ml-[5px]'
    let messageIn = ''
    let messageInput = 'border-2 border-green-500  h-[200px] lg:w-[605px] md:w-[605px] sm:w-[505px] sm2:w-[305px] p-[5px]'
    let subBtn = ' my-[5px] h-[40px] w-[100px] bg-green-800 font-bold text-white rounded-md text-[15px]'
  return (
    <div id='contact' className={mainBBox}>
        <div className={mainBox}>
            <div className={formTitle}>
                GET IN TOUCH (AND IN SAHAPE)
            </div>
            <div className={formInputs}>
                <div className={nameEmail}>
                    <div data-aos = 'fade-right' className={nameIn}>
                        <input className={nameInput} type='text' placeholder='Name'/>
                    </div>
                    <div data-aos = 'fade-left' className={emailIn}>
                        <input className={emailInput} type='email' placeholder='Email'/>
                    </div>
                </div>
                    <div data-aos = 'fade-up' className={messageIn}>
                        <input className={messageInput} type='text' placeholder='message'/>
                    </div>

                    <button className={subBtn} > Submit </button>
                
            </div>
        </div>
    </div>
  )
}

export default Form