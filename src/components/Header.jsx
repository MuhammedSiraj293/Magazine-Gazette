"use client"
import React, { useContext, useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import facebook from '@/public/iconpack/facebookBlk48.png';
import search from '@/public/iconpack/searchBlk48.png';
import twitter from '@/public/iconpack/xBlk64.png';
import youtube from '@/public/iconpack/youtubeBlk50.png';
import hamburger from '@/public/iconpack/hamburgerMenu48.png';
import cross from '@/public/iconpack/cross48.png';
import Link from 'next/link';
import { DataContext } from '@/context/DataContext';

const Header = () => {


    const apiData = useContext(DataContext);

    // Extract categories from apiData and remove duplicates
    const categories = [...new Set(apiData.map(item => item.category.toLowerCase()))];


    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isSearchOpen, setIsSearchOpen] = useState(false);
    const [searchData, setSearchData] = useState([])

    const handelSearch = (val) => {
        if (val.trim() === '') {
            setSearchData([]);
        } else {
            const res = apiData.filter(data => data.title.toLowerCase().includes(val.toLowerCase()));
            setSearchData(res);
        }
    }


    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };
    const toggleSearch = () => {
        setIsSearchOpen(!isSearchOpen)
    }

    const inputRef = useRef(null);

    useEffect(() => {
        if (isSearchOpen && inputRef.current) {
            inputRef.current.focus();
        }
    }, [isSearchOpen]);

    return (
        <>
            <div>
                <div className='max-w-7xl mx-auto' >
                    <div className='flex justify-between items-center text-[#222222] py-7 px-2 sm:px-7'>
                        <div className='hidden md:block'>
                            <p className='text-[14px]'>
                                Tuesday, May 21, 2024
                            </p>
                        </div>
                        <div>
                            <Link aria-label='link to home page' href={'/'}>
                                <p className='text-[26px] md:text-[34px] lg:text-[56px] font-semibold font-gelasio md:my-6'>
                                    MAGAZINE GAZETTE
                                </p>
                            </Link>
                        </div>
                        <div className='flex space-x-3 items-center'>
                            <Image src={facebook} className='w-[18px] h-[18px] hidden md:block' width={20} height={20} alt="facebook icon" />
                            <Image src={twitter} className='w-[18px] h-[18px] hidden md:block' width={20} height={20} alt="twitter icon" />
                            <Image src={youtube} className='w-[18px] h-[18px] hidden md:block' width={20} height={20} alt="youtube icon" />
                            <button aria-label='Search toggle button' className='bg-gray-100 rounded-full mx-4 ' onClick={toggleSearch}>
                                <Image aria-label='image of search icon' className='w-[18px] h-[18px] m-2' src={search} width={20} height={20} alt="search icon" />
                            </button>
                            <button aria-label='toggle menu button' className='bg-gray-100 rounded-full mx-4 block md:hidden' onClick={toggleMenu}>
                                <Image className='w-[18px] h-[18px] m-2' src={hamburger} width={32} height={32} alt="hamburger icon" />
                            </button>
                        </div>
                    </div>
                </div>
                <hr className='mx-6' />
                <div className='hidden md:block'>
                    {apiData.length ? <div className='flex lg:text-[16px] md:text-[14px] md:space-x-5 lg:space-x-10 font-bold justify-center py-4'>
                        <Link aria-label='link to home page' href={'/'}>
                            <p className='uppercase'>home</p>
                        </Link>
                        {categories.map((item, index) =>
                            <Link aria-label='link to category page' key={index} href={`/${item}`} >
                                <p className='hover:text-[#4C4084] capitalize '>{item}</p>
                            </Link>
                        )}
                    </div> : <div className='flex space-x-10 font-bold justify-center py-4 w-9/12 mx-auto'>loading...</div>}

                </div>
                <hr className='shadow' />

                {/* Sliding Menu */}
                <div className={`fixed z-40 inset-y-0 left-0 w-64 bg-white transform ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out`}>
                    <div className='flex flex-col p-4 space-y-4'>
                        <button aria-label='toggle menu button ' className='self-end bg-gray-100 mb-8 rounded-full p-2 ' onClick={toggleMenu}>
                            <Image aria-label='close menu button' className='w-[18px] h-[18px]' src={cross} width={20} height={20} alt="close menu icon" />
                        </button>
                        <Link aria-label='link to home page' href={'/'}>
                            <p onClick={toggleMenu} className='uppercase'>home</p>
                        </Link>
                        {categories.map((item, index) =>
                            <Link aria-label='link to category page' key={index} href={`/${item}`}>
                                <p onClick={toggleMenu} className='uppercase'>{item}</p>
                            </Link>
                        )}


                    </div>
                </div>
                {/* Sliding search */}
                <div onClick={toggleSearch} className={`fixed z-50 bg-opacity-25 bg-gray-400  inset-y-0 right-0 w-full  transform ${isSearchOpen ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-300 ease-in-out`}>
                    <div className='bg-gray-50 h-full md:w-3/4 mx-auto shadow mt-[7rem]  rounded-lg '>
                        <div className='flex flex-col p-4 space-y-4 '>
                            <button aria-label='toggle search button' className='self-end bg-gray-100 rounded-full p-2' onClick={toggleSearch}>
                                <Image aria-label='close menu icon' className='w-[18px] h-[18px]' src={cross} width={20} height={20} alt="close menu icon" />
                            </button>
                            <input aria-label='search input' ref={inputRef} onChange={(e) => handelSearch(e.target.value)} type="text" placeholder='search...' className='outline-none shadow-md border rounded-lg p-2' />
                            <div>
                                <ul>
                                    {
                                        searchData.slice(0, 8).map((item) => (
                                            <li key={item.news_id} className='shadow pt-3 pb-1 md:ps-4 ps-0 '>
                                                <Link aria-label='link to detail page' href={`/${encodeURIComponent(item?.category)}/${encodeURIComponent(item?.title.replace(/[^a-zA-Z0-9]/g, '-').toLowerCase().replace(/-+/g, '-').replace(/-+$/, ''))}`} onClick={toggleSearch}>
                                                    {item.title}
                                                </Link>
                                            </li>
                                        ))
                                    }

                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Header;
