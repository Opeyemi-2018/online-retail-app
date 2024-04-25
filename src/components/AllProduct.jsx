import { useState } from 'react'
import AllProducts from './Product'
import { IoIosArrowForward } from "react-icons/io";
import { Link } from 'react-router-dom';
import { FaArrowLeft } from "react-icons/fa6";

function AllProduct() {

    let [search, setSearch] = useState('')
    let [products, setMyProducts] = useState(AllProducts)


    // Create a set to keep track of unique categories
    // let uniqueCategories = new Set();
    // Filter the items to get only one item per category
    // let filteredItems = myProduct.filter((item) => {
    //     if (!uniqueCategories.has(item.category)) {
    //         uniqueCategories.add(item.category);
    //         return true;
    //     }
    //     return false;
    // });
    // let eightProduct = myProduct.slice(0, 8)



    return (
        <section>
            <div className='mt-[83px] p-2 fixed top-0 z-20 w-full bg-[#000]'>
                <div className='max-w-[2000px] md:px-0 px-1 md:max-w-[1250px] mx-auto flex items-center justify-center'>
                    <input value={search} onChange={(e) => setSearch(e.target.value.toLowerCase())} placeholder='search for product' className="w-full  outline-none bg-[#fff] rounded-md py-1 px-3" type="text" />
                </div>
            </div>
            <div className="-10 py-1 mt-[140px] fixed top-[-2%] bg-[#000] z-20 w-full">
                <div className="max-w-[1250px] md:px-0 px-2 mx-auto">
                    <Link to='..' relative="path"><FaArrowLeft className='text-[#fff] md:text-[25px]  text-[20px] inline ' /></Link>
                </div>
            </div>
            {/* <div className={showSignUp ? 'filter  blur-[5px] brightness-[0.7] pointer-events-none' : ''}> */}
            <div className='grid  grid-cols-3 gap-2 md:grid-cols-6  md:px-5 px-2   md:mt-[210px] mt-[170px] max-w-[1250px] mx-auto'>
                {products.filter((product) => {
                    return search.trim().toLowerCase() === '' ? product : product.name.toLowerCase().includes(search.trim())
                }).map((product) => {
                    let { id, image, name } = product

                    return (
                        <div>
                            <Link to={id}>
                                <div key={id} style={{}} className='flex flex-col mb-4 md:px-4 px-2 shadow-md hover:shadow-lg ease-in-out duration-500 border-gray-200 border border-r-1 border-l-0 border-b-0 border-t-0 hover:scale-105'>
                                    <div className='flex items-center justify-center h-[80px] md:h-[100px]'>
                                        <img className='max-w-[100%] max-h-[100%]' src={image} alt="" />
                                    </div>

                                    <div className='md:mt-7 mt-1 flex flex-col items-center'>
                                        <h1 className='text-[#000300] whitespace-nowrap md:text-[17px] text-[13px] font-semibold md:font-bolder'>{name}</h1>
                                        <div className='flex items-center justify-center gap-4 mt-1'>
                                            <p className='text-gray-700 md:text-sm text-[10px]'>SHOP</p>
                                            <IoIosArrowForward className='text-[#f57247]'></IoIosArrowForward >
                                        </div>
                                    </div>
                                </div>

                            </Link>
                        </div>
                    )
                })}
            </div>
            {/* </div> */}
        </section>)

}

export default AllProduct
