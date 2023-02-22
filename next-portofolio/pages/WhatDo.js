import React from 'react'
import Heading from '../components/Heading'

import {GoPencil} from 'react-icons/go'
import {IoMdMicrophone} from 'react-icons/io'
import {RiLightbulbFlashFill} from 'react-icons/ri'
import Navbar from '@/components/Navbar'
import Skills from '@/components/Skills'

const WhatDo = () => {
    return (
    <>
    <Navbar />
    <Skills />
    <section className='container mx-auto py-10 px-4' id="portofolio" >
        <div className='pl-8'>
        <Heading title="What I Do" />
        </div>
        
        <div className='grid grid-cols-1 md:grid-cols-3 gap-6 pl-8'>
            <div className='shadow-lg flex flex-col gap-4 px-8 py-10 bg-pink-400 text-white'>
                <RiLightbulbFlashFill className='text-[28px]'/>

                <h2 className='font-medium text-[20px]'>Design</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt 
                    ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco 
                    laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in 
                    voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
            </div>

            <div className='shadow-lg flex flex-col gap-4 px-8 py-10 bg-pink-400 text-white'>
                <GoPencil className='text-[28px]'/>

                <h2 className='font-medium text-[20px]'>Drawing</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt 
                    ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco 
                    laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in 
                    voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
            </div>

            <div className='shadow-lg flex flex-col gap-4 px-8 py-10 bg-pink-400 text-white'>
                <IoMdMicrophone className='text-[28px]'/>

                <h2 className='font-medium text-[20px]'>Singing</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt 
                    ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco 
                    laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in 
                    voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
            </div>
        </div>
    
    </section>
    </>
    )
    }

export default WhatDo