import Image from 'next/image'
import React, { useContext, useEffect, useState } from 'react'
import { DataContext } from '@/context/DataContext'
import Link from 'next/link'
import chocolatead from '@/public/adsample/chocolatejpg.jpg'
import HandleDate from './HandleDate'

const HomeThridSection = () => {

    const apiData = useContext(DataContext);

    const [businessData, setBusinessData] = useState([])

    useEffect(() => {

        const dataVal = apiData.filter(item => item.category === "business")

        setBusinessData(dataVal)

    }, [apiData])

    return (
        <>
            <div>
                <div className='bg-[#373d83] h-52 w-full mt-10  md:mx-6 text-white pt-6 px-4 sm:ps-7 mb-2 md:mb-0'>
                    <p className='text-[48px] sm:text-[60px] font-extrabold'>Must Read</p>
                    <p className='font-gelasio'>
                        Everything you need to know about the re-reboot of your favourite childhood flick.
                    </p>
                </div>
                <div className='grid md:grid-cols-7 md:mx-6 mx-4 md:space-x-8 '>
                    {businessData.slice(0, 1).map((item) =>
                        <Link aria-label='link to detail page' href={`/${encodeURIComponent(item?.category)}/${encodeURIComponent(item?.title.replace(/[^a-zA-Z0-9]/g, '-').toLowerCase().replace(/-+/g, '-').replace(/-+$/, ''))}`} key={item.news_id} 
                        className='md:col-span-3 '>
                            <div className='-mt-12'>
                                <div className='relative'>
                                    <Image aria-label='news related image' src={item.image_path} alt="news image" width={311} height={478}
                                        className='bg-gray-200 mb-2 mx-auto w-full h-auto' />
                                    <p className='text-[12px] absolute bottom-0 left-0  bg-[#4C4084] text-white px-1 capitalize'>{item.category}</p>
                                </div>
                            </div>
                            <p className='text-[25px] md:text-[34px] leading-8 font-gelasio font-bold hover:text-[#4C4084]'>
                                {item.title}</p>
                            <div className='text-[12px] my-3 italic flex'>
                                {item.author} - <HandleDate item={item}/>
                            </div>
                        </Link>
                    )}

                    <div className='md:col-span-4'>
                        <div className='grid grid-cols-2 md:gap-8 gap-3 mt-8'>
                            {businessData.slice(1, 3).map((item) =>
                                <Link aria-label='link to detail page' href={`/${encodeURIComponent(item?.category)}/${encodeURIComponent(item?.title.replace(/[^a-zA-Z0-9]/g, '-').toLowerCase().replace(/-+/g, '-').replace(/-+$/, ''))}`} key={item.news_id} className='col-span-1 '>
                                    <div className='relative'>
                                        <Image aria-label='news related image' src={item.image_path} alt="news image" width={160} height={155}
                                            className='bg-gray-200 mb-2 w-full h-[155px] object-cover' />
                                        <p className='text-[12px] absolute bottom-0 left-0  bg-[#4C4084] text-white px-1 capitalize'>{item.category}</p>
                                    </div>
                                    <p className='text-[17px] leading-5 my-2 font-gelasio font-bold hover:text-[#4C4084]'>
                                        {item.title}</p>
                                    <div className='text-[12px] my-1 italic flex'>
                                        {item.author} - <HandleDate item={item}/>
                                    </div>
                                </Link>
                            )}
                        </div>

                        <div className='grid grid-cols-2 md:gap-8 gap-3 mt-8'>
                            {businessData.slice(3,5).map((item) =>
                                <Link aria-label='link to detail page' href={`/${encodeURIComponent(item?.category)}/${encodeURIComponent(item?.title.replace(/[^a-zA-Z0-9]/g, '-').toLowerCase().replace(/-+/g, '-').replace(/-+$/, ''))}`} key={item.news_id} className='col-span-1 '>
                                    <div className='relative'>
                                        <Image aria-label='news related image' src={item.image_path} alt="news image" width={160} height={155}
                                            className='bg-gray-200 mb-2 w-full h-[155px] object-cover' />
                                        <p className='text-[12px] absolute bottom-0 left-0  bg-[#4C4084] text-white px-1 capitalize'>{item.category}</p>
                                    </div>
                                    <p className='text-[17px] leading-5 my-2 font-gelasio font-bold hover:text-[#4C4084]'>
                                        {item.title}</p>
                                    <div className='text-[12px] my-1 italic flex'>
                                        {item.author} - <HandleDate item={item}/>
                                    </div>
                                </Link>
                            )}
                        </div>
                    </div>
                </div>
                <div className='border md:m-16 mb-10 py-5 px-4 md:px-[7rem] '>
                    <p className='text-[10px] text-center mb-1 text-[#595959]'>- Advertisement -</p>
                    <div className='mx-auto h-[7rem] '>
                    <Image  src={chocolatead} alt="ad image"  className='w-full h-auto'/>
                    </div>
                </div>
            </div>
        </>
    )
}

export default HomeThridSection