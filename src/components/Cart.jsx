import { Link } from "react-router-dom"
import { FaArrowLeft } from "react-icons/fa6";
import { RiDeleteBin6Line } from "react-icons/ri";
import { IoCart } from "react-icons/io5";
import { useEffect, useState } from "react";

function Cart({ carts, setCart, showSignUp, cartCount, setCartCount }) {
    let [deleteMsg, setDeleteMsg] = useState(false)

    let removeProduct = (id) => {
        setDeleteMsg(!deleteMsg)
        setTimeout(() => {
            setDeleteMsg(deleteMsg)
        }, 3000)
        let selectedProduct = carts.filter((cart) => cart.id !== id)
        setCart(selectedProduct)
    }

    let removeAllCart = () => {
        setDeleteMsg(!deleteMsg)
        setTimeout(() => {
            setDeleteMsg(deleteMsg)
        }, 3000)
        setCart([])
    }


    return (
        <div>
            {deleteMsg && (
                <div className="bg-red-400 top-0 ease-in-out duration-500 z-30 md:p-4 p-2 w-full text-white font-medium fixed">
                    <p className="text-center md:text-[14px] text-[12px]">PRODUCT SUCCESSFULLY  DELETED</p>
                </div>
            )}
            <div className={showSignUp ? 'bg-gray-100 blur filter blur-[5px] brightness-[0.7]' : 'bg-gray-100'}>
                <div className="py-1 mt-[140px] fixed top-[-10%] bg-[#0c1012] z-20 w-full">
                    <div className="max-w-[1250px] md:px-5 px-2 mx-auto">
                        <Link to='..' relative="path"><FaArrowLeft className='  text-[#fff] md:text-[25px] text-[20px] inline ' /></Link>
                    </div>
                </div>

                {carts.length === 0 ?
                    <div className="flex items-center  justify-center mt-[50px] p-2 h-screen">
                        <div>
                            <div className="bg-white rounded-full md:h-40 md:w-40 w-20 h-20  mx-auto flex items-center justify-center p-4 ">
                                <IoCart className={showSignUp ? 'md:text-[80px] text-[50px]  text-[#192123] filter brightness-[7.0] blur-5 ' : 'md:text-[80px] text-[50px]  text-[#192123] animate-spin'} />
                            </div>
                            <h1 className="text-[17px] text-center md:text-[22px]">Your cart is empty!</h1>
                            <p className="text-[17px] text-center md:text-[22px]">Browse our category and discover our best deals!</p>
                            <Link to={'/'}><button className={showSignUp ? 'bg-[#192123] rounded-sm my-4 w-full md:p-1 text-[#b4e900] text-[18px] md:text-[20px]' : 'animate-bounce bg-[#192123] rounded-sm my-4 w-full md:p-1 text-[#b4e900] text-[18px] md:text-[20px]'}>START SHOPPING</button> </Link>

                        </div>
                    </div>
                    :

                    <div className="mt-[160px] py-5 rel ">
                        <div className='max-w-[1250px] md:px-5 px-2 mx-auto'>
                            <div className="flex md:flex-row flex-col flex-col-reverse gap-4 justify-between">
                                <div className="bg-white md:p-8 p-4 w-full">
                                    <h1 className="md:text-xl md:font-medium font-normal">CHECKOUT</h1>

                                    <form>
                                        <div className="my-[20px]">
                                            <h2 className="my-1 text-[#d36600] md:font-semibold font-medium">BILLING DETAILS</h2>
                                            <div className="grid gap-4 md:grid-cols-2">
                                                <div>
                                                    <label>Name</label>
                                                    <input className="border w-full rounded-sm p-[1px]  outline-none" type="text" />
                                                </div>
                                                <div>
                                                    <label>Email Address</label>
                                                    <input className="border w-full rounded-sm outline-none" type="email" />
                                                </div>
                                                <div>
                                                    <label>Phone Number</label>
                                                    <input className="border w-full rounded-sm outline-none" type="number" />
                                                </div>
                                            </div>
                                        </div>


                                        <div>
                                            <h2 className="my-1 text-[#d36600] md:font-semibold font-medium">SHIPPING INFO</h2>
                                            <div className="grid gap-4 md:grid-cols-2">
                                                <div className="col-span-2">
                                                    <label>Address</label>
                                                    <input className="border w-full rounded-sm p-[1px]  outline-none" type="text" />
                                                </div>
                                                <div>
                                                    <label>Zip Code</label>
                                                    <input className="border w-full rounded-sm outline-none" type="number" />
                                                </div>
                                                <div>
                                                    <label>City</label>
                                                    <input className="border w-full rounded-sm outline-none" type="text" />
                                                </div>
                                                <div>
                                                    <label>Country</label>
                                                    <input className="border w-full rounded-sm outline-none" type="text" />
                                                </div>
                                            </div>
                                        </div>
                                    </form>

                                </div>
                                <div className="bg-white md:p-8 p-4">
                                    <h1 className="md:text-xl md:font-medium font-normal">SUMMARY</h1>
                                    {carts.map((cart) => {
                                        let { id, image, name, price } = cart;
                                        return (
                                            <div key={id} className="">
                                                <div className='flex my-5 justify-between items-center'>
                                                    <div className="flex gap-4">
                                                        <img className='p-2 rounded-md object-cover  bg-gray-200 md:w-[20%] w-20' src={image} alt={name} />
                                                        <div>
                                                            <h1 className="font-medium md:text-[14px] text-[11px]">{name}</h1>
                                                            <h1 className="font-medium text-gray-500">{price}</h1>
                                                        </div>
                                                    </div>
                                                    <button onClick={() => removeProduct(id)} className="md:text-[12px] text-[11px] rounded-sm cursor-pointer  hover:bg-[#b72522] hover:text-white ease-in-out duration-500 flex p-[3px] justify-center p-[px] font-semibold gap-1 text-[#b72522]">
                                                        <RiDeleteBin6Line className='hover:bg-[#b72522]  hover:text-white' size={18} />REMOVE</button>
                                                </div>
                                            </div>
                                        )
                                    })}
                                    <div className="flex items-center justify-end mb-1">
                                        <button onClick={removeAllCart} className=" bg-[#b72522] w-32 text-white p-1 rounded-sm text-[11px] font-normal md:font-medium">Remove All</button>
                                    </div>

                                    <button className="rounded-sm bg-[#d36600] text-white font-normal mt-2 md:font-medium w-full p-2 text-[13px]">CONTINUE & PAY</button>
                                </div>
                            </div>
                        </div>
                    </div>

                }
            </div>
        </div>
    )
}

export default Cart
