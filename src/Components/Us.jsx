import React from 'react'

export default function Us(props) {
    let { title1, title2, title3, title4, point1, point2, point3, point4, point5, point6 } = props
    return (
        <div className='mx-[10%] mt-[23%] xsm:my-0'>
            <div className='xsm:grid flex flex-col auto-cols-[1fr] gap-y-[40px] items-center'>
                <h2 className='col-span-2 row-span-1 text-center xsm:text-left'>{title1}</h2 >
                <h1 className='xsm:text-[3rem] text-[30px] leading-[34px] xsm:leading-none text-center xsm:text-left w-[80%]'>{title2}<span className='text-yellow-400'>.</span></h1>
                <ul className='col-span-1 row-span-1'>
                    <li className='my-[10px] py-[2px] flex text-xl before:content-["\1F865"] before:relative before:text-[1rem] before:text-yellow-400 before:pr-[10px] pr-3'>{point1}</li>
                </ul>
                <h1 className='xsm:text-[3rem] text-[32px] text-center xsm:text-left'>{title3}<span className='text-yellow-400'>.</span></h1>
                <ul className='col-span-1 row-span-1'>
                    <li className='mb-[10px] py-[2px] text-xl before:content-["\1F865"] before:relative before:text-[1rem] before:pr-[10px] before:text-yellow-400'>{point2}</li>
                    <li className='flex mb-[10px] py-[2px] text-xl before:content-["\1F865"] before:relative before:text-[1rem] before:pr-[10px] before:text-yellow-400'>{point3}</li>
                </ul>
                <h1 className='xsm:text-[3rem] text-[32px] text-center xsm:text-left'>{title4}<span className='text-yellow-400'>.</span></h1>
                <ul className='col-span-1 row-span-1 text-xl'>
                    <li className='flex items-start mb-[10px] py-[2px] before:content-["\1F865"] before:relative before:text-[1rem] before:pr-[10px] before:text-yellow-400'>{point4}</li>
                    <li className='flex mb-[10px] py-[2px] before:content-["\1F865"] before:relative before:text-[1rem] before:pr-[10px] before:text-yellow-400'>{point5}
                    </li>
                    <li className='flex mb-[10px] py-[2px] before:content-["\1F865"] before:relative before:text-[1rem] before:pr-[10px] before:text-yellow-400'>{point6}
                    </li>
                </ul>
            </div>
        </div >
    )
}
