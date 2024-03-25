import { Link } from "react-router-dom"
import { FaArrowLeft } from "react-icons/fa6";
import { RiDeleteBin6Line } from "react-icons/ri";
import { IoCart } from "react-icons/io5";
import { useEffect, useState } from "react";
import { FaPlus } from "react-icons/fa";
import { FaMinus } from "react-icons/fa6"

import { PiWarningCircleLight } from "react-icons/pi"

function Cart({ carts, setCart, itemQuantity, setItemQuantity, showSignUp }) {
    let [deleteMsg, setDeleteMsg] = useState(false)
    let [notification, setNotification] = useState(false)
    let [pay, setPay] = useState(false)
    let showNotification = (id) => {
        setTimeout(() => {
            setDeleteMsg(deleteMsg)
        }, 3000)
        let selectedProduct = carts.filter((cart) => cart.id !== id)
        setCart(selectedProduct)
    }

    let handleNotification = () => {
        setNotification(!notification)
    }

    let removeAllCart = () => {
        setNotification(!notification)
        setDeleteMsg(!deleteMsg)
        setTimeout(() => {
            setDeleteMsg(deleteMsg)
        }, 3000)
        setCart([])
    }

    let cancel = () => {
        setNotification(!notification)
    }



    let decreaseQuantity = () => {

    }

    let increaseQuantity = (id) => {
        // console.log(typeof itemQuantity);
        // // Find the index of the item in the carts array
        // const index = carts.findIndex(cart => cart.id === id);
        // // Make a copy of the carts array to avoid mutating state directly
        // const updatedCarts = [...carts];
        // // Increase the quantity of the item at the found index
        // updatedCarts[index].itemQuantity += 1;
        // // Update the state with the updated carts array
        // setCart(updatedCarts);
        setItemQuan

    }





    let handlePayment = (e) => {
        e.preventDefault()
    }

    return (
        <div>
            {notification && (<div className="bg-gray-100 p-4 md:w-[40%] w-[55%] rounded-md fixed transform -translate-x-1/2 -translate-y-1/2 md:top-[50%] top-[40%] left-[50%]">
                <div className="flex items-center justify-center flex-col">
                    <div><PiWarningCircleLight size={30} /></div>
                    <div className="my-3 md:text-[20px] text-[16px]">Are you sure you want to remove all  items</div>
                    <div className="flex justify-between items-center gap-8 mt-2">
                        <div>
                            <button onClick={removeAllCart} className="bg-[#b72522] text-white hover:bg-red-500 py-1 md:px-2 px-2 rounded-md ease-in-out duration-500 ">Yes i'm sure</button>
                        </div>
                        <div>
                            <button onClick={cancel} className="border border-[#0c1012] py-1 md:px-2 px-2 rounded-md ease-in-out duration-500 hover:bg-slate-200 ">No, cancel</button>
                        </div>
                    </div>
                </div>
            </div>)}
            {deleteMsg && (
                <div className="bg-red-400 top-0 ease-in-out duration-500 z-30 md:p-4 p-2 w-full text-white font-medium fixed">
                    <p className="text-center md:text-[14px] text-[12px]">PRODUCT SUCCESSFULLY  REMOVED</p>
                </div>
            )}
            <div className={showSignUp ? 'bg-gray-100 blur filter blur-[5px] brightness-[0.7]' : 'bg-gray-100'}>
                <div className="py-1 mt-[140px] fixed top-[-10%] bg-[#0c1012] z-20 w-full">
                    <div className="max-w-[1250px] md:px-5 px-2 mx-auto">
                        <Link to='..' relative="path"><FaArrowLeft className='  text-[#fff] md:text-[25px] text-[20px] inline ' /></Link>
                    </div>
                </div>

                {carts.length === 0 ?
                    <div className="flex items-center  justify-center  p-2 h-screen">
                        <div>
                            <div className="bg-white rounded-full md:h-40 md:w-40 w-20 h-20  mx-auto flex items-center justify-center p-4 ">
                                <IoCart className={showSignUp ? 'md:text-[80px] text-[50px]  text-[#192123] filter brightness-[7.0] blur-5 ' : 'md:text-[80px] text-[50px]  text-[#192123] animate-spin'} />
                            </div>
                            <h1 className="text-[17px] text-center md:text-[22px]">Your cart is empty!</h1>
                            <p className="text-[17px] text-center md:text-[22px]">Browse our category and discover our best deals!</p>
                            <Link to={'/Allproduct'}><button className={showSignUp ? 'bg-[#192123] rounded-sm my-4 w-full md:p-1 text-[#b4e900] text-[18px] md:text-[20px]' : 'animate-bounce bg-[#192123] rounded-sm my-4 w-full md:p-1 text-[#b4e900] text-[18px] md:text-[20px]'}>START SHOPPING</button> </Link>

                        </div>
                    </div>
                    :
                    <div className="md:mt-[110px] mt-[80px] py-5 rel ">
                        <div className='max-w-[1250px] md:px-5 px-2 mx-auto'>
                            <div className="flex md:flex-row flex-col flex-col-reverse gap-4 justify-between">
                                {pay && <div className="bg-white w-full md:p-8 p-4">
                                    <h1 className="md:text-xl md:font-medium font-normal">CHECKOUT</h1>

                                    <form onSubmit={handlePayment}>
                                        <div className="my-[20px]">
                                            <h2 className="my-1 text-[#143f3c] md:font-semibold font-medium">BILLING DETAILS</h2>
                                            <div className="grid gap-4 md:grid-cols-2">
                                                <div>
                                                    <label>Name</label>
                                                    <input className="border border-gray-400 w-full rounded-sm p-[1px]  outline-none" type="text" />
                                                </div>
                                                <div>
                                                    <label>Email Address</label>
                                                    <input className="border border-gray-400 w-full rounded-sm outline-none" type="email" />
                                                </div>
                                                <div>
                                                    <label>Phone Number</label>
                                                    <input className="border border-gray-400 w-full rounded-sm outline-none" type="number" />
                                                </div>
                                            </div>
                                        </div>


                                        <div>
                                            <h2 className="my-1 text-[#143f3c] md:font-semibold font-medium">SHIPPING INFO</h2>
                                            <div className="grid gap-4 md:grid-cols-2">
                                                <div className="col-span-2">
                                                    <label>Address</label>
                                                    <input className="border border-gray-400 w-full rounded-sm p-[1px]  outline-none" type="text" />
                                                </div>
                                                <div>
                                                    <label>Zip Code</label>
                                                    <input className="border border-gray-400 w-full rounded-sm outline-none" type="number" />
                                                </div>
                                                <div>
                                                    <label>City</label>
                                                    <input className="border border-gray-400 w-full rounded-sm outline-none" type="text" />
                                                </div>
                                                <div>
                                                    <label>Country</label>
                                                    <input className="border border-gray-400 w-full rounded-sm outline-none" type="text" />
                                                </div>
                                            </div>
                                        </div>

                                        <div className="my-[20px]">
                                            <h2 className="my-1 text-[#143f3c] md:font-semibold font-medium">PAYMENT DETAILS</h2>
                                            <h3 className="py-1">payment method</h3>
                                            <div className="flex justify-between items-center">
                                                <button className="border border-orange-800 md:mb-0 mb-2 rounded-md  px-4 flex items-center justify-between  font-semibold text-gray-700 w-[40%] whitespace-nowrap md:text-[18px] text-[14px]"> e-Money
                                                    <input className="form-radio  h-5 w-5 accent-orange-700" name="radio-buttons" type="radio" />
                                                </button>

                                                <button className="border border-orange-800 rounded-md  px-4 flex  items-center justify-between  font-semibold text-gray-700 w-[40%] whitespace-nowrap md:text-[18px] text-[14px]"> cash on delivery
                                                    <input className="form-radio h-5 w-5 accent-orange-700" name="radio-buttons" type="radio" />
                                                </button>
                                            </div>

                                            <div className="md:flex md:flex-row flex-col gap-4 items-center mt-3">
                                                <div>
                                                    <label>e-money number</label>
                                                    <input className="border border-gray-400 w-full rounded-sm outline-none" type="number" />
                                                </div>
                                                <div>
                                                    <label>e-money-pin</label>
                                                    <input className="border border-gray-400 w-full rounded-sm outline-nonse" type="text" />
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                </div>}

                                <div className={pay ? "w-full mx-auto bg-white md:p-8 p-4" : "w-full md:w-[700px] mx-auto bg-white md:p-8 p-4"}>
                                    <h1 className="md:text-xl md:font-medium  font-normal">SUMMARY</h1>
                                    {carts.map((cart) => {
                                        let { id, image, name, price, itemQuantity } = cart;
                                        return (
                                            <div key={id} className="border-b-gray-500">
                                                <div className='flex my-5 justify-between   items-center'>
                                                    <div>
                                                        <div className="flex gap-4">
                                                            <img className='p-2 rounded-md object-cover  bg-gray-200 md:w-[20%] w-20' src={image} alt={name} />
                                                            <div>
                                                                <h1 className="font-medium md:text-[14px] text-[11px]">{name}</h1>
                                                                <h1 className="font-medium text-gray-500">$ {price}</h1>
                                                                <div className="flex gap-6 items-center mt-2">
                                                                    <button onClick={decreaseQuantity} className="bg-[#192123] py-[3px] px-[6px] text-[12px] rounded-sm text-white"><FaMinus /></button>
                                                                    <button onClick={increaseQuantity} className="bg-[#192123] py-[3px] px-[6px] text-[12px] rounded-sm text-white"><FaPlus /></button>
                                                                </div>
                                                            </div>
                                                        </div>

                                                    </div>
                                                    <div>
                                                        <p className="font-semibold  text-gray-600">X{itemQuantity}</p>
                                                        <button onClick={() => showNotification(id)} className="md:text-[12px] text-[11px] rounded-sm cursor-pointer  hover:bg-red-100 hover:text-[#b72522] ease-in-out duration-500 flex p-[3px] justify-center p-[px] font-semibold gap-1 text-[#b72522]">
                                                            <RiDeleteBin6Line className='' size={18} />REMOVE</button>
                                                    </div>
                                                </div>
                                                <hr />
                                            </div>
                                        )
                                    })}
                                    {carts.length > 1 ?
                                        <div className="flex items-center justify-end mt-2 mb-1">
                                            <button onClick={handleNotification} className="ease-in-out duration-500  bg-[#b72522] hover:bg-red-600 w-32 text-white p-1 rounded-sm text-[11px] font-normal md:font-medium">Remove All</button>
                                        </div>
                                        :
                                        <div></div>
                                    }

                                    {!pay && <button onClick={() => setPay(!pay)} className="rounded-sm bg-[#143f3c] text-white font-normal mt-2 md:font-medium w-full p-2 text-[13px]">CONTINUE & PAY</button>}
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
