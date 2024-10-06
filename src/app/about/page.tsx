'use client'
import Image from 'next/image'
import React, { useState } from 'react'
import startup from '../../assets/startup.svg'
import onlineLearning from '../../assets/Online learning.svg'
import { aboutus } from '@/utils/constant'
import Footer from '@/Components/Footer'
const page = () => {
  return (
    <div
      className='flex flex-1 gap-10 flex-col mt-8'
    >
      <h2
        className='font-medium text-[48px] text-center leading-[49px]'
      >About us</h2>

      {/* image div */}
      <div
        className='flex flex-1 justify-between items-center mx-20'
      >
        <Image
          src={startup}
          alt='startup'
        />
        <Image
          src={onlineLearning}
          alt='onlineLearning'
        />
      </div>

      {/* intro div */}
      <div
        className='flex flex-1 w-[auto] mx-10 gap-5 flex-col my-5'
      >
        {
          aboutus.map((item, index) => {
            const [isOpen, setIsOpen] = useState(false);
            return (
              <div
                key={index}
                className='transition-all ease-in-out delay-700'
              >
                <div
                  className={`bg-[#D84343] px-7 font-bold cursor-pointer capitalize relative after:w-[10px] after:h-[10px] after:rounded-full  ${isOpen ? 'after:bg-[#D84343] border-2 border-[white]' : 'after:bg-white border-none'} after:absolute after:left-3 after:top-[40%] p-4 text-black ${isOpen ? 'rounded-t-lg' : 'rounded-lg'} `}
                  onClick={() => setIsOpen((prev) => !prev)}
                >
                  {item.name}
                </div>
                {
                  isOpen && <>
                    <div
                      className={`p-2 ${isOpen ? 'w-[auto] block' : 'w-0 hidden'}`}
                    >{item.detail}</div>

                    {
                      item.list?.map((listItem, listIndex) => (
                        <div key={listIndex} className='p-2 flex flex-col gap-2'>
                          <h2
                            className='font-bold text-[20px] leading-[24px] text-black '
                          >{listIndex + 1}{". "}{listItem.heading}</h2>
                          <p
                            className='pl-3 text-black'
                          >{listItem.para}</p>
                        </div>
                      ))
                    }
                    <div className='p-2 flex flex-col gap-2'>
                      <h2
                        className='font-bold text-[20px] leading-[24px] text-black '
                      >{item.conclusion?.heading}</h2>
                      <p
                        className='pl-3 text-black'
                      >{item.conclusion?.para}</p>

                      <div
                        className='w-[60%] mx-[auto] my-10 overflow-hidden rounded-lg flex flex-col'
                        style={{
                          border: '1px solid black',
                          display: (index != aboutus.length - 2) ? 'none' : 'block',
                        }}
                      >
                        <div
                          className='flex flex-1 p-3 bg-[gray]'
                        >
                          <h2 className='flex-1 capitalize'>Section</h2>
                          <h2 className='flex-[2] capitalize '>Description</h2>
                        </div>

                        {
                          item.table?.map((tableItem, tableIndex) => (
                            <div
                              key={tableIndex}
                              className='flex flex-1 p-3'
                              style={{
                                borderTop: '1px solid gray',
                              }}
                            >
                              <h2 className='flex-1 capitalize '>{tableItem.section}</h2>
                              <h2 className='flex-[2] capitalize'>{tableItem.description}</h2>
                            </div>
                          ))
                        }
                      </div>
                    </div>
                  </>
                }
              </div>
            )
          })
        }

      </div>

      {/* footer */}
      <Footer />
    </div>
  )
}

export default page