"use client"

import axios from 'axios';
import { useSession } from 'next-auth/react';
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';

const Bookings = () => {

    const session = useSession();
    const [bookings, setBookings] = useState([]);

    const handleDelete = async (id) => {
        const res = await axios.delete(`${process.env.NEXT_PUBLIC_BASE_URL}/my-booking/api/booking/${id}`);
        console.log(res.data);
        toast.success(res?.data?.message)
        setBookings(prevBookings => prevBookings.filter(booking => booking._id !== id))
    }

    useEffect(() => {
        const loadBookings = async () => {
            try {
                if (session?.data?.user?.email) {
                    const res = await axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}/my-booking/api/${session?.data?.user?.email}`);
                    setBookings(res.data);
                }
            } catch (error) {
                console.error("Error loading bookings", error);
            }
        }

        if (session.status == "authenticated") {
            loadBookings();
        }

    }, [session.status, session?.data?.user?.email])

    return (
        <div className='container mx-auto my-12'>
            <div className='relative'>
                <div className='shadow-lg'>
                    <Image src={"/assets/images/about_us/parts.jpg"} alt={"booking"} height={1080} width={1920} className='h-72 object-cover rounded-xl' />
                </div>

                <div className='absolute top-0 left-0 h-full flex items-center w-full rounded-xl' style={{ backgroundImage: "linear-gradient(to right, rgba(0,0,0,100%), rgba(21,21,21, 0%))" }}>
                    <h1 className='text-[#FF3811] text-4xl font-bold ml-14 text-'>My Bookings</h1>
                </div>
            </div>

            <div className='mt-20'>
                <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead className='text-xl text-slate-700'>
                            <tr className='text-center'>
                                <th></th>
                                <th>Service Image</th>
                                <th>Service Name</th>
                                <th>Price</th>
                                <th>Booking Date</th>
                                <th>Actions</th>
                                <th>Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                bookings?.map(({ _id, image, serviceTitle, price, serviceId, date }, index) => (
                                    <tr key={serviceId} className='text-center text-lg font-semibold'>
                                        <th>{index + 1}</th>
                                        <td>
                                            <div className="avatar">
                                                <div className="rounded-lg h-32 w-52 shadow-md bg-slate-200 p-1 border-2 border-orange-500">
                                                    <Image src={image} alt={serviceTitle} width={500} height={300} />
                                                </div>
                                            </div>
                                        </td>
                                        <td>{serviceTitle}</td>
                                        <td className='font-bold'>${price}</td>
                                        <td>{date}</td>
                                        <th>
                                            <Link href={`/my-booking/update/${_id}`}><button className="btn btn-ghost underline hover:text-orange-500">Edit</button></Link>

                                            <button onClick={() => handleDelete(_id)} className="btn btn-primary ml-3 ">Delete</button>
                                        </th>
                                        <td className='text-slate-900'>Pending</td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Bookings;