import React from 'react'

export default function Card(props) {
    let { card, pic } = props
    return (
        <div className="mb-6 p-4 w-[60%]">
            <div className="flex flex-col xsm:flex-row xsm:text-left text-center items-center xsm:items-start text-[26px]">
                <div className='xsm:w-[25%] w-[85%]'>
                    <img alt="testimonial" className="w-[140px] h-[140px] mb-8 object-cover object-center rounded-full inline-block bg-gray-100" src={pic} />
                </div>
                <div className='xsm:w-[75%] w-[100%]'>
                    <h1 className="font-medium title-font tracking-wider w-[237px] xsm:w-full relative right-[2.1rem] xsm:static mb-1 xsm:mb-0">{card[0]}</h1>
                    <h2 className="text-sm mb-[40px]">{card[1]}</h2>
                    <p className="leading-relaxed text-[20px] xsm:text-[26px] w-[275px] xsm:w-[100%] right-[3.3rem] relative xsm:static">{card[2]}</p>
                    <div className='mt-[60px]'>
                        <button className="inline-flex justify-center items-center uppercase text-black bg-gradient-to-r from-yellow-400 to-red-500 border-0 py-4 xsm:px-7 px-5 focus:outline-none hover:text-white hover:bg-none rounded text-[13px] font-bold transition-all duration-[0.3s]">{card[3]}</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
