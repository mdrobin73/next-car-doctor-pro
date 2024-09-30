"use client"
import axios from 'axios';
import { useSession } from 'next-auth/react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';

const Page = ({ params }) => {

    const session = useSession();
    const router = useRouter();

    const [booking, setBooking] = useState({});
    
    const {date, phone, address, image:img, serviceTitle:title, price} = booking || {};

    const loadBooking = async () => {
        const res = await axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}/my-booking/api/booking/${params.id}`)
        setBooking(res.data.res);
    }

    const handleUpdateBooking = async (event) => {
        event.preventDefault();
        const updatedData = {
            date: event.target.date.value,
            phone: event.target.phone.value,
            address: event.target.address.value
        }

        const res = await axios.patch(`${process.env.NEXT_PUBLIC_BASE_URL}/my-booking/api/booking/${params.id}`, updatedData)
        toast.success(res?.data?.message);
        if (res.data) {
            router.push("/my-booking")
        }
    }

    useEffect(() => {
        loadBooking();
    }, [params])

    return (
        <div className='container mx-auto my-10'>
            <div className='relative'>
                <div className='shadow-lg'>
                    <Image src={img} alt={title} height={1080} width={1920} className='h-72 object-cover rounded-xl' />
                </div>

                <div className='absolute top-0 left-0 h-full flex items-center w-full rounded-xl' style={{ backgroundImage: "linear-gradient(to right, rgba(0,0,0,100%), rgba(21,21,21, 0%))" }}>
                    <h1 className='text-[#FF3811] text-4xl font-bold ml-14 text-'>Update Booking</h1>
                </div>
            </div>

            <div className='mt-16 bg-[#F3F3F3] p-16 rounded-xl shadow-lg'>
                <form onSubmit={handleUpdateBooking}>
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
                            <input defaultValue={date} type="date" name='date' className="input input-bordered w-full" required />
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
                            <input defaultValue={phone} type="text" placeholder="Phone No." name='phone' className="input input-bordered w-full" required />
                        </label>

                        <label className="form-control w-full">
                            <div className="label">
                                <span className="label-text">Address</span>
                            </div>
                            <input defaultValue={address} type="text" placeholder="Address" name='address' className="input input-bordered w-full" required />
                        </label>
                    </div>

                    <div className='mt-6'>
                        <button type='submit' className='btn btn-primary w-full text-lg font-semibold'>Confirm Update</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Page;