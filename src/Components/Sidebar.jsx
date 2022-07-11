import React, { useState } from 'react'

export default function Sidebar(props) {

    let { hamItems, navItems } = props
    const [isOpen, setIsOpen] = useState(false)

    return (
        <>
            {!isOpen ?
                (
                    <div className='flex items-center cursor-pointer' onClick={() => setIsOpen(!isOpen)}>
                        <svg
                            className="fixed z-30 flex items-center xsm:left-10 left-6 top-8"
                            fill="#707070"
                            viewBox="0 0 100 80"
                            width="45"
                            height="50"
                        >
                            <rect width="100" height="4"></rect>
                            <rect y="25" width="100" height="4"></rect>
                        </svg>
                        <div className="absolute hidden xsm:block left-[96px]">
                            {hamItems[0]}
                        </div>
                    </div>
                ) :
                (
                    <div className={`top-0 left-0 fixed bg-[rgb(17,17,17)] w-[100vw] h-full flex place-content-center items-center px-[5%] `}>
                        <div className='fixed top-8 left-10 flex space-x-3 items-center cursor-pointer' onClick={() => setIsOpen(!isOpen)}>
                            <button className='text-2xl'>
                                X
                            </button>
                            <div>
                                {hamItems[1]}
                            </div>
                        </div>
                        
                        <div className='flex flex-col items-center '>
                            <ul className='text-center xsm:text-[60px] text-[27px] my-14 font-Neue'>
                                {navItems.map((element,i) => {
                                    return <li key={i} className='leading-[60px] py-[6px]'><a className='hover:text-transparent hover:bg-gradient-to-r from-yellow-400 to-red-500 bg-clip-text hover:translate-x-40 transition-all duration-[0.5s] ease-in-out' href="/">{element}</a></li>
                                })}
                            </ul>
                            <div>
                                <div className='text-center'>
                                    {hamItems[2]}
                                </div>
                                <div className='my-5'>
                                    <a href="/" className="fa fa-facebook fa-1x p-[12px] bg-[#2E313F] m-1 w-[38px] h-[38px] border-none rounded-[50%] flex place-content-center items-center transition-all duration-[0.5s] hover:bg-[#2e313f70]"></a>
                                    <a href="/" className="fa fa-instagram fa-1x p-[11px] bg-[#2E313F] m-1 w-[38px] h-[38px] border-none rounded-[50%] flex place-content-center items-center transition-all duration-[0.5s] hover:bg-[#2e313f70]"></a>
                                    <a href="/" className="fa fa-twitter fa-1x p-[11px] bg-[#2E313F] m-1 w-[38px] h-[38px] border-none rounded-[50%] flex place-content-center items-center transition-all duration-[0.5s] hover:bg-[#2e313f70]"></a>
                                </div>
                            </div>
                        </div>
                    </div >
                )
            }
        </>
    )
}
