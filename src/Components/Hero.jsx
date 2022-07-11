import React from 'react'

export default function Hero(props) {
    // console.log(content)
    let {text1 , text2 , btnText1 , btnText2} = props

    return (
        
        <div className='xsm:h-[100vh] h-[77vh]'>
            <section className="text-gray-600 body-font">
                <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col text-center text-white">
                    <div className="text-center lg:w-2/3 w-full">
                        <h2 className="text-base leading-7 mb-4 font-medium">{text1}</h2>
                        <h1 className="mb-8 leading[50px] xsm:leading-[6rem] text-[40px] xsm:text-[5rem]">{text2}</h1>
                        <div className="xsm:flex xsm:justify-center place-content-center flex-col xsm:flex-row items-center text-black mt-[80px]">
                            <button className="inline-flex items-center uppercase bg-gradient-to-r from-yellow-400 to-red-500 border-0 py-4 px-7 xsm:mb-0 mb-5 focus:outline-none hover:text-white hover:bg-none rounded text-[13px] font-bold transition-all duration-[0.3s]">{btnText1}</button>
                            <button className="ml-4 inline-fle text-white uppercase border-[1px] py-4 px-7 focus:outline-none hover:border-[rgb(17,17,17)] rounded text-[13px] transition-all duration-[0.3s]">{btnText2}</button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
