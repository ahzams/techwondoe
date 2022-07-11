import React from 'react'
import BlogCard from './BlogCard'

export default function Blog(props) {

    let { head1, head2, blogOne, blogTwo, blogImg } = props

    return (
        <div className='border-t border-solid border-white'>

            <div className='my-[10%]'>
                <div className='text-center my-24'>
                    <h2 className='my-[10px]'>{head1}</h2>
                    <h1 className='text-[50px]'>{head2}</h1>
                </div>
                <div className='flex xsm:flex-row flex-col mx-[10%] xsm:place-content-center items-center'>
                    <BlogCard blog={blogOne} img={blogImg[0].fields.file.url} />
                    <BlogCard blog={blogTwo} img={blogImg[1].fields.file.url} />
                </div>
            </div>
        </div>
    )
}
