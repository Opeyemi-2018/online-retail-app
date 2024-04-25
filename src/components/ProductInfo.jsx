import { useParams, Link } from "react-router-dom"
import AllProducts from "./Product"
import { useState } from "react"
import { FaPlus } from "react-icons/fa";
import { FaMinus } from "react-icons/fa6"
import { IoCart } from "react-icons/io5";
import { FaArrowLeft } from "react-icons/fa6";

function ProductInfo({ carts, setCart, itemQuantity, setItemQuantity, showSuccessMsg, setShowSuccessMsg }) {

    let addToCart = () => {
        // setCartCount(prevCount => prevCount + 1)
        setShowSuccessMsg(!showSuccessMsg)
        setTimeout(() => {
            setShowSuccessMsg(showSuccessMsg)
        }, 3000)

        setCart([...carts, { image, name, price, itemQuantity, id: new Date().getTime().toString() }])
        setItemQuantity(itemQuantity = 1)
    }

    let increaseQuantity = () => {
        setItemQuantity(prev => prev + 1)
    }

    let decreaseQuantity = () => {
        setItemQuantity(prev => prev - 1)
        if (itemQuantity === 1) {
            setItemQuantity(itemQuantity = 1)
        }
    }





    let [myProduct, setMyProduct] = useState(AllProducts)
    let { id } = useParams()

    let productInfo = myProduct.find((product) => product.id === id)
    let { image, name, info, price, category } = productInfo

    let sameCategory = myProduct.filter((prod) => prod.category === category)

    return (
        // <div className={showSignUp ? 'filter blur-[5px] brightness-[0.7]' : ''}>
        <div>
            {showSuccessMsg && (
                <div className="bg-gray-200 top-0  z-30 md:p-8 p-4 w-full text-[#0c1012] font-medium fixed ">
                    <p className="text-center md:text-[17px] text-[15px]">ITEM SUCCESSFULLY ADDED</p>
                </div>
            )}

            <div className=" py-2 mt-[150px] fixed top-[-12%] bg-[#000] z-30 w-full">
                <div className="max-w-[1250px] md:px-5 px-2 mx-auto">
                    <Link to={'..'} relative="path"><FaArrowLeft className='text-[#fff]  md:text-[25px] text-[20px] inline ' /></Link>
                </div>
            </div>



            <div className="max-w-[1250px] mx-auto px-5 mb-4 md:mt-[130px] mt-[120px]">
                {/* <Link to={'..'} relative="path" ><FaArrowLeft className='text-gray-600 inline' size={30} /></Link> */}
                <div className="flex justify-between  md:flex-row  flex-col gap-10 items-center">
                    <div className="flex items-center justify-center  shadow-md">
                        <img className="w-[100%]   object-cover " src={image} alt="" />
                    </div>

                    <div className="-mt-[10px]">
                        <h1 className="md:text-2xl text-[#000] text-1xl md:font-bold font-semibold">{name}</h1>
                        <p className="md:text-[17px] text-gray-600 md:py-4 py-1">{info}</p>
                        <p className="font-bold ">${price}</p>

                        <div className="flex gap-10 items-center mt-2 md:mt-6">
                            <div className=" flex gap-6 items-center bg-gray-200">
                                <button onClick={decreaseQuantity} className=" active:bg-[#999] md:p-2 p-1 text-black"> <FaMinus /></button>
                                <p className="font-semibold md:text-2xl text-[14px] ">{itemQuantity}</p>
                                <button onClick={increaseQuantity} className=" active:bg-[#999] md:p-2 p-1 text-black"> <FaPlus /></button>
                            </div>
                            <div className="flex-1">
                                <button onClick={addToCart} className="md:w-[50%]  w-full flex items-center justify-center gap-8 rounded-sm bg-[#f57247] p-2 text-[#fff] active:bg-[#000] md:text-[15px] text-[12px] font-medium">ADD TO CART <IoCart /> </button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className=" mt-[70px] ">
                    <h1 className="text-center border border-b-[#0c1012] mx-auto max-w-[200px] font-bold md:text-2xl text-[#0c1012]">You may also like</h1>
                    <div className="w-full my-4  overflow-x-scroll">
                        <div className="flex  items-center justify-center gap-6">
                            {sameCategory.map((cat) => {
                                let { id, name, image } = cat;
                                return (
                                    <Link to={id}>
                                        <div key={id} className="bg-gray-100 py-2 px-3 flex items-center justify-center flex-col rounded-md">
                                            <img className=" w-40 object-cover" src={image} alt="" />
                                            <h1 className="md:font-semibold  uppercase text-[12px] text-[#0c1012] my-2">{name}</h1>
                                        </div>
                                    </Link>
                                )
                            })}
                        </div>
                    </div >
                </div>
            </div>
        </div>
        // </div>
    )
}

export default ProductInfo
