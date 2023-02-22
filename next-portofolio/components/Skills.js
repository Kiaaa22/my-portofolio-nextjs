import React from 'react'
import Heading from './Heading'

const Skills = () => {
    return (
        <section className='container mx-auto py-10 px-4'>
        <div className='pl-8'>
        <Heading title="Skills" />
        
            <p className='text-grey-600 -mt-auto mb-10'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
            sed do eiusmod tempor incididunt ut labore et dolore magna 
            aliqua. Ut enim ad minim veniam, quis nostrud exercitation 
            ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>

        </div>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-6 pl-8'>
                <div>
                    <p>Drawing</p>
                    <div className='relative bg-gray-300 h-[4px] mt-2'>
                        <div className='bg-pink-400 absolute h-[4px] w-[75%]'>
                        </div>
                    </div>
                    
                    <p>Singing</p>
                    <div className='relative bg-gray-300 h-[4px] mt-2'>
                        <div className='bg-pink-400 absolute h-[4px] w-[65%]'>
                        </div>
                    </div>

                    <p>Cooking</p>
                    <div className='relative bg-gray-300 h-[4px] mt-2'>
                        <div className='bg-pink-400 absolute h-[4px] w-[50%]'>
                        </div>
                    </div>

                    <p>Sleeping</p>
                    <div className='relative bg-gray-300 h-[4px] mt-2'>
                        <div className='bg-pink-400 absolute h-[4px] w-[95%]'>
                        </div>
                    </div>
                </div>
                </div>

        </section>
    )
}

export default Skills