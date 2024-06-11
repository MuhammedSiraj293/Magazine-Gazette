import React, { useContext, useEffect, useState } from 'react'
import vansad from '@/public/adsample/vans.jpg'
import Image from 'next/image'
import hamburger from '@/public/iconpack/hamburgerWyt48.png'
import ShimmerUiHomeTop from './ShimmerUiHomeTop'
import { DataContext } from '@/context/DataContext'
import Link from 'next/link'
import HandleDate from './HandleDate'


const HomeTopSection = () => {

    const apiData = useContext(DataContext);

    const [businessData, setBusinessData] = useState([])

    useEffect(() => {

        const dataVal = apiData.filter(item => item.category === "business")

        setBusinessData(dataVal)

    }, [apiData])



    return (
        <>
            {apiData.length > 0 ?
                <div className=' grid md:grid-cols-12 gap-8 mx-6 mt-6'>
                    {apiData.slice(0, 1).map((item) =>
                        <Link aria-label='link to detail page' href={`/${encodeURIComponent(item?.category)}/${encodeURIComponent(item?.title.replace(/[^a-zA-Z0-9]/g, '-').toLowerCase().replace(/-+/g, '-').replace(/-+$/, ''))}`} key={item.news_id}
                         className='md:col-span-7 lg:col-span-6'>
                            <p className='w-[2.2rem] bg-[#4C4084] text-white text-[12px] ps-[2px]'>News</p>

                            <p className='text-[24px] md:text-[32px] font-gelasio font-bold leading-6 md:leading-8 mt-2'>{item.title}</p>

                            <div className='flex text-[12px] my-2 mb-4 italic'>
                                <span >{item.author} </span> - <span> <HandleDate item={item}/></span>
                            </div>
                            <Image aria-label='news related image' width={698} height={523} className='bg-slate-200 w-full h-auto' src={item.image_path} alt="news image" />
                            <div className='leading-5 text-[14px] text-[#3e3e3e] my-4 md:mb-20' dangerouslySetInnerHTML={{ __html: item.newsdetails.split(' ').slice(0, 25).join(' ') + "..." }} />
                            <div className='w-full h-[2px] bg-black hidden md:block'></div>
                        </Link>
                    )}
                            
                    <div className='md:col-span-5 lg:col-span-3'>
                        {apiData.slice(1, 4).map((item) =>
                            <Link aria-label='link to detail page' href={`/${encodeURIComponent(item?.category)}/${encodeURIComponent(item?.title.replace(/[^a-zA-Z0-9]/g, '-').toLowerCase().replace(/-+/g, '-').replace(/-+$/, ''))}`} key={item.news_id} className='pb-6 pt-1'>
                                <div className='relative'>
                                    <Image aria-label='news related image' width={334} height={150} className='bg-slate-100 w-full md:h-[9rem] object-cover' src={item.image_path} alt="news image" />
                                    <p className='text-[12px] absolute bottom-0 left-0  bg-[#4C4084] text-white px-1 capitalize'>{item.category}</p>
                                </div>
                                <p className='text-[19px] font-gelasio font-bold leading-5 my-2'>{item.title}</p>
                                <div className='flex text-[12px] my-1 mb-5 italic'>
                                    <span >{item.author}</span> -<span> <HandleDate item={item}/></span>
                                </div>
                            </Link>
                        )}
                    </div>
                    <div className='md:col-span-3 sm:hidden lg:block'>
                        <p className='text-[24px] font-bold pt-2 text-[#4C4084]'>Business</p>
                        {businessData.slice(0, 4).map((item) =>
                            <Link aria-label='link to detail page' href={`/${encodeURIComponent(item?.category)}/${encodeURIComponent(item?.title.replace(/[^a-zA-Z0-9]/g, '-').toLowerCase().replace(/-+/g, '-').replace(/-+$/, ''))}`} key={item.news_id} className='grid grid-cols-7 my-3'>
                                <div className='col-span-5 '>
                                    <p className='text-[18px] leading-5 font-gelasio font-bold hover:text-[#4C4084]'>{item.title}</p>
                                    <div className='text-[12px] my-1 italic'>
                                        <HandleDate item={item}/>
                                    </div>
                                </div>
                                <div className=' col-span-2'>
                                    <Image aria-label='news related image' className=' rounded-full w-[85px] h-[85px] object-cover mx-auto' width={85} height={85} src={item.image_path} alt="round news image" />
                                </div>
                            </Link>
                        )}

                        <div >
                            <Link aria-label='link to category page' href={`/${encodeURIComponent(businessData[0]?.category)}`} className='flex justify-center rounded bg-[#1c1c1c] mx-auto text-white 
                                text-[10px] hover:bg-[#4C4084] font-semibold py-3 mb-4'>
                                <p className='me-2'>View All News</p>
                                <Image  className='w-[18px] h-auto' width={32} height={32} src={hamburger} alt="hamburger menu icon" />
                            </Link>
                        </div>
                        {/* ad card */}
                        <div>
                            <Image width={300} height={250} className='mx-auto h-auto w-auto' src={vansad} alt="ad image" />
                        </div>
                    </div>
                </div> : <ShimmerUiHomeTop />}
        </>
    )
}

export default HomeTopSection