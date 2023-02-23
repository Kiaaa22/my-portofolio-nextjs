import Image from 'next/image'
import React, { useState, useEffect } from 'react'
import Heading from '../components/Heading'
import Button from '../components/Button'
import { FaBirthdayCake, FaSchool } from 'react-icons/fa'
import { ImLocation2 } from 'react-icons/im'
import { BsFillPersonFill } from 'react-icons/bs'
import Link from 'next/link'
import Skills from '@/components/Skills'
import Navbar from '@/components/Navbar'

const About = () => {
  return (
    <>
    <Navbar />
    <div className="container mx-auto py-10 px-4" id='about'>
      <div className='pl-8'>
      <Heading title="About Me" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-[60px]">
        <div>
          <Image
            src="/aboutme.jpg"
            width={1000}
            height={200}
            className=' ml-8 w-[400px] rounded-xl'
            alt=""
          />
        </div>

        <div className="flex items-center justify-between w-[400px]">
          <div className="flex flex-col gap-6 ">
            <div className=" text-black flex gap-4 items-center font-medium text-[19px]">
              <BsFillPersonFill className="text-pink-400 text-[24px]" />
              <p>Nama</p>
            </div>

            <div className=" text-black flex gap-4 items-center font-medium text-[19px]">
              <FaBirthdayCake className="text-pink-400 text-[24px]" />
              <p>TTL</p>
            </div>

            <div className=" text-black flex gap-4 items-center font-medium text-[19px]">
              <FaSchool className="text-pink-400 text-[24px]" />
              <p>Sekolah</p>
            </div>

            <div className=" text-black flex gap-4 items-center font-medium text-[19px]">
              <ImLocation2 className="text-pink-400 text-[24px]" />
              <p>Alamat</p>
            </div>
          </div>

          <div className="space-x-5 flex flex-col gap-6 text-black text-[19px]">
            <div></div>
            <div>:</div>
            <div>:</div>
            <div>:</div>
            <div>:</div>
            <div></div>
          </div>

          <div className="flex flex-col gap-6 text-black text-lg pb-5">
            <div></div>
            <div>Zaskia Rizky Raichand</div>
            <div> Kediri, 21 Maret 2006 </div>
            <div> SMK Telkom Malang </div>
            <div> Jl Danau Ranau VII GIF No.03 </div>
          </div>
        </div>
      </div>
      <div className="max-w-[800px] pl-8">
        <h2 className="font-bold mt-16 mb-3 text-[19px]"> Aku Kiaa Yayyyy</h2>
        <p className=" text-gray-00 text-[15px]">
          Haiii!! Aku Zaskia, biasa dipanggil Kia.
        </p>
        <p className=" text-gray-00 text-[15px]">
          MBTI-ku INFP lohhh wkwkwkwk
        </p>
        <p className=" text-gray-00 text-[15px]">
          Aku ingin menjadi Princess Disney
        </p>

        {/* <Button link="#" text="Hire Me" /> */}
      </div>
    </div>
    </>
  )
}

export default About
