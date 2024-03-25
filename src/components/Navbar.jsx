
import { IoClose } from "react-icons/io5";
import { FaBars } from 'react-icons/fa';
import { IoCart } from "react-icons/io5";
import { NavLink, Outlet, Link } from "react-router-dom"
import { useState } from "react";
import { IoIosArrowForward } from "react-icons/io";
import { FaSignInAlt } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";
import { MdAccountCircle } from "react-icons/md"
import SignForm from './SignForm';
// import HomeSearch from "./HomeSearch";

function Navbar({ nav, setNav, showSignUp, setShowSignUp, cartCount, setCartCount, carts, setCart, search, setSearch }) {

    let handleNav = () => {
        setNav(!nav)
    }

    return (
        <div>
            <div className="md:bg-[#0c1012] bg-[#0c1012] w-full z-30 pb-1 fixed top-0  ">
                <div className="text-white   border-b border-[#b4e900] max-w-[1250px]  mt-4   h-16 md:px-5 px-2 mx-auto flex justify-between items-center">
                    <NavLink to={'/'} className="md:basis-1/4 basis-1/2 text-[#b4e900] animate-pulse inline md:text-3xl text-2xl font-extrabold">XX99</NavLink>
                    <nav className="hidden md:flex">
                        <NavLink to={'/'} className={({ isActive }) => isActive ? 'activeStyle mr-10  hover:text-[#737e80] ease-in-out duration-500' : 'mr-10  hover:text-[#737e80] ease-in-out duration-500'}>HOME</NavLink>
                        <NavLink to={'/AllProduct'} className={({ isActive }) => isActive ? 'activeStyle mr-10  hover:text-[#737e80] ease-in-out duration-500' : 'mr-10  hover:text-[#737e80] ease-in-out duration-500'}>PRODUCTS</NavLink>
                        <NavLink to={'/speaker'} className={({ isActive }) => isActive ? 'activeStyle mr-10  hover:text-[#737e80] ease-in-out duration-500' : 'mr-10  hover:text-[#737e80] ease-in-out duration-500'}>SPEAKER</NavLink>
                        <NavLink to={'/gadget'} className={({ isActive }) => isActive ? 'activeStyle mr-10  hover:text-[#737e80] ease-in-out duration-500' : 'mr-10  hover:text-[#737e80] ease-in-out duration-500'}>HEADPHONE</NavLink>
                        <NavLink className='mr-10  hover:text-[#737e80] ease-in-out duration-500'>CAMERA</NavLink>
                    </nav>
                    {/* 'mr-10  hover:text-[#737e80] ease-in-out duration-500' */}

                    <div>
                        <button onClick={() => setShowSignUp(!showSignUp)} className='flex items-center justify-center md:gap-1 bg-[#fff]  text-[#192123] font-medium py-[1px] px-1 rounded-sm md:text-[13px] sl:text-1xl  hover:text-[#192123] ease-in-out duration-500'>
                            <MdAccountCircle className='text-[#192123]' size={21} /> <p className="md:flex hidden">Account</p> <IoIosArrowDown className={showSignUp ? 'flex  transition rotate-180' : 'flex  transition rotate'} size={21} /> </button>
                    </div>

                    <NavLink to={'/cart'}>
                        <div className='relative'>
                            <p className='absolute md:left-4 left-3 md:bottom-4 bottom-2 border border-white text-[#fff] bg-[#0c1012]  rounded-full h-full w-full  flex items-center justify-center whitespace-wrap'>{carts.length}</p>
                            <IoCart className='  hover:text-[#b4e900] md:text-[40px] text-[20px] ease-in-out duration-500' />
                        </div>
                    </NavLink>
                    <div onClick={handleNav} className="block md:hidden  ">
                        {nav ? <IoClose size={25} /> : <FaBars size={25} />}
                    </div>

                    <div className={nav ? "fixed z-50 md:hidden top-0 left-0 h-full w-[60%] border-r border-gray-900 bg-[#0c1012] ease-in-out duration-500" : 'fixed left-[-100%]'}>
                        <h1 className="w-[50%] text-[#b4e900] animate-pulse m-5 text-2xl font-extrabold">XX99</h1>
                        <nav className="">
                            <NavLink onClick={handleNav} to={'.'} className='block m-5 border-b border-gray-900'>HOME</NavLink>
                            <NavLink onClick={handleNav} to={'/AllProduct'} className='block m-5 border-b border-gray-900'>PRODUCTS</NavLink>
                            <NavLink onClick={handleNav} to={'/wears'} className='block m-5 border-b border-gray-900'>SPEAKER</NavLink>
                            <NavLink onClick={handleNav} to={'/gadget'} className='block m-5 border-b border-gray-900'>HEADPHONE</NavLink>
                            <NavLink onClick={handleNav} className='block m-5 border-b border-gray-900'>CAMERA</NavLink>
                        </nav>

                        <div className="m-5">
                            <NavLink onClick={handleNav} to={'/cart'} className='w-40 bg-[#192123] text-[#b4e900] flex justify-between items-center font-medium py-[2px] px-2 rounded-sm text-sm'>Check Order <IoCart className='text-[#fff]'></IoCart > </NavLink>
                        </div>

                    </div>

                </div>
                <SignForm showSignUp={showSignUp} />
            </div>
            <Outlet />
        </div>
    )
}

export default Navbar
