import { Link } from 'react-router-dom'
import headset2 from '../assets/images/head-set-2.png'
import speaker from '../assets/images/speaker-1.png'
import { IoIosArrowForward } from "react-icons/io";
import { ReactTyped } from "react-typed";
import woman from '../assets/images/woman.png'
import speaker4 from '../assets/images/speaker-4.png'

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

                                <ReactTyped className='text-orange-700  ' strings={['For Exclusive Deal', 'and Enjoy Quality Product']} typeSpeed={100} backSpeed={20} loop />
                            </div>
                            <p className='pb-3 text-[#adbdbc]'>Discover the perfect blend of style and comfort with our latest collection</p>
                            <div className=''>
                                <Link to={'/AllProduct'} style={{ letterSpacing: '5px' }} className=' bg-orange-700 font-bold md:flex items-center text-[#fff]  justify-between hidden md:text2xl text-1xl px-4 py-2 my-4 w-[40%] rounded-sm'>EXPLORE
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
                                <ReactTyped className='text-orange-700 ml-2 whitespace-nowrap' strings={['For Exclusive Deal', 'and Enjoy Quality Product']} typeSpeed={100} backSpeed={50} loop />
                            </div>
                            <div className='  flex items-center justify-center pb-4 mt-6'>
                                <Link to={'/AllProduct'} className='bg-orange-700 text-[#fff] flex items-center justify-between   text-[14px] px-2 py-1 w-[40%] rounded-sm'>EXPLORE
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
                            <div className='basis-[40%] '>
                                <img className='w-full block' src={woman} alt="" />
                            </div>
                            <div className='p-4 basis-[60%]'>
                                <h1 className='text-orange-700 animate-pulse md:text-3xl text-1xl py-2 md:font-extrabold font-medium'>XX99</h1>
                                <p className='text-[#000] md:text-2xl text-[14px] md:font-extrabold font-medium'>shop our topnotch headset and experience new sound wave</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <div className=' py-2 md:px-5 px-2 '>
                    <div className='shadow-lg bg-orange-700 rounded-md  md:pt-4 md:py-0 py-4  lg:px-32 md:px-10  px-4   flex sm:flex-row flex-col  justify-between items-center '>
                        <div>
                            <img className='md:w-full w-[85%] object-cover ' src={speaker4} alt="" />
                        </div>
                        <div className='text-[#fff] pt-4 md:w-[50%] mx-auto'>
                            <h1 className='md:font-bold py-1 font-semibold mx-auto md:text-3xl sm:text-left text-center text-[24px] '>zx9 speaker</h1>
                            <p className='py-4 md:text-[20px] text-[17px] sm:text-left text-center'>Upgrade to premium speaker today they are phenomenally built to deliver truly remarkable sound</p>
                            <Link to={'/AllProduct'} style={{ letterSpacing: '4px' }} className='text-[#fff] block text-center bg-[#000]  md:mt-0 mt-2 sm:w-full w-[50%] mx-auto  md:text-[16px] text-[11px] md:p-2 p-[7px]  animate-bounce'>CHECK IT OUT</Link>
                        </div>
                    </div>
                </div>
            </section>
            {/* </section> */}
        </div>
    )
}

export default Home
// text-[#f57247]