import { useParams, Link } from "react-router-dom"
import products from "./Product"
import { useState } from "react"
import { FaPlus } from "react-icons/fa";
import { FaMinus } from "react-icons/fa6"
import { IoCart } from "react-icons/io5";
// import { FaArrowLeftLong } from "react-icons/fa6";
import { FaArrowLeft } from "react-icons/fa6";

function ProductInfo({ carts, setCart, showSignUp }) {

    let [showSuccessMsg, setShowSuccessMsg] = useState(false)

    let addToCart = () => {
        setShowSuccessMsg(!showSuccessMsg)
        setTimeout(() => {
            setShowSuccessMsg(showSuccessMsg)
        }, 3000)
        setCart([...carts, { image: image, name: name, price: price, id: new Date().getTime().toString() }])
    }

    let [myProduct, setMyProduct] = useState(products)
    let { id } = useParams()

    let productInfo = myProduct.find((product) => product.id === id)
    let { image, name, info, price, category } = productInfo

    let sameCategory = myProduct.filter((prod) => prod.category == category)

    return (
        <div className={showSignUp ? 'filter blur-[5px] brightness-[0.7]' : ''}>
            {showSuccessMsg && (
                <div className="bg-[#fff] top-0 ease-in-out duration-500 z-30 md:p-4 p-2 w-full text-[#0c1012] font-medium fixed">
                    <p className="text-center md:text-[14px] text-[12px]">PRODUCT SUCCESSFULLY ADDED</p>
                </div>
            )}

            <div className=" py-1 mt-[150px] fixed top-[-12%] bg-[#0c1012] z-30 w-full">
                <div className="max-w-[1250px] md:px-5 px-2 mx-auto">
                    <Link to={'..'} relative="path"><FaArrowLeft className='text-[#fff]  md:text-[25px] text-[20px] inline ' /></Link>
                </div>
            </div>

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
                            <div className=" flex gap-6 items-center bg-gray-200 p-1">
                                <FaPlus />
                                <p>0</p>
                                <FaMinus />
                            </div>
                            <div className="flex-1">
                                <button onClick={addToCart} className="md:w-[50%]  w-full flex items-center justify-center gap-8 rounded-sm bg-[#b4e900] p-2 text-[#192123] md:text-[15px] text-[12px] font-medium">ADD TO CART <IoCart /> </button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className=" mt-[70px] ">
                    <h1 className="text-center border border-b-[#0c1012] mx-auto max-w-[200px] font-bold md:text-2xl text-[#0c1012]">You may also like</h1>
                    <div className="w-full my-4  overflow-x-scroll">
                        <div className="flex  items-center justify-center  gap-6">
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
    )
}

export default ProductInfo
