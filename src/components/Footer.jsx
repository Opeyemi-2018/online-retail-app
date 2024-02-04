import { NavLink } from "react-router-dom"



function Footer() {
    let currentDate = new Date().getFullYear()
    return (
        <div className='bg-[#192123] md:p-4 p-2'>
            <div className='text-white max-w-[2000px] md:max-w-[1250px] md:px-5 px-2 mx-auto'>

                <h1 className="md:block flex items-center justify-center font-bold mb-2 md:text-[20px] text-[#adbdbc] text-[18px]">XX99</h1>
                <div className="flex md:flex-row flex-col-reverse flex-col  justify-between">
                    <div className="basis-1/2 text-[#737e80] md:block flex items-center justify-center flex-col">
                        <p className="py-4 text-[14px] md:text-[18px]">Lorem ipsum dolor sit amet, consectetur
                            adipisicing elit. Harum eos officia impedit atque mollitia at
                            accusamus architecto quos blanditiis est?
                        </p>
                        <p>copyright &copy; {currentDate}</p>
                    </div>

                    <div className="md:block flex items-center justify-center">
                        <nav className="text-[14px] text-[#adbdbc] md:text-[16px] ">
                            <NavLink className='md:mx-7 mx-3' >HOME</NavLink>
                            <NavLink className='md:mx-7 mx-3'>CONTACT</NavLink>
                            <NavLink className='md:mx-7 mx-3'>ABOUT</NavLink>
                            <NavLink className='md:mx-7 mx-3'>PRODUCTS</NavLink>
                        </nav>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
