import React from 'react'
import Heading from '../components/Heading'
import Image from 'next/image'
import Navbar from '@/components/Navbar'

const Creation = () => {
    return (
        <>
        <Navbar />
        <section className='container mx-auto py-10 px-4' id="creation">
        <div className='pl-8'>
        <Heading title="Creation" />
        </div>

        <div className='grid grid-cols-3 gap-4 ml-8'>
            <div className='row-span-2 relative group'>
                <Image src="/oc full.jpeg" width="1000" height="100" alt="" className='border-4 border-zinc-200' /> 
            </div>

            <div className='relative group'>
                <Image src="/oc half happy.jpeg" width="1000" height="100" alt="" className='border-4 border-zinc-200' />
                <div className='bg-black absolute w-[100%] h-[100%] top-0
                opacity-0 transition duration-500 group:hover:opacity-100
                grid place-items-center text-white'>
                    Half Body Happy
                </div>
            </div>

            <div className='relative group'>
                <Image src="/oc half sad.jpeg" width="1000" height="100" alt="" className='border-4 border-zinc-200' />
                <div className='bg-black absolute w-[100%] h-[100%] top-0
                opacity-0 transition duration-500 group:hover:opacity-100
                grid place-items-center text-white'>
                    Half Body Cry
                </div>
            </div>

            <div className='relative group'>
                <Image src="/ayam.png" width="1000" height="100" alt="" className='border-4 border-zinc-200' />
                <div className='bg-black absolute w-[100%] h-[100%] top-0
                opacity-0 transition duration-500 group:hover:opacity-100
                grid place-items-center text-white'>
                    Blender Ayam
                </div>
            </div>

            <div className='relative group'>
                <Image src="/ayo masak.png" width="1000" height="100" alt="" className='border-4 border-zinc-300' />
                <div className='bg-black absolute w-[100%] h-[100%] top-0
                opacity-0 transition duration-500 group:hover:opacity-100
                grid place-items-center text-white'>
                    Ayo masak
                </div>
            </div>

            <div className='relative group'>
                <Image src="/padoru.jpeg" width="1000" height="100" alt="" className='border-4 border-zinc-200' />
                <div className='bg-black absolute w-[100%] h-[100%] top-0
                opacity-0 transition duration-500 group:hover:opacity-100
                grid place-items-center text-white'>
                    Chibi Padoru
                </div>
            </div>

            <div className='relative group'>
                <Image src="/project p5.jpeg" width="1000" height="100" alt="" className='border-4 border-zinc-200' />
                <div className='bg-black absolute w-[100%] h-[100%] top-0
                opacity-0 transition duration-500 group:hover:opacity-100
                grid place-items-center text-white'>
                    Project P5
                </div>
            </div>

            <div className='relative group'>
                <Image src="/oc sun flower.jpeg" width="1000" height="100" alt="" className='border-4 border-zinc-200' />
                <div className='bg-black absolute w-[100%] h-[100%] top-0
                opacity-0 transition duration-500 group:hover:opacity-100
                grid place-items-center text-white'>
                    Original Character
                </div>
            </div>

        </div>
        </section>
        </>
    )
}

export default Creation;