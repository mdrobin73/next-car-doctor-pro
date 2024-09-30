import { serviceDetails } from '@/services/getServices';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';


export const metadata = {
    title: "Service Details",
    description: "Car Servicing Center"
}


const Page = async ({ params }) => {
    const { _id, title, img, price, description, facility } = await serviceDetails(params.id);

    return (
        <div className='container mx-auto my-10'>
            <div className='relative'>
                <div className='shadow-lg'>
                    <Image src={img} alt={title} height={1080} width={1920} className='h-72 object-cover rounded-xl' />
                </div>

                <div className='absolute top-0 left-0 h-full flex items-center w-full rounded-xl' style={{ backgroundImage: "linear-gradient(to right, rgba(0,0,0,100%), rgba(21,21,21, 0%))" }}>
                    <h1 className='text-[#FF3811] text-4xl font-bold ml-14 text-'>{title}</h1>
                </div>
            </div>

            <div className='flex justify-between flex-wrap items-start gap-6 mt-14'>
                <div className='lg:w-[64.666667%]'>
                    <div className='mb-4'>
                        <h1 className='text-4xl text-[#151515] font-bold  mb-6'>{title}</h1>
                        <p className='text-[#737373]'>{description}</p>
                    </div>

                    <div className='grid grid-cols-2 gap-6'>
                        {
                            facility?.map((item) => (
                                <div key={_id} className='bg-[#F3F3F3] p-8 border-t-4 rounded-xl border-t-[#FF3811]'>
                                    <h2 className='text-xl text-[#444444] font-bold mb-3'>{item.name}</h2>
                                    <p className='text-[#737373] leading-7'>{item.details}</p>
                                </div>
                            ))
                        }
                    </div>
                </div>

                <div className='lg:w-1/3 bg-[#F3F3F3] p-5 border-l-4 rounded-xl border-l-[#FF3811] mt-[11px]'>
                    <Image src={"/assets/images/checkout/checkout.png"} alt={title} width={400} height={400} className='w-full' />

                    <div className='flex my-6 text-2xl text-[#151515] font-bold'>
                        <h2>Price: $</h2>
                        <p className='font-semibold'>{price}</p>
                    </div>

                    <Link href={`/checkout/${_id}`}><button className='btn btn-primary w-full text-lg'>Proceed Checkout</button></Link>
                </div>
            </div>
        </div>
    );
};

export default Page;