import React, { useContext, useEffect, useState } from 'react'
import Image from 'next/image'
import hamburger from '@/public/iconpack/hamburgerWyt48.png'
import vansad from '@/public/adsample/vans.jpg'
import { DataContext } from '@/context/DataContext'
import Link from 'next/link'
import HandleDate from './HandleDate'

const HomeFourthSection = () => {

    const apiData = useContext(DataContext);

    const [businessData, setBusinessData] = useState([])
    const [politicsData, setPoliticsData] = useState([])

    useEffect(() => {

        const businessVal = apiData.filter(item => item.category === "business")

        setBusinessData(businessVal)

        const politicsVal = apiData.filter(item => item.category === "politics")

        setPoliticsData(politicsVal)

    }, [apiData])
    return (
        <>
            <div className='grid lg:grid-cols-11 mx-6'>
                <div className='lg:col-span-2 mt-10 hidden lg:block'>
                    <div className='border mb-5 sticky top-0 md:px-2'>
                        <p className='text-[24px] font-bold m-5 text-[#4C4084]'>Business</p>
                        {businessData.slice(0, 5).map((item) =>
                            <Link aria-label='link to detail page' href={`/${encodeURIComponent(item?.category)}/${encodeURIComponent(item?.title.replace(/[^a-zA-Z0-9]/g, '-').toLowerCase().replace(/-+/g, '-').replace(/-+$/, ''))}`} key={item.news_id} 
                             className='mx-5 border-b mb-5 pb-3'>
                                <p className='text-[17px] leading-5 font-gelasio font-bold hover:text-[#4C4084]'>
                                    {item.title}
                                </p>
                                <div className='text-[12px] my-1 italic'>
                                   <HandleDate item={item}/>
                                </div>
                            </Link>
                        )}

                        <div className='px-6'>
                            <Link aria-label='link to cateogory page' href={`/${encodeURIComponent(businessData[0]?.category)}`} className='flex justify-center rounded bg-[#1c1c1c] mx-auto text-white 
                                text-[10px] hover:bg-[#4C4084] font-semibold py-3 mb-4'>
                                <p className='me-2'>View All News</p>
                                <Image className='w-[18px] h-auto' width={32} height={32} src={hamburger} alt="hamburger menu icon" />
                            </Link>
                        </div>

                    </div>
                </div>
                <div className='lg:col-span-6 md:px-8'>

                    <div className='relative'>
                        <p className='text-[65px] sm:text-[80px] font-bold text-[#8c8c8c] '>LATEST</p>
                        <p className='text-[18px] sm:text-[22px] text-[#150e35] absolute bottom-8 left-4 font-extrabold'>Politics</p>
                    </div>
                    <div>
                        {politicsData.slice(0, 1).map((item) =>
                            <Link aria-label='link to detail page' href={`/${encodeURIComponent(item?.category)}/${encodeURIComponent(item?.title.replace(/[^a-zA-Z0-9]/g, '-').toLowerCase().replace(/-+/g, '-').replace(/-+$/, ''))}`} key={item.news_id} >
                                <div>
                                    <div className='relative mt-2'>
                                        <Image aria-label='news related image' width={300} height={556} className=' mx-auto w-full h-auto' src={item.image_path} alt="news image" />
                                        <p className='text-[12px] absolute bottom-0 left-0  bg-[#4C4084] text-white px-1 capitalize'>{item.category}</p>
                                    </div>
                                </div>
                                <div className=' mt-2'>
                                    <p className='text-[30px] md:text-[34px]  font-gelasio font-bold leading-8 my-3 hover:text-[#3b3169] '>{item.title}</p>
                                    <div className='text-[12px] my-2 italic flex'>
                                        <span >{item.author}</span> -<span> <HandleDate item={item}/></span>
                                    </div>
                                    <div className='leading-5 text-[13px] text-[#3e3e3e] my-3 md:mb-20 sm:hidden' dangerouslySetInnerHTML={{ __html: item.newsdetails.split(' ').slice(0,10).join(' ') + "..." }} />
                                    <div className='leading-5 text-[13px] text-[#3e3e3e] my-3 md:mb-20 hidden sm:block' dangerouslySetInnerHTML={{ __html: item.newsdetails.split(' ').slice(0,25).join(' ') + "..." }} />
                                </div>
                            </Link>
                        )}

                        {politicsData.slice(1, 4).map((item) =>
                            <Link aria-label='link to detail page' href={`/${encodeURIComponent(item?.category)}/${encodeURIComponent(item?.title.replace(/[^a-zA-Z0-9]/g, '-').toLowerCase().replace(/-+/g, '-').replace(/-+$/, ''))}`} key={item.news_id} 
                             className='pb-7 grid grid-cols-8'>
                                <div className='col-span-3'>
                                    <div className='relative mt-2 '>
                                        <Image aria-label='news related image' width={240} height={140} className='w-full h-auto' src={item.image_path} alt="news image" />
                                        <p className='text-[12px] absolute bottom-0 left-0  bg-[#4C4084] text-white px-1 capitalize'>{item.category}</p>
                                    </div>
                                </div>
                                <div className='md:mx-6 ms-2 border-t mt-2 col-span-5'>
                                    <p className='text-[16px] md:text-[24px]  font-gelasio font-bold leading-5 md:leading-6 sm:my-3 mb-3 mt-1 hover:text-[#3b3169] '>{item.title}</p>
                                    <div className='text-[10px] md:text-[12px] my-2 italic flex'>
                                        <span className='hidden lg:block'>{item.author} -</span><span> <HandleDate item={item}/></span>
                                    </div>
                                    <div className='leading-5 text-[13px] text-[#3e3e3e] my-3 md:mb-6 hidden sm:block' dangerouslySetInnerHTML={{ __html: item.newsdetails.split(' ').slice(0, 20).join(' ') + "..." }} />
                                </div>
                            </Link>
                        )}
                    </div>

                </div>
                <div className='lg:col-span-3 mt-10'>
                <div className='border px-5'>
                        <p className='text-[24px] font-bold pt-2 text-[#4C4084]'>Business</p>
                        {businessData.slice(0, 3).map((item) =>
                            <Link aria-label='link to detail page' href={`/${encodeURIComponent(item?.category)}/${encodeURIComponent(item?.title.replace(/[^a-zA-Z0-9]/g, '-').toLowerCase().replace(/-+/g, '-').replace(/-+$/, ''))}`} key={item.news_id} 
                             className='grid grid-cols-8 my-6 space-x-2'>
                                <div className='col-span-5'>
                                    <p className='text-[16px] md:text-[18px] leading-5 font-gelasio font-bold hover:text-[#4C4084]'>{item.title}</p>
                                    <div className='text-[12px] my-1 italic'>
                                        <HandleDate item={item}/>
                                    </div>
                                </div>
                                <div className='w-full h-auto object-cover col-span-3'>
                                    <Image aria-label='news related image' className='bg-gray-300 w-full h-auto' width={120} height={70} src={item.image_path} alt="round news image" />
                                </div>
                            </Link>
                        )}
                        <div className='px-4'>
                            <Link aria-label='link to category page' href={`/${encodeURIComponent(businessData[0]?.category)}`} className='flex justify-center rounded bg-[#1c1c1c] mx-auto text-white 
                                    text-[10px] hover:bg-[#4C4084] font-semibold py-3 mb-4'>
                                <p className='me-2'>View All News</p>
                                <Image  className='w-[18px] h-auto' width={32} height={32} src={hamburger} alt="hamburger menu icon" />
                            </Link>
                        </div>
                    </div>
                    {/* ad card */}
                    <div className='border mt-8 sticky top-0 mb-5'>
                        <div className='mt-4'>
                            <p className='text-[10px] text-center mb-1 text-[#595959]'>- Advertisement -</p>
                            <Image width={300} height={250} className='mx-auto h-auto mb-6 w-auto' src={vansad} alt="ad image" />
                        </div>

                        <div className='px-5'>
                            <p className='text-[24px] font-bold pt-2 text-[#4C4084]'>Business</p>

                            {businessData.slice(0,2).map((item)=>
                            <Link aria-label='link to detail page' href={`/${encodeURIComponent(item?.category)}/${encodeURIComponent(item?.title.replace(/[^a-zA-Z0-9]/g, '-').toLowerCase().replace(/-+/g, '-').replace(/-+$/, ''))}`} key={item.news_id} 
                             className='grid grid-cols-4 my-6'>
                            <div className='col-span-3'>
                                <p className='text-[18px] leading-5 font-gelasio font-bold hover:text-[#4C4084]'>{item.title}</p>
                                <div className='text-[12px] my-1 italic'>
                                    <HandleDate item={item}/>
                                </div>
                            </div>
                            <div className=' col-span-1'>
                                <Image aria-label='news related image' className='bg-gray-300 w-full h-[4.5rem] object-cover' width={70} height={70} src={item.image_path} alt="round news image" />
                            </div>
                        </Link>
                            )}
                            <div className='px-4'>
                                <Link aria-label='link to category page' href={`/${encodeURIComponent(businessData[0]?.category)}`}
                                 className='flex justify-center rounded bg-[#1c1c1c] mx-auto text-white 
                                            text-[10px] hover:bg-[#4C4084] font-semibold py-3 mb-4'>
                                    <p className='me-2'>View All News</p>
                                    <Image  className='w-[18px] h-auto' width={32} height={32} src={hamburger} alt="hamburger menu icon" />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default HomeFourthSection