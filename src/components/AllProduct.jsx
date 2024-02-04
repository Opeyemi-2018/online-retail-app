// import { useState } from 'react'
// import products from './Product'
// import { IoIosArrowForward } from "react-icons/io";
// import { Link } from 'react-router-dom';
// import Search from './Search';

// function AllProduct() {
// let [myProduct, setMyProduct] = useState(products)

// let eightProduct = myProduct.slice(0, 8)
// return (
//     <div>
//         <Search />
//         <div className='grid grid-cols-2 gap-10 md:grid-cols-4 px-5 mt-[80px] max-w-[1250px] mx-auto'>
//             {myProduct.map((product) => {
//                 let { id, image, name } = product

//                 return (
//                     <div>
//                         <Link to={id}>
//                             <div key={id} className='flex flex-col items-center h-21 md:h-32 relative mb-10 justify-center shadow-sm hover:bg-gray-200 ease-in-out duration-500 bg-gray-100'>
//                                 <div>
//                                     <img className='w-[100px] md:w-[130px] absolute top-[-7%] left-[50%] translate-x-[-50%] translate-y-[-50%]' src={image} alt="" />
//                                 </div>

//                                 <div className='mt-16 flex flex-col'>
//                                     <h1 className='text-[#000300] md:text-1xl text-[13px] font-semibold md:font-bolder'>{name}</h1>
//                                     <div className='flex items-center justify-center gap-4 mt-1'>
//                                         <p className='text-gray-700 text-sm'>SHOP</p>
//                                         <IoIosArrowForward className='text-[#d36600]'></IoIosArrowForward >
//                                     </div>
//                                 </div>
//                             </div>
//                         </Link>
//                     </div>
//                 )
//             })}
//         </div>
//     </div>
// )
// }

// export default AllProduct
