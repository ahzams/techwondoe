import React from 'react'

export default function Clients(props) {
    let { title, client } = props
    return (
        <div className='flex flex-col items-center my-[7%]'>
            <div className='m-10 xsm:text-[3.125rem] text-[32px] xsm:text-left text-center'>
                <h1>{title}</h1>
            </div>
            <div className='flex flex-wrap xsm:max-w-[60%] max-w-[85%]'>
                {client.map((element,i) => {
                    return <div key={i} className='flex xsm:w-[25%] w-[50%] place-content-center m-auto'><img className='max-h-[60px] xsm:m-5 my-3 p-1 max-w-full' src={element.fields.file.url} alt="" /></div>
                })}
            </div>
        </div >
    )
}
