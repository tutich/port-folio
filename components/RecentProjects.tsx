import { projects } from '@/data/data'
import React from 'react'
import { PinContainer } from './ui/3d-pin'
import { FaLocationArrow } from 'react-icons/fa'

const RecentProjects = () => {
  return (
    <div className='py-20' id='projects' >
        <h1 className="heading">
            A small selection of my {' '}
            <span className='text-purple'>recent projects</span>
        </h1>

        <div className='p-4 mt-10 flex flex-wrap gap-y-8 gap-x-24 items-center justify-center'>
            {projects.map((project, id ) => (
                <div key={id} className='flex items-center justify-center lg:min-h-[32.5rem] sm:h-[41rem] h-[32rem] w-[80vw] sm:w-[570px]'>
                    <PinContainer title={project.link} href={project.link}>
                        <div className='relative flex items-center justify-center sm:w-[570px] w-[80vw] overflow-hidden sm:h-[40vh] h-[30vh] mb-10'>
                            <div className='bg-[#13162d] relative overflow-hidden w-full h-full lg:rounded-3xl'>
                                <img src='/bg.png' alt='bg-img' />
                            </div>
                            <img src={project.img} alt={project.title}  className='z-10 absolute bottom-0'/>
                        </div>
                        <h1 className='line-clamp-1 lg:text-2xl md:text-xl font-bold text-base'>{project.title}</h1>
                        <p className='lg:text-xl lg:font-normal font-light text-xm line-clamp-2'>{project.des}</p>

                        <div className='flex items-center justify-between mt-7 mb-3'>
                            <div className='flex items-center'>
                                {project.iconLists.map((icon, index) => (
                                    <div key={icon} className='border border-white/[0.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center'
                                    style={{transform: `translateX(-${5 * index + 2}px)`}}
                                    >
                                        <img src={icon} alt={icon}  className='p-2'/>
                                    </div>
                                ))}
                            </div>
                            <div className='flex justify-center items-center'>
                                <p className='flex lg:text-xl md:text-xs sm:text-sm text-purple'>Check Live Site</p>
                                <FaLocationArrow color='#CBACF9' className='ms-3'/>
                            </div>
                        </div>
                    </PinContainer>
                </div>
            ))}
        </div>
    </div>
  )
}

export default RecentProjects