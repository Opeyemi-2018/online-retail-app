import { Link } from 'react-router-dom'
import headset2 from '../assets/images/head-set-2.png'
import headphone from '../assets/images/headphone.png'
import speaker from '../assets/images/speaker-1.png'
import { IoIosArrowForward } from "react-icons/io";
import { ReactTyped } from "react-typed";
import { IoCart } from "react-icons/io5";

import products from './Product'
import { useState } from 'react';
import woman from '../assets/images/woman.png'

function Home() {
    return (
        <div>

            {/* <section className={showSignUp ? 'filter blur-[5px] brightness-[0.7]' : ''}> */}
            <div className='mt-[80px]'>
                <div className='bg-[#000] md:px-3 px-5  pt-5'>

                    <div className='text-white hidden md:px-0 px-2 sm:flex sm:flex-row  justify-between items-center max-w-[2000px]  md:max-w-[1250px] mx-auto'>
                        <div className=''>
                            <p className='md:text-1xl pb-3 space-x-10 text-[15px] tracking-widest text-[#adbdbc]'>NEW PRODUCT</p>
                            <h1 className='md:text-5xl pb-3 text-2xl  font-extrabold'>XX99 MARK II GADGET</h1>
                            <div className='md:flex items-center py-3 hidden '>
                                <p>Shop with us today  </p>

                                <ReactTyped className='text-[#f57247] ml-2 ' strings={['For Exclusive Deal', 'and Enjoy Quality Product']} typeSpeed={100} backSpeed={20} loop />
                            </div>
                            <p className='pb-3 text-[#adbdbc]'>Discover the perfect blend of style and comfort with our latest collection</p>
                            <div className=''>
                                <Link to={'/AllProduct'} style={{ letterSpacing: '5px' }} className=' bg-[#f57247] font-bold md:flex items-center text-[#fff]  justify-between hidden md:text2xl text-1xl px-4 py-2 my-4 w-[40%] rounded-sm'>EXPLORE
                                    <IoIosArrowForward className='text-[#fff]'></IoIosArrowForward >
                                </Link>
                            </div>
                        </div>
                        <div className=''>
                            <img className=' w-[100%] h-[100%] ' src={headset2} alt="" />
                        </div>
                    </div>

                    <div className=' text-white relative sm:hidden w-full'>
                        <div className='absolute w-full top-36 left-[50%] translate-x-[-50%] translate-y-[-50%] flex flex-col items-center justify-items-center z-10 text-center'>
                            <p className='md:text-1xl pb-3 space-x-10 text-[15px] tracking-widest text-gray-600'>NEW PRODUCT</p>
                            <h1 className='md:text-5xl pb-3 text-2xl  font-extrabold'>XX99 MARK II GADGET</h1>
                            <p className='pb-3'>Discover the perfect blend of style and comfort with our latest collection</p>
                        </div>
                        <div className=''>
                            <img className=' w-[100%] top ' src={headset2} alt="" />
                            <div className=' items-center justify-center flex mt-[-30px]'>
                                <p className='text-[12px] whitespace-nowrap'>Shop with us today  </p>
                                <ReactTyped className='text-[#f57247] ml-2 whitespace-nowrap' strings={['For Exclusive Deal', 'and Enjoy Quality Product']} typeSpeed={100} backSpeed={50} loop />
                            </div>
                            <div className='  flex items-center justify-center pb-4 mt-6'>
                                <Link to={'/AllProduct'} className='bg-[#f57247] text-[#fff] flex items-center justify-between   text-[14px] px-2 py-1 w-[40%] rounded-sm'>EXPLORE
                                    <IoIosArrowForward className='text-[#fff]'></IoIosArrowForward ></Link>
                            </div>
                        </div>
                    </div>
                </div>


            </div >


            <section>
                <div className='md:px-5 my-2 px-2'>
                    <div className='shadow-lg bg-gray-200 md:rounded-md  lg:px-32 md:px-10  px-4 md:px-5 '>
                        <div className='flex  flex-row-reverse items-center'>
                            <div className=''>
                                <img className='w-[full]' src={woman} alt="" />
                            </div>
                            <div className='p-4 w-70'>
                                <h1 className='text-[#f57247]  animate-pulse md:text-3xl text-1xl py-2 md:font-extrabold font-medium'>XX99</h1>
                                <p className='text-[#000] md:text-2xl text-[14px] md:font-extrabold font-medium'>shop our topnotch headset and experience new sound wave</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <div className=' py-2 md:px-5 px-2 '>
                    <div className='shadow-lg bg-[#f57247]  rounded-md  pt-2 lg:px-32 md:px-10  px-4  mx-auto   flex  justify-between items-center '>
                        <div>
                            <img className='md:w-full w-[85%] object-cover ' src={speaker} alt="" />
                        </div>
                        <div className='text-[#fff]'>
                            <h1 className='md:font-bold font-semibold md:text-3xl text-[14px] text-left'>Upgrade to premium speaker today</h1>
                            <p className='md:py-4 md:text-[15px] text-[14px]'> they are phenomenally built to deliver truly remarkable sound</p>
                            <Link to={'/AllProduct'} style={{ letterSpacing: '4px' }} className='text-[#fff] block text-center bg-[#000] md:w-[50%] md:mt-0 mt-2  md:text-[16px] text-[11px] md:p-1 p-[4px]  animate-bounce'>CHECK IT OUT</Link>
                        </div>
                    </div>
                </div>
            </section>
            {/* </section> */}
        </div>
    )
}

export default Home
