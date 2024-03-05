import googleLogo from '../assets/images/google-logo.png'
import { CgProfile } from "react-icons/cg";
function SignForm({ showSignUp, setShowSignUp }) {
    return (
        <div>
            {showSignUp && <div className='fixed top-[12%] bg-white md:w-[30%] w-[100%]  shadow-md rounded-md left-[0%] mx-auto  md:left-[65%] py-5 px-6'>
                {/* <h1 className='md:font-bold font-semibold md:text-2xl text-[25px] text-[#0c1012] my-1 text-center'>Welcome</h1> */}
                <h2 className='md:font-bold font-semibold md:text-2xl text-[20px] text-center text-[#0c1012] flex items-center justify-center gap-3 md:py-4 py-3'>CREATE ACCOUNT <CgProfile className='md:text-[25px] text-[20px]' /> </h2>
                <form>
                    <div className='my-2'>
                        <label className='font-semibold'>First name</label>
                        <input className='w-full md:p-1 p-[2px] outline-none bg-gray-200  rounded-sm' type="text" />
                    </div>
                    <div className='my-2'>
                        <label className='font-semibold'>Last name</label>
                        <input className='w-full md:p-1 p-[2px] outline-none bg-gray-200 rounded-sm' type="text" />
                    </div>
                    <div className='my-2'>
                        <label className='font-semibold'>Email</label>
                        <input className='w-full md:p-1 p-[2px] outline-none bg-gray-200 rounded-sm' type="email" />
                    </div>
                    <div className='my-2'>
                        <label className='font-semibold'>Password</label>
                        <input className='w-full md:p-1 p-[2px] outline-none bg-gray-200 rounded-sm' type="password" />
                    </div>
                    <button className='w-full my-3 md:p-2 p-1 bg-[#0c1012] text-white rounded-md'>Sign Up</button>
                    <button className='w-full  md:p-2 p-1 flex items-center justify-center gap-6 border border-[#999] text-black rounded-md'>Sign Up with Google
                        <img className='w-5' src={googleLogo} alt="" />
                    </button>
                    <p className='text-[#0c1012] md:text-[18px] text-[15px] py-3 flex items-center justify-center gap-4'>Already have an account? <button className=' text-[#0c1012] font-medium'>Sign in</button></p>
                </form>
            </div>}

        </div>
    )
}

export default SignForm
