import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FaArrowRight } from "react-icons/fa6";


const ServiceCard = ({ service }) => {
    
    const { _id, title, img, price } = service || {};

    return (
        <div className='border-2 p-6 rounded-lg bg-base-100 shadow-xl space-y-4 flex flex-col justify-between'>

            <figure>
                <Image className='w-full h-[250px] rounded-lg' src={img} alt={title} width={300} height={300} />
            </figure>
            
            <h4 className='text-[#444444] text-xl font-bold'>{title}</h4>

            <div className='flex justify-between items-center'>
                <h5 className='text-[#FF3811] text-lg font-semibold'>Price : ${price}</h5>

                <Link href={`services/${_id}`}><p className='flex items-center text-xl font-bold text-slate-900'>GO <FaArrowRight className='text-[#FF3811] text-lg ml-2'/></p></Link>
            </div>

        </div>
    );
};

export default ServiceCard;