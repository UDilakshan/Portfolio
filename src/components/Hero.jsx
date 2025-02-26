import React from 'react'
import hero from "../assets/HeroOg.png"
import facebook from "../assets/facebook.png"
import twitter from "../assets/twitter.png"
import instagram from "../assets/instagram.png"
import linkedin from "../assets/linkedin.png"
import reactLogo from "../assets/React.png"
import tailwind from "../assets/Tailwind Css.png"
import reduxLogo from "../assets/Redux.png"


const Hero = () => {
  return (
    <section className=''>
          <div className='max-w-7xl mx-auto '>
              <div className="flex flex-col md:flex-row items-center lg:h-[90vh] justify-between ">
                <div className="md:w-1/2 mb-8 md:mb-0 flex flex-col space-y-4 px-6 lg:px-0 lg:mt-0 mt-10">
                <h1 className='lg:text-7xl text-4xl font-bold lg:leading-snug'>Hi There,
                  <br />I'm Dilakshan </h1>
                  <p className='md:text-2xl text-xl mb-4'>Full stack Developer & Designer</p>
                  <p className='mb-4'>I'm a passionate full stack developer with expertise in React, Next.js and modern web technologies.I love creating beautiful and functional web applications that solve real world problems.</p>
                  <button className='bg-black text-white px-3 py-2 w-max rounded-md'>Download CV</button>
                </div>
                <div className='md:w-1/2 flex justify-center items-end'>
                <img src={hero} alt="" className='lg:h-[90vh] h-96' />
                {/* <img src={reactLogo} alt="" /> */}
                </div>
              </div>
    
          </div>
    </section>
   
  )
}

export default Hero