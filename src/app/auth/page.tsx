import { colors } from '@/utils/colors'
import { login } from '@/utils/constant'
import React from 'react'
 /* eslint-disable */
const page = () => {
    return (
        <div
            className={`container flex justify-center items-center h-[auto] mt-3 mx-[auto]`}
        >

            {/* auth container */}
            <div
                className={`min-w-[60%] xl:max-w-[60%] mx-[auto] flex gap-2  my-10 min-h-[20vh] border-2 rounded`}
                style={{
                    borderColor: colors.navbarBg
                }}
            >
                <div className='flex-1 h-[100%] px-8 gap-4 bg-white text p-4 relative'>
                    <h2
                        className=' text-transparent bg-clip-text bg-gradient-to-r from-[#919191] to-[#BFBFBF] font-semibold text-[45px] capitalize'
                    >Welcome to <strong
                        className='text-[#C92842] block font-bold'
                    >Ignite!</strong></h2>
                    <h3
                        className=' text-transparent bg-clip-text bg-gradient-to-r from-[#919191] to-[#BFBFBF] font-semibold mt-3 text-[24px]'
                    >A student -lead initiative at Jamia
                        Hamdard , dedicated to cultivating
                        collaborations, innovation and
                        entrepreneurship among aspiring
                        changemakers. Join us at Ignite Society
                        and be a part of a vibrant community.
                        Together, we can ignite impact on the
                        world around us.
                    </h3>
                    <h2
                        className='font-medium text-[30px] leading-[38px] text-center text-transparent bg-clip-text bg-gradient-to-r from-[#919191] to-[#BFBFBF] my-5 uppercase'
                    >Lets's ignite together!</h2>
                </div>
                <div className='flex-1 h-[auto] bg-[#C92842] min-h-[100%] flex justify-center items-center'>
                    <div
                        className='py-2 flex flex-col gap-4'
                    >
                        <h1
                            className='font-bold text-[61px] leading-[61px] text-[#FDFDFD] text-center'
                        >Login</h1>
                        <div className='flex flex-col gap-2'>

                            {
                                login.map((item, index) => (
                                    <div key={index} >
                                        <label htmlFor="input" className='block capitalize text-white'>{item.name}</label>
                                        <input type={item.type}
                                            className='outline-none px-1 rounded py-[.5px]'
                                        // placeholder='Enter your mail'
                                        />
                                    </div>
                                ))
                            }
                            <p className='captilize text-[12px] leading-[13px] text-center mt-2 text-[#FDFDFD] cursor-pointer'>forgot password?</p>
                        </div>
                        <button
                            className='rounded text-[black] hover:text-[white] hover:bg-[black] transition-all ease-in-out bg-[white]'
                        >Login</button>

                        <p
                            className='font-medium text-[12px] leading-[13px] text-center text-white'
                        >
                            {/* disable eslint */}
                            {/* eslint-disable-next-line*/}
                            Dont have an account? <span className='cursor-pointer'>Sign up</span>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default page