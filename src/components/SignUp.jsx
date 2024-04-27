import React from 'react'

function SignUp() {
  return (
    <div className='bg-gray-100 py-16 mt-[90px]'>
      <div className='md:max-w-[500px] max-w-[300px] mx-auto '>
        <div className=''>
          <h1 className='text-center font-bold md:text-2xl text-[15px] mb-1'>Create An Account</h1>
          <p className='text-[#555] text-center mb-3 md:text-[14px] text-[13px]'>Enter your email to sign up for this app</p>

          <form className='flex flex-col  mt-4'>
            <input className='mb-4 md:p-[6px] p-[4px] rounded-md shadow-md placeholder-gray-400 text-[12px]' type="text" placeholder='Enter email address' />
            <input className='mb-6 md:p-[6px] p-[4px] rounded-md mt shadow-md  placeholder-gray-400 text-[12px]' type="text" placeholder='Create a password' />
            <button className='mb-4 bg-[#f57247] mt w-full md:p-[2px] p-[2px] text-white rounded-md'>Submit</button>

            <div className='flex items-center  justify-center'>
              <hr className='w-[38%] h-[40%] text-[#555]' />
              <p className='mx-1 whitespace-nowrap'>or continue with</p>
              <hr className='w-[38%] h-[40%] text-[#555]' />
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default SignUp
