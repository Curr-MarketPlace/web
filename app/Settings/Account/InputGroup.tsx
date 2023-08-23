import React from 'react'

const InputGroup = () => {
  return (
    <div className='flex justify-center items-center flex-col gap-3 w-full h-full '>
      <div className='flex flex-col md:flex-row md:gap-16 gap-2  '>
        <div className='flex flex-col'>
          <p className='text-[#616161]'>Username</p>
          <input
            type='text'
            placeholder='Username'
            className='md:w-[17vw] w-full h-[40px] rounded-lg border  border-black px-4'
          />
        </div>
        <div className='flex flex-col'>
          <p className='text-[#616161]'>Email</p>

          <input
            type='text'
            placeholder='Email'
            className='md:w-[17vw] w-full  h-[40px] rounded-lg border border-black px-4'
          />
        </div>
      </div>
      <div className='flex flex-col'>
        <p className='text-[#616161]'>Biography</p>

        <input
          type='text'
          placeholder='Biography'
          className='md:w-[38vw] w-full h-[100px] rounded-lg border border-black px-4 '
        />
      </div>
      <div className='flex flex-col'>
        <p className='text-[#616161]'>Wallet Address</p>

        <input
          type='text'
          placeholder='Wallet Address'
          className='md:w-[38vw] w-full h-[40px] rounded-lg border border-black px-4 '
        />
      </div>
    </div>
  )
}

export default InputGroup
