import { useState } from 'react'
import products from './Product'
import { IoIosArrowForward } from "react-icons/io";
import { Link } from 'react-router-dom';
import { FaArrowLeft } from "react-icons/fa6";

function AllProduct({ showSignUp }) {

    let [search, setSearch] = useState('')
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
    // let eightProduct = myProduct.slice(0, 8)

    return (
        <section>
            <div className='mt-[83px] p-2 fixed top-0 z-20 w-full bg-[#0c1012]'>
                <div className='max-w-[2000px] md:px-5 px-2 md:max-w-[1250px] mx-auto flex items-center justify-center'>
                    <input value={search} onChange={(e) => setSearch(e.target.value)} placeholder='search for product' className="w-full  outline-none bg-[#fff] rounded-md py-1 px-3" type="text" />
                </div>
            </div>
            <div className="-10 py-1 mt-[140px] fixed top-[-2%] bg-[#0c1012] z-20 w-full">
                <div className="max-w-[1250px] md:px-5 px-2 mx-auto">
                    <Link to='..' relative="path"><FaArrowLeft className='text-[#fff] md:text-[25px]  text-[20px] inline ' /></Link>
                </div>
            </div>
            <div className={showSignUp ? 'filter blur-[5px] brightness-[0.7]' : ''}>
                <div className='grid grid-cols-2 gap-10 md:grid-cols-4 px-5 mt-[240px] max-w-[1250px] mx-auto'>
                    {filteredItems.filter((product) => {
                        return search.toLowerCase() === '' ? product : product.name.toLowerCase().includes(search)
                    }).map((product) => {
                        let { id, image, name } = product

                        return (
                            <div>
                                <Link to={id}>
                                    <div key={id} className='flex flex-col items-center h-21 md:h-32 relative mb-10 justify-center shadow-sm hover:shadow-lg 00 ease-in-out duration-500 bg-[#f3f8ff]'>
                                        <div>
                                            <img className='object-cover max-w-full max-h-full absolute top-[-7%] left-[50%] translate-x-[-50%] translate-y-[-50%]' src={image} alt="" />
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
        </section>)

}

export default AllProduct
