import { Link } from 'react-router-dom'
import headset2 from '../assets/images/head-set-2.png'
import headphone from '../assets/images/headphone.png'
import { IoIosArrowForward } from "react-icons/io";
import Typed from 'react-typed';
// import AllProduct from './components/AllProduct'
import products from './Product'
import { useState } from 'react';
import smilyLady from '../assets/images/smily-Lady.png'

function Home({ search, setSearch, showSignUp, setShowSignUp }) {
    let [myProduct, setMyProduct] = useState(products)
    // Create a set to keep track of unique categories
    let uniqueCategories = new Set();

    // Filter the items to get only one item per category
    let filteredItems = myProduct.filter((item) => {
        if (!uniqueCategories.has(item.category)) {
            uniqueCategories.add(item.category);
            return true;
        }
        return false;
    });
    return (
        <div>
            <div className='mt-[83px] p-2 fixed top-0 z-20 w-full bg-[#0c1012]'>
                <div className='max-w-[2000px] md:px-5 px-2 md:max-w-[1250px] mx-auto flex items-center justify-center'>
                    <input value={search} onChange={(e) => setSearch(e.target.value)} placeholder='search for product' className="w-full  outline-none bg-[#fff] rounded-md py-1 px-3" type="text" />
                </div>
            </div>
            <section className={showSignUp ? 'filter blur-[5px] brightness-[0.7]' : ''}>
                <div className='mt-[110px]'>
                    <div className='bg-[#0c1012] md:px-0 px-5  pt-5'>

                        <div className=' text-white hidden md:px-5 px-2 md:flex md:flex-row  justify-between items-center max-w-[2000px]  md:max-w-[1250px] mx-auto'>
                            <div className=''>
                                <p className='md:text-1xl pb-3 space-x-10 text-[15px] tracking-widest text-[#adbdbc]'>NEW PRODUCT</p>
                                <h1 className='md:text-5xl pb-3 text-2xl  font-extrabold'>XX99 MARK II GADGET</h1>
                                <div className='md:flex items-center py-3 hidden '>
                                    <p>Shop with us today  </p>
                                    <Typed className='text-[#b4e900] ml-2 ' strings={['For Exclusive Deal', 'and Enjoy Quality Product']} typeSpeed={100} backSpeed={20} loop />
                                </div>
                                <p className='pb-3 text-[#adbdbc]'>Discover the perfect blend of style and comfort with our latest collection</p>
                                <div className='flex items-center justify-center'>
                                    <button className=' bg-[#192123]   font-bold md:flex items-center text-[#b4e900] animate-ping justify-between hidden md:text2xl text-1xl px-4 py-2 my-4 w-[40%] rounded-sm'>ORDER NOW
                                        <IoIosArrowForward className='text-[#fff]'></IoIosArrowForward >
                                    </button>
                                </div>
                            </div>
                            <div className=''>
                                <img className=' w-[100%] h-[100%] ' src={headset2} alt="" />

                            </div>
                        </div>

                        <div className=' text-white relative md:hidden w-full'>
                            <div className='absolute w-full top-36 left-[50%] translate-x-[-50%] translate-y-[-50%] flex flex-col items-center justify-items-center z-10 text-center'>
                                <p className='md:text-1xl pb-3 space-x-10 text-[15px] tracking-widest text-gray-600'>NEW PRODUCT</p>
                                <h1 className='md:text-5xl pb-3 text-2xl  font-extrabold'>XX99 MARK II GADGET</h1>
                                <p className='pb-3'>Discover the perfect blend of style and comfort with our latest collection</p>
                            </div>
                            <div className=''>
                                <img className=' w-[100%] top ' src={headset2} alt="" />
                                <div className=' items-center justify-center flex mt-[-20px]'>
                                    <p className='text-[12px]'>Shop with us today  </p>
                                    <Typed className='text-[#b4e900] ml-2' strings={['For Exclusive Deal', 'and Enjoy Quality Product']} typeSpeed={100} backSpeed={50} loop />
                                </div>
                                <div className='  flex items-center justify-center pb-4'>
                                    <button className='bg-[#192123] text-[#b4e900] flex items-center justify-between   text-[14px] px-2 py-1 w-[40%] rounded-sm'>EXPLORE
                                        <IoIosArrowForward className='text-[#b4e900]'></IoIosArrowForward ></button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div>
                        <div className='grid grid-cols-2 gap-10 md:grid-cols-4 px-5 mt-[80px] max-w-[1250px] mx-auto'>
                            {filteredItems.filter((product) => {
                                return search.toLowerCase() === '' ? product : product.name.toLowerCase().includes(search)
                            }).map((product) => {
                                let { id, image, name } = product

                                return (
                                    <div>
                                        <Link to={id}>
                                            <div key={id} className='flex flex-col items-center h-21 md:h-32 relative mb-10 justify-center shadow-sm hover:bg-gray-200 ease-in-out duration-500 bg-gray-100'>
                                                <div>
                                                    <img className='w-[100px] md:w-[130px] absolute top-[-7%] left-[50%] translate-x-[-50%] translate-y-[-50%]' src={image} alt="" />
                                                </div>

                                                <div className='mt-16 flex flex-col'>
                                                    <h1 className='text-[#000300] md:text-1xl text-[13px] font-semibold md:font-bolder'>{name}</h1>
                                                    <div className='flex items-center justify-center gap-4 mt-1'>
                                                        <p className='text-gray-700 text-sm'>SHOP</p>
                                                        <IoIosArrowForward className='text-[#b4e900]'></IoIosArrowForward >
                                                    </div>
                                                </div>
                                            </div>
                                        </Link>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div >
            </section>
            <section className={showSignUp ? 'blur-[5px] brightness-[0.7]' : ''}>
                <div className='md:px-5 px-2'>
                    <div className='bg-[#0c1012] rounded-md py-2 max-w-[1250px] my-4 mx-auto md:px-5 px-2'>
                        <div className='flex md:flex-row flex-col justify-between items-center'>
                            <div className='md:block flex items-center justify-center border border-[#b4e900]'>
                                <img className='md:w-[70%] w-[full]' src={smilyLady} alt="" />
                            </div>
                            <div className='p-4'>
                                <h1 className='text-[#b4e900] animate-pulse md:text-3xl text-1xl py-2 md:font-extrabold font-medium'>XX99</h1>
                                <p className='text-[#737e80] md:text-2xl text-[14px] py-2 md:font-extrabold font-medium'>Upgrade to premium product that are phenomenally built to deliver truly remarkable sound</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    )
}

export default Home
