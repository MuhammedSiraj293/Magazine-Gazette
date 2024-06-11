'use client'
import React, { useContext } from 'react'
import { DataContext } from '@/context/DataContext'
import facebook from '@/public/iconpack/facebook50.png'
import instagram from '@/public/iconpack/instagram64.png'
import twitter from '@/public/iconpack/twitter60.png'
import youtube from '@/public/iconpack/youtube48.png'
import Image from 'next/image'
import Link from 'next/link'
import HandleDate from './HandleDate'



const Footer = () => {


    const apiData = useContext(DataContext);


    // Extract categories from apiData and remove duplicates
    const categories = [...new Set(apiData.map(item => item.category.toLowerCase()))];
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };


    return (
        <>
            <div className='bg-black bg-opacity-90 text-white font-gelasio '>
               <div className='flex justify-center animate-bounce  '>
                 <button onClick={scrollToTop} aria-label='scroll top button' className=' bg-gray-600 p-3 -rotate-90 inline-block rounded-full mt-3'>&#10140;</button>
                 </div>
                <div className=' sm:grid sm:grid-cols-10 gap-x-3  px-6 py-[4rem] text-center sm:text-start max-w-7xl mx-auto'>
                    <div className='sm:col-span-4 '>
                        <p className='text-[34px] font-medium mb-4 '>PULSES PRO</p>
                        <p className='text-[14px] font-sans'>&#169; Pulses Pro </p>
                        <div className='flex my-4 space-x-4 justify-center sm:justify-start'>
                            <Image src={facebook} width={20} height={20} alt="facebook icon" className='w-auto h-auto' />
                            <Image src={instagram} width={20} height={20} alt="instagram icon" className='w-auto h-auto' />
                            <Image src={twitter} width={20} height={20} alt="twitter icon" className='w-auto h-auto' />
                            <Image src={youtube} width={20} height={20} alt="youtube icon"  className='w-auto h-auto'/>
                        </div>
                        <hr className='sm:hidden mx-4' />
                    </div>
                    <div className='sm:col-span-3'>
                        <div className='md:flex md:justify-evenly font-sans '>
                            <div >
                                <p className='text-[#FEBE2B] text-[24px] font-bold mb-4 '>About Us</p>
                                <dvi className='text-[11px] space-y-2'>
                                    <p>ADVERTISE</p>
                                    <p>ABOUT</p>
                                    <p>EVENTS</p>
                                    <p>WRITE FOR US</p>
                                    <p>IN THE PRESS</p>
                                </dvi>
                            </div>

                            <div >
                                <p className='text-[#FEBE2B] text-[24px] font-bold mb-4 mt-5 md:max-w-10 lg:me-8 sm:mt-0'>Popular Category</p>
                                <div className='text-[12px] space-y-2' >

                                    {categories.map((item,index) =>
                                        <Link aria-label='link to category page' key={index} href={`/${item}`} >
                                            <p className='hover:text-[#feffae] capitalize my-2'>{item}</p>
                                        </Link>
                                    )}

                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='sm:col-span-3 '>
                        <p className='text-[#FEBE2B] text-[24px] font-sans font-bold mb-4 mt-5 sm:mt-0'>Editor Picks</p>
                        {apiData.slice(0,2).map((item) =>
                            <div key={item.news_id} className='grid grid-cols-6 mb-5'>
                                <div className='col-span-5'>
                                    <p className='text-[15px]'>{item.title}</p>
                                    <div className='text-[13px] font-sans italic'><HandleDate item={item} /></div>
                                </div>
                                <Image aria-label='news related image' width={60} height={60} src={item.image_path} alt="news image" className='ms-1 object-cover col-span-1 w-full h-full' />
                            </div>
                        )}


                    </div>
                </div>
            </div>


        </>
    )
}

export default Footer