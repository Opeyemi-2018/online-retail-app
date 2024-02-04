import React, { useState } from 'react'
import products from './Product'
import { Link } from 'react-router-dom'
import { IoIosArrowForward } from "react-icons/io";
import { FaArrowLeft } from "react-icons/fa6";

function Gadget() {
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
            <div className='mt-[200px] max-w-[1250px]  px-5 mx-auto'>
                <h1 className=' md:font-bold font-semibold md:text-3xl animate-bounce text-[#192123] text-1xl'>Available Gadget</h1>
                <div className='grid grid-cols-2 md:gap-20 gap-14 md:grid-cols-4 mt-[100px] '>
                    {filteredGadget.map((items) => {
                        let { id, name, image } = items
                        return (
                            <div>
                                <Link to={id}>
                                    <div key={id} className='flex  flex-col items-center h-21 md:h-32 relative mb-10 justify-center shadow-sm hover:bg-gray-200 ease-in-out duration-500 bg-gray-100'>
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
        </div>
    )
}

export default Gadget
