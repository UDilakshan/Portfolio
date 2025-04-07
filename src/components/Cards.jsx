import React from 'react'
import Github from '../assets/Github.png'
import { buttonClick } from './animations'
import {motion} from "framer-motion"

const Cards = ({ item }) => {
    return (
        <div className='border border-red-500 rounded-lg w-[350px] h-[300px] lg:w-[350px] lg:h-[300px] bg-red-50 overflow-hidden flex flex-col'>
    
        {/* IMAGE */}
        <div className="w-full h-[150px] lg:h-[180px] overflow-hidden">
            <img 
                src={item.image} 
                alt="project" 
                className='w-full h-full object-cover rounded-t-lg' 
            />
        </div>
    
        {/* CONTENT */}
        <div className='p-4 flex-1 flex flex-col justify-between'>
            <div>
                <h1 className='font-semibold text-xl mb-2'>{item.title}</h1>
                <p className='text-sm line-clamp-3'>{item.desc}</p>
            </div>
    
            <div className='flex gap-3 mt-4'>
                <motion.button 
                    {...buttonClick} 
                    className='bg-black text-white px-3 py-2 rounded-md'
                >
                    <a 
                        href={item.github} 
                        target='_blank' 
                        rel="noopener noreferrer"
                        className='flex items-center gap-1'
                    >
                        <img src={Github} alt="github" className='w-6' />
                        Github Link
                    </a>
                </motion.button>
            </div>
        </div>
    </div>
    
    
    )
}

export default Cards