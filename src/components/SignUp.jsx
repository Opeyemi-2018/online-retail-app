import goggleLogo from '../assets/images/google-logo.png'

function SignUp() {
  return (
    <div className='bg-gray-100 py-16 mt-[90px]'>
      <div className='md:max-w-[500px] max-w-[300px] mx-auto '>
        <div className=''>
          <div className='mb-8'>
            <h1 className='text-center font-bold md:text-3xl text-[17px] mb-1'>Create An Account</h1>
            <p className='text-[#555] text-center mb-3 md:text-[15px] '>Enter your email to sign up for this app</p>
          </div>
          <form className='flex flex-col  mt-4'>
            <input className='border border-gray-300 mb-4 md:p-[8px] p-[6px] rounded-md shadow-md placeholder-gray-400 text-[12px]' type="text" placeholder='Enter email address' />
            <input className='border border-gray-300 mb-6 md:p-[8px] p-[6px] rounded-md mt shadow-md  placeholder-gray-400 text-[12px]' type="text" placeholder='Create a password' />
            <button className=' bg-[#f57247] mt w-full  p-[6px] text-white rounded-md'>Submit</button>

            <div className='flex items-center  justify-center my-6'>
              <hr className='w-[38%] h-[40%] text-[#555]' />
              <p className='mx-1 whitespace-nowrap text-[#666]'>or continue with</p>
              <hr className='w-[38%] h-[40%] text-[#555]' />
            </div>
            <button className=' border border-gray-300 bg-white rounded-md shadow-md p-[6px] flex items-center gap-4 justify-center'>
              <img className='md:w-[4%] w-[6%]' src={goggleLogo} alt="" />
              <h1>google</h1>
            </button>
            <p className='text-center my-4 text-[#666]'>Already have an account? <span>Login</span></p>
          </form>
        </div>
      </div>
    </div>
  )
}

export default SignUp
