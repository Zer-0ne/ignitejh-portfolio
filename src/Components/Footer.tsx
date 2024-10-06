import { domains } from '@/utils/constant'
import React from 'react'
import Logo from '../assets/ignite white logo.svg'
import Image from 'next/image'

const Footer = () => {
    return (
        <div
            className='w-[100%] flex flex-1 justify-center items-center p-6 bg-footer-bg rounded-t-md mb-0 '
        >
            <div
                className='mx-20 my-10 mb-2 flex flex-1 justify-center flex-col items-center gap-10'
            >

                {/* find us here container */}
                <div
                    className='flex flex-1 gap-2 justify-between'
                >
                    {/* social media details */}
                    <div
                        className='flex flex-1 flex-col gap-2'
                    >
                        <h2
                            className='font-medium text-[48px] leading-[49px] text-white'
                        >Find Us Here.</h2>
                        <p
                            className='font-medium text-[13px] leading-[13px] text-white'
                        >ignitesociety.jh@gmail.com</p>
                    </div>

                    {/* info */}
                    <p
                        className='flex flex-1 text-[24px] leading-[24px] text-white'
                    >A student -lead initiative at Jamia Hamdard, dedicated to cultivating collaborations, innovation and  entrepreneurship among aspiring  changemakers. Join us at Ignite Society and be a part of a vibrant community. Together, we can ignite impact on the world around us.</p>
                </div>

                {/* domains team and other pages container */}
                <div
                    className='flex flex-1 w-[100%] gap-5 justify-between mt-5'
                >
                    {
                        domains.map((item, index) => (
                            <div
                                className='flex flex-col mx-[auto]'
                                key={index}
                            >
                                <h2 className='text-[18px] leading-[18px] capitalize font-medium text-white mb-2'>{item.name}</h2>
                                {
                                    item?.option?.map((item, index) => (
                                        <p
                                            key={index}
                                            className=' mb-1 text-[16px] leading-[16px] capitalize font-medium text-[#919191]'
                                        >{item.name}</p>
                                    ))
                                }
                            </div>
                        ))
                    }
                </div>

                {/* logo */}
                <div
                    className='flex flex-1 justify-center items-center'
                >
                    <Image
                        src={Logo}
                        alt='ignite soceity'
                    />
                </div>

                {/* copyright */}
                <div
                    className='flex flex-1 justify-center items-center'
                >
                    {
                        ['cookie policy', 'copyright', 'privacy policy'].map((item, index) => (
                            <div
                                className='flex'
                                key={index}
                            >
                                <p
                                    className='text-[12px] font-medium leading-[13px] mr-3 text-white capitalize'
                                >{item}

                                </p>
                                <p
                                    className='text-[12px] font-medium leading-[13px] mr-3 text-white capitalize'
                                >{
                                        (['cookie policy', 'copyright', 'privacy policy'].length - 1 === index) ? "" : "|"
                                    }</p>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Footer