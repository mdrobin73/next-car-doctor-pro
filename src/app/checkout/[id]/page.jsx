"use client"
import { serviceDetails } from '@/services/getServices';
import axios from 'axios';
import { useSession } from 'next-auth/react';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';

const CheckOut = ({ params }) => {

    const session = useSession();
    console.log(session);

    const [service, setService] = useState({});
    const { _id, price, img, title } = service || {};

    const handleBooking = async (event) => {
        event.preventDefault();

        const newBooking = {
            name: session?.data?.user?.name,
            email: session?.data?.user?.email,
            date: event.target.date.value,
            price: price,
            phone: event.target.phone.value,
            address: event.target.address.value,
            serviceTitle: title,
            serviceId: _id,
            image: img
        }

        try {
            const res = await axios.post("http://localhost:3000/checkout/api", newBooking)
            toast.success(res?.data?.message);
            event.target.reset();
        } catch (error) {
            console.error("Error making the booking request", error);
        }
    }

    useEffect(() => {
        const loadService = async () => {
            const details = await serviceDetails(params.id);
            setService(details);
        }
        loadService();

    }, [params.id])

    return (
        <div className='container mx-auto my-10'>
            <div className='relative'>
                <div className='shadow-lg'>
                    <Image src={img} alt={title} height={1080} width={1920} className='h-72 object-cover rounded-xl' />
                </div>

                <div className='absolute top-0 left-0 h-full flex items-center w-full rounded-xl' style={{ backgroundImage: "linear-gradient(to right, rgba(0,0,0,100%), rgba(21,21,21, 0%))" }}>
                    <h1 className='text-[#FF3811] text-4xl font-bold ml-14 text-'>Check Out</h1>
                </div>
            </div>

            <div className='mt-16 bg-[#F3F3F3] p-16 rounded-xl shadow-lg'>
                <form onSubmit={handleBooking}>
                    <div className='grid grid-cols-2 gap-6'>
                        <label className="form-control w-full">
                            <div className="label">
                                <span className="label-text">Name</span>
                            </div>
                            <input defaultValue={session?.data?.user?.name} type="text" name='name' className="input input-bordered w-full" readOnly />
                        </label>

                        <label className="form-control w-full">
                            <div className="label">
                                <span className="label-text">Date</span>
                            </div>
                            <input type="date" name='date' className="input input-bordered w-full" required />
                        </label>

                        <label className="form-control w-full">
                            <div className="label">
                                <span className="label-text">Email</span>
                            </div>
                            <input defaultValue={session?.data?.user?.email} type="email" name='email' className="input input-bordered w-full" readOnly />
                        </label>

                        <label className="form-control w-full">
                            <div className="label">
                                <span className="label-text">Due Amount</span>
                            </div>
                            <input defaultValue={price} type="text" name='price' className="input input-bordered w-full" readOnly />
                        </label>

                        <label className="form-control w-full">
                            <div className="label">
                                <span className="label-text">Phone</span>
                            </div>
                            <input type="text" placeholder="Phone No." name='phone' className="input input-bordered w-full" required />
                        </label>

                        <label className="form-control w-full">
                            <div className="label">
                                <span className="label-text">Address</span>
                            </div>
                            <input type="text" placeholder="Address" name='address' className="input input-bordered w-full" required />
                        </label>
                    </div>

                    <div className='mt-6'>
                        <button type='submit' className='btn btn-primary w-full text-lg font-semibold'>Order Confirm</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default CheckOut;