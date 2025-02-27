
import React from 'react'
import SpicyBites from '../assets/SpicyBites.png'
import Cards from './Cards'


const Projects = () => {

    const projectJson = [
        {
          title: 'Pizza Ordering System',
          desc: 'It is an amazing online Pizza ordering system for OPizza restaurant.',
          image: SpicyBites,
          github: "https://github.com/UDilakshan/Pizza_Shop_Project"
        },
      ];

  return (
    <section id='projects' className='relative bg-gray-700 py-10 px-4'>
      <div className='mb-16 max-w-7xl mx-auto'>
        <h2 className='text-3xl font-bold mb-8 text-white border-b border-red-500 w-max pb-4'>My Projects</h2>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center gap-10'>
            {projectJson.map((items)=> {
                return <Cards item={items}/>
            })}
        </div>
      </div>
    </section>
  )
}

export default Projects
