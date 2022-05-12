import { FaMapMarkerAlt, FaEnvelope, FaMobileAlt } from 'react-icons/fa'
import { useEffect } from 'react'

import AOS from 'aos'
import 'aos/dist/aos.css'

const Footer = () => {

  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 1000,
      easing: 'ease'
    });
  })

    let mainBBox = 'bg-green-700 border-b-4 border-green-500'
    let mainBox = 'w-[80%] text-white py-[50px] mx-auto lg:flex lg:justify-between md:grid md:grid-cols-2  sm:grid sm:grid-cols-2'
    let address = ' mx-auto'
    let addTitle = 'font-bold'
    let addTalk = 'font-semibold'
    let emailPhone = 'w-[200px] '
    let email = 'mx-auto'
    let phone = 'mx-auto'
    let footTalk = ' lg:w-[300px] md:w-[400px] sm:w-[400px] md:ml-[150px] sm:ml-[70px] sm:mt-[50px]  font-semibold'

  return (
    <div id='info' className={mainBBox}>
        <div data-aos='zoom-in' className={mainBox}>
        <div className={address}>
           <FaMapMarkerAlt size='40px'/>
           <h1 className={addTitle}>ADDRESS</h1>
           <h1 className={addTalk}>Kishorgonj, Dhaka</h1>
        </div>

        <div data-aos='zoom-in' className={emailPhone}>
            <div className={email}>
            <FaEnvelope size='40px'/>
           <h1 className={addTitle}>EMAIL</h1>
           <h1 className={addTalk}>munnaislamapu@gmail.com</h1>
            </div>
            <div className={phone}>
            <FaMobileAlt size='40px'/>
           <h1 className={addTitle}>PHONE</h1>
           <h1 className={addTalk}>01813824928</h1>
            </div>
        </div>

        <div data-aos='zoom-in' className={footTalk}>
        Reach out to us to become a part of our baseball 
        team. We practice four 
        times a week and we’d love to have you as a 
        part of our team, whatever age you might be.
        </div>
        </div>
    </div>
  )
}

export default Footer