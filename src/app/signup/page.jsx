"use client"

import SocialSignIn from '@/components/shared/SocialSignIn';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React from 'react';

const Page = () => {

    const router = useRouter();

    const handleRegister = async (event) => {
        event.preventDefault();

        const newUser = {
            name: event.target.name.value,
            email: event.target.email.value,
            password: event.target.password.value
        }
        const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/signup/api`, {
            method: "POST",
            body: JSON.stringify(newUser),
            headers: {
                "content-type": "application/json"
            }
        })
        if (res.status === 200) {
            event.target.reset();
            router.push("/login");
        }
    }

    return (
        <div className='flex container mx-auto p-12 items-center my-12'>
            <div className='w-2/4 flex justify-center'>
                <Image src={"/assets/images/login/login.svg"} alt={'login image'} width={400} height={500} />
            </div>

            <div className='w-2/4 border-2 px-16 py-12 rounded-lg'>
                <h2 className='text-[#444444] text-4xl font-semibold text-center mb-10'>Sign Up</h2>

                <form onSubmit={handleRegister}>
                    <label htmlFor='name' class="input input-bordered flex items-center gap-2 mb-6">
                        <input type="text" name='name' placeholder="Username" />
                    </label>

                    <label htmlFor='email' className="input input-bordered flex items-center gap-2 mb-6">
                        <input type="email" name='email' placeholder="Email" />
                    </label>

                    <label htmlFor='password' className="input input-bordered flex items-center gap-2 mb-6">
                        <input type="password" name='password' placeholder='Password' />
                    </label>

                    <button type="submit" className='btn btn-primary w-full'>Sign Up</button>
                </form>

                <div className='text-center mt-6'>
                    <p className='mb-6 text-[#444444] text-lg font-medium'>Or Sign Up with</p>
                    <SocialSignIn></SocialSignIn>
                    <p className='text-[#737373] text-lg'>Already have an account? <span className='text-[#FF3811] font-medium'><Link href={"/login"} >Login</Link></span></p>
                </div>
            </div>
        </div>
    );
};

export default Page;