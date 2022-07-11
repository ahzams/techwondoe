import React from 'react'

export default function BlogCard(props) {

    let { blog, img } = props

    return (
        <div className="flex xsm:w-[25%] w-[100%] flex-col xsm:mr-8 mr-0 my-3 xsm:my-0 rounded-lg shadow-lg">
            <img className="w-full rounded-lg" src={img} alt="" />
            <div className="py-6 flex flex-col justify-start">
                <div className='flex place-content-between items-center'>
                    <a href="/" className='bg-gradient-to-r transition-all duration-[0.5s] from-yellow-400 to-red-500 border-solid py-[5px] px-[10px] rounded text-black text-[12px] font-bold leading-[12px] hover:text-white hover:bg-none'>{blog[0]}</a>
                    <p className="text-xs uppercase">{blog[1]}</p>
                </div>
                <h1 className="text-[24px] font-medium my-3 leading-[30px]">{blog[2]}</h1>
                <p className="text-[17px] mb-4">
                    {blog[3]}
                </p>
                <div className="flex text-black">
                    <a href='/' className="inline-flex items-center text-[rgb(255,78,80)] py-2 focus:outline-none rounded text-base font-bold">{blog[4]}</a>
                </div>
            </div>
        </div>
    )
}
