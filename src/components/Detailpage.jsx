
import facebook from '@/public/iconpack/facebookBlk48.png'
import instagram from '@/public/iconpack/instagramBlk50.png'
import twitter from '@/public/iconpack/xBlk64.png'
import vansad from '@/public/adsample/vans.jpg'
import Image from 'next/image'
import React, { useContext } from 'react'
import { DataContext } from '@/context/DataContext'
import { useParams } from 'next/navigation'
import chocolatead from '@/public/adsample/chocolatejpg.jpg'
import watsapp from '@/public/iconpack/sqwhatsapp48.png'
import facebookicon from '@/public/iconpack/sqfacebook48.png'
import twittersqaur from '@/public/iconpack/sqtwitterx48.png'
import pintrust from '@/public/iconpack/sqpinterest48.png'
import share from '@/public/iconpack/share48.png'
import HandleDate from './HandleDate'

const Detailpage = () => {

  const apiData = useContext(DataContext);

  const { id } = useParams();

  const newsApiData = [];
  apiData.map((item) => {
    if (id === item.title.replace(/[^a-zA-Z0-9]/g, '-').replace(/-+/g, '-').replace(/-+$/, '').toLowerCase()) {
      newsApiData.push(item);
    }
  });
  const handleFacebook = () => {

  }
  const handlePintrust = () => {

  }
  const handleWatsapp = () => {

  }

  const handleTwitter = () => {
    const url = window.location.href;
    const title = encodeURIComponent(document.title);
    const imageUrl = encodeURIComponent(document.image_path);
    const via = 'via @londonoutloo_k';
    
    const twitterShareUrl = `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${title} ${via} ${imageUrl}`;
    window.open(twitterShareUrl, '_blank');
  }


  return (
    
    <>
      <div className='max-w-7xl mx-auto'>
        <div className='grid lg:grid-cols-7 px-6 md:mx-6'>
          <div className='lg:col-span-5'>
            {newsApiData.map((item) =>
              <div key={item.news_id}>
                <p className='bg-black mb-5 mt-9 text-[10px] pt-[2px] px-[4px] uppercase text-white inline-block'>{item.category}</p>
                <p className='lg:text-[44px] text-[26px] leading-10 font-bold font-gelasio'>{item.title}</p>
              </div>
            )}


            <div className='md:flex items-center justify-between my-5'>
              {newsApiData.map((item)=>
               <div key={item.news_id} className='text-[13px] flex items-center'>
               <div className='text-[#5f5f5f] italic'>
                 By
                 <span className='text-black'> {item.author} -</span>
               </div>
               <div className='text-[#5f5f5f] italic mt-1'><HandleDate item={item}/></div>
             </div>
              )}
             
              <div className='my-3 md:my-0'>
                <div className='flex'>
                  <div className='flex border items-center h-[2rem] px-1 rounded-lg mt-1 me-1 '>
                    <Image src={share} width={18} height={18} className='w-[18px] h-[18px] mt-[2px] mx-1' alt="share icon" />
                    <p className='mt-[2px] text-[#e4e4e4]'>|</p>
                    <p className='text-[12px] font-semibold mx-2'>share</p>
                  </div>
                  <Image onClick={handleFacebook} src={facebookicon} width={40} height={40} alt="facebook icon" className='hover:cursor-pointer w-full h-auto' />
                  <Image onClick={handleTwitter} src={twittersqaur} width={40} height={40} alt="twitter icon" className='hover:cursor-pointer w-full h-auto' />
                  <Image onClick={handlePintrust} src={pintrust} width={30} height={30} className='h-[30px] w-auto mt-[5px] ms-[5px] hover:cursor-pointer' alt="pinterest icon" />
                  <Image onClick={handleWatsapp} src={watsapp} width={30} height={30} className='h-[30px] w-auto mt-[5px] ms-[9px] bg-green-700 rounded p-[3px] hover:cursor-pointer' alt="whatsapp icon" />
                </div>
              </div>
            </div>

            {newsApiData.map((item) =>
              <Image aria-label='news related image' key={item.news_id} width={300} height={200} className='w-full h-auto mx-auto object-cover' src={item.image_path} alt="news image" />
            )}


            <div className='grid lg:grid-cols-9 mt-6 mb-6 lg:mb-0'>
              <div className='md:col-span-3 hidden md:block '>
                {/* left side top section */}
                <div className='sticky bottom-0'>
                  <p className='text-[22px] text-[#3e307a] font-extrabold my-4'>Latest news</p>
                  <div className='border'>
                    <div className='m-4 space-y-5'>

                      {apiData.slice(5, 9).map((item) =>
                        <div key={item.news_id} className='grid grid-cols-6'>
                          <div className='col-span-4'>
                            <p className=' text-[12px] md:text-[14px] lg:text-[16px] font-bold font-gelasio  hover:text-[#4C4084] leading-5'>{item.title}</p>
                            <div className='text-[12px]  text-[#454545] my-2 md:hidden lg:block italic'><HandleDate item={item}/></div>
                          </div>
                          <div className='col-span-2 ms-1'>
                            <Image aria-label='news related image' src={item.image_path} alt="news image" width={65} height={65} className='w-full h-auto' />
                          </div>
                        </div>
                      )}


                    </div>
                  </div>
                </div>
                {/* left auther section */}
                <div className='sticky top-16 border mt-8 text-center'>
                  <Image className='rounded-full max-w-[120px] max-h-[120px] bg-gray-400 my-6 mx-auto' width={120} height={120} src="" alt="auther image" />
                  <p className='text-[20px] font-gelasio font-semibold'>Emilio Montes</p>
                  <p className='text-[13px] my-6 px-6'>
                    Emilio Montes has worked a Pulses PRO since its launch in 2011. In the years since, he has led by example the company's tech news team and published over 5,000 articles — a mix of breaking news, reviews, helpful how-tos, industry analysis, and more.
                  </p>
                  <div className='mb-6 flex justify-center space-x-3'>
                    <Image src={facebook} width={18} height={18} alt="facebook icon black" className='w-[18px] h-[18px]' />
                    <Image src={twitter} width={18} height={18} alt="twitter icon black" className='w-[18px] h-[18px]' />
                    <Image src={instagram} width={18} height={18} alt="instagram icon black" className='w-[18px] h-[18px]' />
                  </div>
                </div>
              </div>

              <div className='col-span-6 md:ms-6 space-y-6 text-[15px]'>
                {/* center content of detail page */}

                {newsApiData.map((item) =>

                  <div key={item.news_id} className='text-justify '>
                    {/* <p className='font-bold'>
                      The main thing that you have to remember on this journey is just be nice to everyone and always smile. Refreshingly, what was expected of her was the same thing that was expected of Lara Stone: to take a beautiful picture.
                    </p> */}
                    <p className='mb-3' dangerouslySetInnerHTML={{ __html: item.newsdetails.split(' ').slice(0,300).join(' ')}} />
                    
                    <Image aria-label='news related image' width={300} height={250} className='md:float-left w-full md:w-1/2 my-1 me-2  h-auto p-2 object-cover' src={item.image_path} alt="news image" />
                    <p  dangerouslySetInnerHTML={{ __html: item.newsdetails.split(' ').slice(300,600).join(' ')}} />
                    <div>
                      <Image aria-label='news related image' width={300} height={250} className='md:float-right w-full md:w-1/2 my-1 ms-2  h-auto p-2 object-cover' src={item.image_path} alt="news image" />
                      <p  dangerouslySetInnerHTML={{ __html: item.newsdetails.split(' ').slice(600).join(' ')}} />
                    </div>
                  </div>

                )}

                <div className='hidden md:block'>
                  {/* base center section of detail page */}
                  <p className='text-[#4c4084] text-[32px] font-gelasio text-center italic mt-8 mb-8'>IF YOU HAVE IT, YOU CAN MAKE ANYTHING LOOK GOOD</p>
                  <p className='text-[15px]'>Clothes can transform your mood and confidence. Fashion moves so quickly that, unless you have a strong point of view, you can lose integrity. I like to be real. I don’t like things to be staged or fussy. I think I’d go mad if I didn’t have a place to escape to. You have to stay true to your heritage, that’s what your brand is about.</p>

                </div>
                <div className='sm:hidden'>
                  <div className='sticky top-16 border mt-8 text-center'>
                    <Image className='rounded-full max-w-[120px] max-h-[120px] bg-gray-400 my-6 mx-auto' width={120} height={120} src="" alt="auther image" />
                    <div>


                    </div>

                    <p className='text-[13px] my-6 px-6'>
                      Emilio Montes has worked a Pulses PRO since its launch in 2011. In the years since, he has led by example the company's tech news team and published over 5,000 articles — a mix of breaking news, reviews, helpful how-tos, industry analysis, and more.
                    </p>
                    <div className='mb-6 flex justify-center space-x-3'>
                      <Image src={facebook} width={18} height={18} alt="facebook icon black" className='w-[18px] h-[18px]' />
                      <Image src={twitter} width={18} height={18} alt="twitter icon black" className='w-[18px] h-[18px]' />
                      <Image src={instagram} width={18} height={18} alt="instagram icon black" className='w-[18px] h-[18px]' />
                    </div>
                  </div>
                </div>
                <div className='my-12'>
                  <div className='flex'>
                    <div className='flex border items-center h-[2rem] px-1 rounded-lg mt-1 me-1 '>
                      <Image src={share} width={18} height={18} className='w-[18px] h-[18px] mt-[2px] mx-1' alt="share icon" />
                      <p className='mt-[2px] text-[#e4e4e4]'>|</p>
                      <p className='text-[12px] font-semibold mx-2'>share</p>
                    </div>
                    <Image onClick={handleFacebook} src={facebookicon} width={40} height={40} alt="facebook icon" className='hover:cursor-pointer' />
                    <Image onClick={handleTwitter} src={twittersqaur} width={40} height={40} alt="twitter icon" className='hover:cursor-pointer' />
                    <Image onClick={handlePintrust} src={pintrust} width={30} height={30} className='h-[30px] mt-[5px] ms-[5px] hover:cursor-pointer' alt="pinterest icon" />
                    <Image onClick={handleWatsapp} src={watsapp} width={30} height={30} className='h-[30px] mt-[5px] ms-[9px] bg-green-700 rounded p-[3px] hover:cursor-pointer' alt="whatsapp icon" />
                  </div>
                </div>
                <div className='hidden md:block'>
                  <div className='flex justify-between'>
                    {/* next and previous page section */}
                    <div>
                      <p className='text-[13px] text-[#5e5e5e]'>Previous article</p>
                      <p className='font-gelasio text-[#363636] hover:text-[#293e6c] text-[18px] font-bold max-w-[16rem] leading-5 mt-2'>
                        Successful entrepreneurs recognize when to move on
                      </p>
                    </div>
                    <div className='text-right'>
                      <p className='text-[13px] text-[#5e5e5e] '>Next article</p>
                      <p className='font-gelasio text-[#363636] hover:text-[#293e6c] text-[18px] font-bold max-w-[16rem] leading-5 mt-2'>
                        We asked the best: male influencers talk pricing
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='w-full my-8 border px-5 py-4 bg-gray-50 hidden md:block'>
              {/* bottom ad card */}
              <p className='text-[10px] text-center mb-1 text-[#595959]'>- Advertisement -</p>
              <Image src={chocolatead} alt="vans shoe ad" width={300} height={200} className='mx-auto w-full h-auto md:px-16' />
            </div>
          </div>
          <div className=' lg:col-span-2  ms-2'>
            <div>
              {/* ad card */}
              <p className='text-[10px] text-center mt-10 text-[#595959]'>- Advertisement -</p>
              <div className='mx-4 '><Image width={300} height={300} className=' h-auto mb-2 w-full' src={vansad} alt="ad image " /></div>
            </div>
            <div className='sticky top-0 mb-8'>
              <p className='text-[22px] text-[#3e307a] font-extrabold ms-6 my-4'>Latest news</p>
              <div className='md:col-span-3 border mx-2 lg:ms-6'>
                <div className=' m-4 space-y-5'>

                  {apiData.slice(0, 5).map((item) =>
                    <div key={item.news_id} className='grid grid-cols-3'>
                      <div className='col-span-2'>
                        <p className=' text-[12px] md:text-[14px] lg:text-[16px] font-bold font-gelasio  hover:text-[#4C4084] leading-5'>{item.title}</p>
                        <i className='text-[12px]  text-[#454545] my-2 md:hidden lg:block'><HandleDate item={item} /></i>
                      </div>
                      <div className='ms-1 col-span-1'>
                        <Image aria-label='news related image' src={item.image_path} alt="news image" width={85} height={85} className='bg-gray-400 w-full h-3/4 object-cover' />
                      </div>
                    </div>
                  )}

                </div>
              </div>
            </div>
          </div>
        </div>

      </div>

    </>
  )
}

export default Detailpage