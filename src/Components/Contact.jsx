import React from 'react'

export default function Contact(props) {

    let { find, list, formText, contact } = props

    return (
        <div className='border-t border-solid border-white'>
            <div className="container px-5 pt-11 mx-auto flex flex-col items-center xsm:flex-row mt-[10%] mb-[5%]">
                <div className="mb-12 xsm:w-[33%] w-[75%] xsm:px-16 px-2 xsm:text-left text-center xsm:relative static bottom-[138px] left-[5%]">
                    <h2 className="font-medium title-font mb-4">{contact[0]}</h2>
                    <h1 className="xsm:leading-[60px] leading-[34px] xsm:text-[50px] text-[32px] font-medium title-font mb-4">{contact[1]}<span className='text-yellow-400'>.</span></h1>
                </div>
                <div className="xsm:w-[33%] w-full mx-7 xsm:mt-14 mt-0">
                    <div className="flex flex-col flex-end px-[1rem] tracking-[3px]">
                        <label htmlFor="name" className="leading-7 text-base uppercase">{formText[0]}</label>
                        <input type="text" id="name" name="name" className="w-full h-[50px] mb-[40px] bg-[rgb(17,17,17)] bg-opacity-50 rounded border border-gray-300 focus:border-[rgb(13,14,14)] focus:ring-1 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />

                        <label htmlFor="email" className="leading-7 text-base uppercase">{formText[1]}</label>
                        <input type="email" id="email" name="email" className="w-full h-[50px] mb-[40px] bg-[rgb(17,17,17)] bg-opacity-50 rounded border border-gray-300 focus:border-[rgb(13,14,14)] focus:ring-1  focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />

                        <label htmlFor="message" className="leading-7 text-base uppercase">{formText[2]}</label>
                        <textarea id="message" name="message" className="w-full bg-[rgb(17,17,17)] bg-opacity-50 rounded border border-gray-300 focus:border-[rgb(13,14,14)] focus:ring-1  focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
                    </div>
                </div>
                <div className='flex flex-col justify-evenly items-start mx-2 mt-14'>
                    <div className='mb-9 xsm:mb-0'>
                        <h1 className='mb-3 tracking-[2px]'>{find}</h1>
                        {list.map((element, i) => {
                            return (
                                <div key={i} className='my-[10px]'>
                                    <input type="checkbox" name="" id="" className='w-[16px] h-[16px] checked:bg-slate-600' /><span className='px-5'>{element}</span>
                                </div>
                            )
                        })}
                    </div>
                    <input type="submit" className="block cursor-pointer tracking-[1px] transition-all duration-[1s] ease-in-out hover:text-white text-black w-full uppercase text-center text-[13px] bg-gradient-to-r from-yellow-400 to-red-500 border-0 hover:bg-none py-[15px] px-6 focus:outline-none rounded text-base font-bold mb-4 xsm:mb-0" value="Send Request" />
                </div>
            </div>
        </div>
    )
}
