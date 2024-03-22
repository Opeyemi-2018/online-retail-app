import React, { useState } from 'react'
import products from './Product'
import { Link } from 'react-router-dom'
import { FaArrowLeft } from "react-icons/fa6";
import { IoIosArrowForward } from "react-icons/io";

function Gadget({ showSignUp }) {
    let [gadgets, setGadgets] = useState(products)
    let filteredGadget = gadgets.filter((gadget) => gadget.type === 'gadget')
    let [gadgetSearch, setGadgetSearch] = useState('')
    return (
        <div>
            <div className='mt-[83px] p-2 fixed top-0 z-20 w-full bg-[#0c1012]'>
                <div className='max-w-[2000px] md:px-5 px-2 md:max-w-[1250px] mx-auto flex items-center justify-center'>
                    <input value={gadgetSearch} onChange={(e) => setGadgetSearch(e.target.value)} placeholder='search for product' className="w-full  outline-none bg-[#fff] rounded-md py-1 px-3" type="text" />
                </div>
            </div>
            <div className="-10 py-1 mt-[140px] fixed top-[-2%] bg-[#0c1012] z-20 w-full">
                <div className="max-w-[1250px] md:px-5 px-2 mx-auto">
                    <Link to='..' relative="path"><FaArrowLeft className='  text-[#fff] md:text-[25px]  text-[20px] inline ' /></Link>
                </div>
            </div>
            <div className={showSignUp ? 'filter blur-[5px] brightness-[0.7]' : ''}>
                <div className='mt-[200px] max-w-[1250px]  px-5 mx-auto'>
                    <h1 className=' md:font-bold font-semibold md:text-3xl animate-bounce text-[#192123] text-1xl'>Available Gadget</h1>
                    <div className='grid grid-cols-3 gap-10 md:grid-cols-6 mt-[10px] '>
                        {filteredGadget.filter((items) => {
                            return gadgetSearch.toLowerCase() === '' ? items : items.name.toLocaleLowerCase().includes(gadgetSearch)
                        }).map((items) => {
                            let { id, name, image } = items
                            return (
                                <div>
                                    <Link to={id}>
                                        <div key={id} className='flex flex-col px-4 shadow-lg 
                                           ease-in-out duration-500 border-gray-200 border border-r-1 border-l-0 border-b-0 border-t-0'>
                                            <div className='flex items-center justify-center h-[80px] md:h-[100px]'>
                                                <img className='max-w-[100%] max-h-[100%]' src={image} alt="" />
                                            </div>

                                            <div className='md:mt-7 mt-4 flex flex-col items-center'>
                                                <h1 className='text-[#000300] md:text-[17px] text-[13px] font-semibold md:font-bolder'>{name}</h1>
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
            </div>
        </div>
    )
}

export default Gadget
