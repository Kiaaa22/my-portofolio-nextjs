import React from 'react'
import TypewriterComponent from 'typewriter-effect'
import Button from './Button'

const Hero = () => {
    return (
    <div className='bg-[url("/hero.jpg")] h-screen bg-cover bg-center bg-fixed
    flex items-center'>

        <div className='container mx-auto px-4 '>
        <div className='max-w-[450px] text-white flex flex-col gap-[40px]'>
            <div className='ml-8'>
                <h1 className='text-5xl font-bold'>Aku adalah</h1>
                <h4 className='text-2xl mt-3 font-medium'>
                <TypewriterComponent
                options={{
                    strings: [
                        "Anime",
                        "Anak lucu",
                        "Anak Hebat"
                    ],
                    changeDelay: 3,
                    changeDeleteSpeed: 2,
                    autoStart: true,
                    loop: true,
                }} />
                </h4>
            </div>
            <div className='bg-[pink-300] h-[2px] ml-8'>
                <p className='mb-7'>
                    Always be Happy Yayyyyy
                </p>
                <Button link='About' text='Learn More' id="about" />
            </div>
        </div>
        </div>

    </div>
    )
}

export default Hero