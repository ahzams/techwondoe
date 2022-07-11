import React from 'react'

export default function Services(props) {
    let {serviceHead , image , types } = props

    return (
        <div>
            <section className="flex place-content-center text-center xsm:text-left body-font mx-[10%]">
                <div className="">
                    <h4 className='my-[10px]'>{serviceHead}</h4>
                    <h1 className='xsm:text-[3.125rem] text-[32px] xsm:leading-[60px] leading-[34px]'>High quality software<span className='text-yellow-400 xsm:text-7xl text-2xl'>.</span></h1>
                    <div className='xsm:my-8 mt-[4.75rem] mb-11'>
                        <ul>
                            {types.map((element,i) => {
                                return <li key={i} className='mb-[10px] py-[2px] text-[20px] before:content-[""] xsm:before:content-["\1F865"] before:relative before:text-[1rem] before:pr-[15px] before:text-yellow-400'>{element}</li>
                            })}
                        </ul>
                    </div>
                    <div className="my-6">
                        <button className="inline-flex items-center border-2 py-2 px-6 focus:outline-none hover:border-black rounded text-base uppercase">Learn More</button>
                    </div>
                </div>
                <div>
                    <img className='max-h-[100vh] max-w-full hidden xsm:block' src={image} alt="" />
                </div>
            </section>
        </div>
    )
}
