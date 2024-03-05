import { useState } from "react"
import { useParams } from "react-router-dom"
import products from "./Product"
import { FaPlus } from "react-icons/fa";
import { FaMinus } from "react-icons/fa6"
import { IoCart } from "react-icons/io5";

function WearsInfo({ carts, setCart, showSignUp, cartQuantity, setCartQuantity, showSuccessMsg, setShowSuccessMsg }) {

    let addToCart = () => {
        setCart([...carts, { image: image, name: name, price: price }])
        setShowSuccessMsg(!showSuccessMsg)
        setTimeout(() => {
            setShowSuccessMsg(showSuccessMsg)
        }, 3000)
    }

    let { id } = useParams()
    let [wears, setWears] = useState(products)

    let wearsInfo = wears.find((wear) => wear.id === id)
    let { image, name, info, price } = wearsInfo
    return (
        <div className={showSignUp ? 'filter blur-[5px] brightness-[0.7]' : ''}>
            {showSuccessMsg && (
                <div className="bg-[#fff] top-0 ease-in-out duration-500 z-30 md:p-4 p-2 w-full text-[#0c1012] font-medium fixed">
                    <p className="text-center md:text-[14px] text-[12px]">PRODUCT SUCCESSFULLY ADDED</p>
                </div>
            )}
            <div className="max-w-[1250px] mx-auto px-5 mb-4 mt-[170px]">
                {/* <Link to={'..'} relative="path" ><FaArrowLeft className='text-gray-600 inline' size={30} /></Link> */}
                <div className="flex justify-between  md:flex-row  flex-col gap-10 items-center">                                       
                    <div className="flex items-center justify-center ">
                        <img className="w-[100%]   object-cover " src={image} alt="" />
                    </div>

                    <div className="">
                        <h1 className="md:text-2xl text-1xl md:font-bold font-semibold">{name}</h1>
                        <p className="md:text-[17px] text-gray-600 md:py-4 py-1">{info}</p>
                        <p className="font-bold ">${price}</p>

                        <div className="flex gap-10 items-center mt-2 md:mt-6">
                            <div className=" flex gap-6 items-center ">
                                <button className="bg-[#192123] p-1 text-white"> <FaPlus /></button>
                                <p className="font-semibold"></p>
                                <button className="bg-[#192123] p-1 text-white"> <FaMinus /></button>
                            </div>  
                            <div className="flex-1">
                                <button onClick={addToCart} className="md:w-[50%]  w-full flex items-center justify-center gap-8 rounded-sm bg-[#b4e900] p-2 text-[#192123] md:text-[15px] text-[12px] font-medium">ADD TO CART <IoCart /> </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WearsInfo
