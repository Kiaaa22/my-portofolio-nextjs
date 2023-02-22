import Navbar from '@/components/Navbar'
import React from 'react'
import Button from '../components/Button'
import Heading from '../components/Heading'

const Contact = () => {
    return (
    <>
    <Navbar />
    <section className='container mx-auto py-10 px-4' id="contact">
        <div className='pl-8'>
        <Heading title="Contact Us" />
        </div>

        <from className='flex flex-col gap-8 pl-8'>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-8 '>
                <input type="text" placeholder='Nama' className='outline-pink-400 border-gray-400 border rounded-[5px] 4px py-2 w-[100%] pl-3' required />
                <input type="text" placeholder='Email' className='outline-pink-400 border-gray-400 border rounded-[5px] 4px py-2 w-[100%] pl-3' required />
            </div>
            <input type="text" placeholder='Subjek' className='outline-pink-400 border-gray-400 border rounded-[5px] 4px py-2 w-[100%] pl-3' required />

            <textarea rows="6" placeholder='Pesan' className='outline-pink-400 border-gray-400 border rounded-[5px] 4px py-2 w-[100%] pl-3' required>

            </textarea>
            <div>
                <Button link='#' text='Kirim Pesan' />
            </div>
        </from>
    </section>
    </>
    )
}

export default Contact