import React from 'react';

const Banner = () => {
    return (
        <div className='container mx-auto mt-12 mb-24'>
            <div className="carousel w-full h-[90vh]">
                {
                    banners.map((banner, index) => (
                        <div
                            key={index}
                            id={`slide${index + 1}`}
                            className="carousel-item relative w-full bg-cover bg-no-repeat rounded-xl"
                            style={{ backgroundImage: `linear-gradient(to right, rgba(0,0,0,100%), rgba(21,21,21, 0%)), url(/assets/images/banner/${index + 1}.jpg)` }}>

                            <div className='flex items-center ml-28'>
                                <div>
                                    <h1 className='text-6xl font-bold text-white mb-8 max-w-md leading-tight'>{banner.title}</h1>
                                    <p className='text-lg text-white text-opacity-95 mb-6 max-w-lg'>{banner.description}</p>
                                    <button className='btn btn-primary'>Discover More</button>
                                    <button className='btn btn-outline text-white ml-5'>Latest Project</button>
                                </div>
                            </div>

                            <div className="absolute bottom-14 right-14">
                                <a href={`${banner.prev}`} className="btn btn-circle mr-4">❮</a>
                                <a href={`${banner.next}`} className="btn btn-circle">❯</a>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

const banners = [
    {
        title: "Affordable Price For Car Servicing",
        description: "There are many variations of passages of  available, but the majority have suffered alteration in some form",
        next: "#slide2",
        prev: "#slide6"
    },
    {
        title: "Affordable Price For Car Servicing",
        description: "There are many variations of passages of  available, but the majority have suffered alteration in some form",
        next: "#slide3",
        prev: "#slide1"
    },
    {
        title: "Affordable Price For Car Servicing",
        description: "There are many variations of passages of  available, but the majority have suffered alteration in some form",
        next: "#slide4",
        prev: "#slide2"
    },
    {
        title: "Affordable Price For Car Servicing",
        description: "There are many variations of passages of  available, but the majority have suffered alteration in some form",
        next: "#slide5",
        prev: "#slide3"
    },
    {
        title: "Affordable Price For Car Servicing",
        description: "There are many variations of passages of  available, but the majority have suffered alteration in some form",
        next: "#slide6",
        prev: "#slide5"
    },
    {
        title: "Affordable Price For Car Servicing",
        description: "There are many variations of passages of  available, but the majority have suffered alteration in some form",
        next: "#slide1",
        prev: "#slide3"
    },
]

export default Banner;