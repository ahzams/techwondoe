import React from 'react'
import ScrollToTop from 'react-scroll-to-top'
export default function Footer(props) {

    let { logoTitle } = props

    return (
        <div className='border-t border-solid border-white bg-black'>
            <div className='py-[80px] px-[5%]'>
                <div className='xsm:mb-10 mb-5 xsm:text-left text-center'>
                    <a href="/" className='text-[2.25em] font-bold'>{logoTitle}<span className='text-yellow-400'>.</span></a>
                </div>
                <div className='flex place-content-between flex-col xsm:flex-row'>
                    <div className='hidden xsm:block'>
                        <a href="/" className='mr-2 hover:text-transparent hover:bg-gradient-to-r from-yellow-400 to-red-500 bg-clip-text transition-all duration-[0.3s]'>About Us</a>
                        <a href="/" className='mr-2 hover:text-transparent hover:bg-gradient-to-r from-yellow-400 to-red-500 bg-clip-text transition-all duration-[0.3s]'>Case Studies</a>
                        <a href="/" className='mr-2 hover:text-transparent hover:bg-gradient-to-r from-yellow-400 to-red-500 bg-clip-text transition-all duration-[0.3s]'>Blog</a>
                        <a href="/" className='mr-2 hover:text-transparent hover:bg-gradient-to-r from-yellow-400 to-red-500 bg-clip-text transition-all duration-[0.3s]'>Contact Us</a>
                    </div>
                    <div className='flex justify-center xsm:block'>
                        <a href="/" className='mr-2 hover:text-transparent hover:bg-gradient-to-r from-yellow-400 to-red-500 bg-clip-text transition-all duration-[0.3s]'>Linkedin</a>
                        <a href="mailto:hello@techwondoe.com" className='mr-2 hover:text-transparent hover:bg-gradient-to-r from-yellow-400 to-red-500 bg-clip-text transition-all duration-[0.3s]'>HELLO@TECHWONDOE.COM</a>
                    </div>
                    <ScrollToTop smooth color='#6f00ff' component={<div className="bg-[rgb(17,17,17)] h-[40px] rounded flex items-center place-content-center hover:bg-yellow-400 transition-all duration-[0.5s]">&#9650;</div>} />
                </div>
            </div>
        </div>
    )
}
