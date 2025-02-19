import React from 'react'
import Logo from '../assets/react.svg'

const Navbar = () => {
  return (
    <header className=' sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 px-4 lg:px-0'>
        <div className=' max-w-7xl max-auto flex h-14 items-center'>
            <div className='md:mr-4 flex justify-between w-full'>
                <a href="#" className='mr-6 flex items-center space-x-2 '>
                    <img src={Logo} alt="" className='w-8' />
                </a>
                <nav className='md:flex hidden items-center space-x-6 text-lg font-medium'>
                    <a href="#about" className='transition-colors hover:text-background/80 text-foreground/60'>About</a>
                    <a href="#projects" className='transition-colors hover:text-background/80 text-foreground/60'>Projects</a>
                    <a href="#testimonials" className='transition-colors hover:text-background/80 text-foreground/60'>Testimonials</a>
                    <a href="#contact" className='transition-colors hover:text-background/80 text-foreground/60'>Contact</a>
                </nav>
            </div>
        </div>
    </header>
  )
}

export default Navbar