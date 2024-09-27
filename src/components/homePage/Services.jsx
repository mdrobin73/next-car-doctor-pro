import React from 'react';
import ServiceCard from '../cards/ServiceCard';
import { carServices } from '@/services/getServices';


const Services = async () => {

    const allServices = await carServices();

    return (
        <div className='container mx-auto mb-24'>
            <div className='text-center space-y-4'>
                <h6 className='text-[#FF3811] font-bold text-xl'>Services</h6>

                <h2 className='text-[#151515] font-bold text-4xl'>Our Service Area</h2>

                <p className='text-[#737373] leading-relaxed max-w-[41rem] mx-auto'>The majority have suffered alteration in some form, by injected humour, or randomised words which do not look even slightly believable. </p>
            </div>

            <div className='grid grid-cols-1 lg:grid-cols-3 gap-8 mt-10'>
                {allServices?.length > 0 &&
                    allServices?.map((service) => (
                        <ServiceCard
                            key={service.service_id}
                            service={service}
                        ></ServiceCard>
                    ))
                }
            </div>
        </div>
    );
};

export default Services;