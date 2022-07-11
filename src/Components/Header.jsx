import React from 'react'
import Sidebar from './Sidebar'
// import PropTypes from 'prop-types'

export default function Header(props) {

    let { logoTitle, toggle, navItems, heroLink } = props

    return (
        <>
            <div className='fixed bottom-[50vh] rotate-90 text-xs sm:text-sm font-medium hidden md:block'>
                <a className='hover:text-transparent hover:bg-gradient-to-r from-yellow-400 to-red-500 bg-clip-text transition-all duration-[0.4s]' href="/">{heroLink[0]}</a>
            </div>
            <div className='fixed right-[1%] bottom-[50vh] -rotate-90 text-sm font-medium hidden md:block'>
                <a className='hover:text-transparent hover:bg-gradient-to-r from-yellow-400 to-red-500 bg-clip-text transition-all duration-[0.4s]' href="/">{heroLink[1]}</a>
            </div>
            <div className="flex min-h-[90px] items-center p-[10px] place-content-center sticky top-0 bg-[rgb(17,17,17)] z-[999]">
                <Sidebar hamItems={toggle} navItems={navItems} />
                <div className='font-bold font-Neue'>
                    <a href="/" className='xsm:text-[2.25em] text-[1.8em]'>{logoTitle}<span className='text-yellow-400'>.</span></a>
                </div>
            </div >
        </>
    )
}