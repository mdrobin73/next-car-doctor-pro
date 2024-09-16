import Image from 'next/image';
import React from 'react';

const About = () => {
    return (
        <div className='mb-24 container mx-auto flex flex-wrap'>
            <div className='w-[520px] mr-24 relative  object-contain'>
                <Image className='w-full rounded-lg ' src={"/assets/images/about_us/person.jpg"} alt='' height={300} width={300} />

                <Image className='w-[312px] h-[280px] absolute top-[41%] left-1/2 rounded-lg border-8 border-slate-50' src={"/assets/images/about_us/parts.jpg"} alt='' height={300} width={300} />
            </div>

            <div className='lg:w-2/5 space-y-5'>
                <h6 className='text-[#FF3811] font-bold text-xl'>About Us</h6>

                <h2 className='text-[#151515] font-bold text-4xl max-w-[19rem] leading-tight'>We are qualified & of experience in this field</h2>

                <p className='text-[#737373] leading-relaxed'>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which do not look even slightly believable. </p>

                <p className='text-[#737373] leading-relaxed'>The majority have suffered alteration in some form, by injected humour, or randomised words which do not look even slightly believable. </p>

                <button className='btn btn-primary mt-20'>Get More Info</button>
            </div>
        </div>
    );
};

export default About;