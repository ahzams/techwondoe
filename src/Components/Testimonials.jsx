import React from 'react'
import Card from './Card'
import 'tw-elements';

export default function Testimonials(props) {
    let { cardOne, cardTwo, cardThree, photos, test } = props
    return (
        <div className="container px-5 py-24 mx-auto">
            <div className='text-center min-h-[200px]'>
                <h2 className='my-[10px] hidden xsm:block'>{test[0]}</h2>
                <h1 className='text-[50px] mb-[10px] leading-[60px] xsm:leading-none'>{test[1]}<span className='text-yellow-400'>.</span></h1>
            </div>
            <div id="carouselExampleCaptions" className="carousel slide relative" data-bs-ride="carousel">
                <div className="carousel-indicators flex justify-center p-0 xsm:mb-11 my-11">
                    <button
                        type="button"
                        data-bs-target="#carouselExampleCaptions"
                        data-bs-slide-to="0"
                        class="active"
                        aria-current="true"
                        aria-label="Slide 1"
                    ></button>
                    <button
                        type="button"
                        data-bs-target="#carouselExampleCaptions"
                        data-bs-slide-to="1"
                        aria-label="Slide 2"
                    ></button>
                    <button
                        type="button"
                        data-bs-target="#carouselExampleCaptions"
                        data-bs-slide-to="2"
                        aria-label="Slide 3"
                    ></button>
                </div>
                <div className="carousel-inner relative w-full overflow-hidden">
                    <div className="carousel-item active relative float-left left-[22%] w-full">
                        <Card card={cardOne} pic={photos[0].fields.file.url} />
                    </div>
                    <div className="carousel-item relative float-left left-[22%] w-full">
                        <Card card={cardTwo} pic={photos[1].fields.file.url} />
                    </div>
                    <div className="carousel-item relative float-left left-[22%] w-full">
                        <Card card={cardThree} pic={photos[2].fields.file.url} />
                    </div>
                </div>
            </div>
        </div>
    )
}
