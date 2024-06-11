
import React, { useContext, useEffect, useState } from 'react'
import vansad from '@/public/adsample/vans.jpg'
import { DataContext } from '@/context/DataContext';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import HandleDate from './HandleDate';


const CategoryPage = () => {


  const { category } = useParams();

  const apiData = useContext(DataContext);

  const [categoryItems, setCategoryItems] = useState([])

  useEffect(() => {

    const fileterdCategory = apiData.filter(item => item.category === category);

    setCategoryItems(fileterdCategory);


  }, [apiData, category]);


  return (
    <>
      <div className='text-center my-8 mb-12 max-w-7xl mx-auto'>
        <p className='text-[10px] font-semibold text-[#757575]'>CATEGORY</p>
        <p className='font-gelasio text-[31px] md:text-[41px] font-semibold capitalize'>
          {category}
        </p>
        <i className=' text-[#757575] font-gelasio'>
          Read the latest news with the Best WordPress News Theme – Newspaper by tagDiv!
        </i>
      </div>
      <div className='grid md:grid-cols-9 max-w-7xl mx-auto px-1 md:px-6'>
        <div className='md:col-span-6'>

          {categoryItems.map((item) =>
            <Link aria-label='link to detail page' href={`/${encodeURIComponent(item?.category)}/${encodeURIComponent(item?.title.replace(/[^a-zA-Z0-9]/g, '-').toLowerCase().replace(/-+/g, '-').replace(/-+$/, ''))}`} 
            key={item.news_id}>
              <div className='grid grid-cols-3 mb-6 mx-3'>
                <div className='col-span-1'>
                  <Image aria-label='news related image' width={300} height={250} className='object-cover w-full h-auto' src={item.image_path} alt="news Image" />
                </div>
                <div className='col-span-2 mx-2 md:mx-6 border-t sm:py-2'>
                  <p className='text-[15px] md:text-[24px] font-bold font-gelasio md:leading-6 hover:text-[#4C4084]'>{item.title}</p>
                  <div className='flex text-[10px] md:text-[12px]  text-[#454545] my-2 '>
                    <i>{item.author} -</i>
                    <div className='italic'> <HandleDate item={item}/></div>
                  </div>
                  <div className='me-3 text-[14px] text-[#757575] my-5 hidden lg:block'>
                  <p className='leading-5' dangerouslySetInnerHTML={{ __html: item.newsdetails.split(' ').slice(0, 20).join(' ') + "..." }} /></div>
                </div>
              </div>
            </Link>
          )}

        </div>

        <div className='md:col-span-3 border mx-2 lg:ms-6'>
          <div className='sticky top-0 m-5 space-y-5'>
            <p className='text-[16px] mb-4 md:text-[22px] text-[#3e307a] font-extrabold'>Latest news</p>

            {apiData.slice(0, 5).map((item) =>
            <Link aria-label='link to detail page' href={`/${encodeURIComponent(item?.category)}/${encodeURIComponent(item?.title.split(' ').join('-'))}`} 
            key={item.news_id}>
              <div className='grid grid-cols-8 mb-2'>
                <div className='col-span-5'>
                  <p className=' text-[14px] font-bold font-gelasio  hover:text-[#4C4084] leading-5'>{item.title}</p>
                  <div className='text-[10px] md:text-[12px]  text-[#454545] my-2 md:hidden lg:block italic'><HandleDate item={item}/></div>
                </div>
                <div className='col-span-3 ms-1'>
                  <Image aria-label='news related image' className='w-full h-auto' src={item.image_path} alt="news image" width={150} height={150} />
                </div>
              </div>
              </Link>
            )}
            <div>
              {/* ad card */}
              <p className='text-[10px] text-center mt-10 text-[#595959]'>- Advertisement -</p>
              <Image width={300} height={300} className=' h-auto w-auto mb-2 mx-auto ps-1' src={vansad} alt="ad image " />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default CategoryPage