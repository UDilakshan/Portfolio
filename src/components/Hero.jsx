import React from 'react'
import { motion } from "framer-motion";
import hero from "../assets/HeroOg.png"
import facebook from "../assets/facebook.png"
import twitter from "../assets/twitter.png"
import instagram from "../assets/instagram.png"
import linkedin from "../assets/linkedin.png"
import reactLogo from "../assets/React.png"
import tailwind from "../assets/Tailwind Css.png"
import reduxLogo from "../assets/Redux.png"
import { buttonClick, Pop_In, fadeInOut, slideIn, slideTop, SlideIn200, SlideInBottom200, SlideInNeg200, SlideInTop200 } from './animations';


const Hero = () => {
  return (
        <section className='relative'>
        <div className='max-w-7xl mx-auto'>
          <div className='flex flex-col md:flex-row items-center lg:h-[90vh] justify-between' >
            <div className='md:w-1/2 mb-8 md:mb-0 flex flex-col space-y-4 px-6 lg:px-0 lg:mt-0 mt-10'>
               <motion.h1 {...SlideInTop200} className='lg:text-7xl text-2xl font-bold lg:leading-snug'>Hi There, <br />I'm <span className='text-red-500'>Dilakshan</span></motion.h1>
               <p className='md:text-2xl font-semibold text-xl mb-4'>Full stack Developer & Designer</p>
               <p className='mb-4'>I'm a passionate full stack developer with expertise in React, Next.js and modern web technologies.I love creating beautiful and functional web applications that solve real world problems.</p>
               <motion.button {...buttonClick} {...SlideInNeg200} className='bg-black text-white px-3 py-2 w-max rounded-md'>
                  <a href="/CV.pdf" download="Dilakshan_CV.pdf">Download CV</a>
                </motion.button>
                </div>
            <div className='md:w-1/2 relative flex justify-center items-end'>
            <motion.img {...fadeInOut}  src={hero} alt=""  className="lg:h-[90vh] h-96 brightness-110 grayscale-50 rounded-bl-xl transition ease-in-out" whileHover={{ scale: [1, 1.05, 1] }}   transition={{ duration: 1, ease: "easeInOut" }} />
                 <motion.img  {...SlideInNeg200} src={reactLogo} alt="" className='absolute w-10 top-36 left-0 rounded-full md:hidden'/>
                 <motion.img {...SlideInTop200} src={reduxLogo} alt="" className='absolute w-10 top-0 right-5 md:hidden'/>
                 <motion.img src={tailwind} {...slideIn} alt="" className='absolute w-10 rounded-full right-0 bottom-36 md:hidden'/>
            </div>
        </div>
      </div>
      <motion.div {...SlideInTop200} className='absolute top-74 right-10 hidden bg-gray-200 p-4 py-4 md:flex flex-col gap-6 rounded-full'> 
      <motion.img {...buttonClick} src={facebook} onClick={() => window.open('https://web.facebook.com/dilakshan.udhayakumar.9', '_blank')}
        alt="Facebook"  className='w-12 cursor-pointer'/>

        <motion.img {...buttonClick} src={instagram} onClick={() => window.open('https://www.instagram.com/udilakshan/', '_blank')}
        alt="Instagram"  className='w-12 cursor-pointer'/>

        <motion.img {...buttonClick} src={twitter} onClick={() => window.open('https://x.com/udilakshan1', '_blank')}
        alt="Twitter"  className='w-12 cursor-pointer'/>

        <motion.img {...buttonClick} src={linkedin} onClick={() => window.open('https://www.linkedin.com/in/udilakshan/', '_blank')}
        alt="Linkedin"  className='w-12 cursor-pointer'/>
      </motion.div>
    </section>

   
  )
}

export default Hero