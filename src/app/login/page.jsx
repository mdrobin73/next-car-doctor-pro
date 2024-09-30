"use client"

import Image from 'next/image';
import React from 'react';
import { signIn, useSession } from 'next-auth/react';
import Link from 'next/link';
import { useRouter, useSearchParams } from 'next/navigation';
import SocialSignIn from '@/components/shared/SocialSignIn';


const Page = () => {

    // const router = useRouter();
    const session = useSession();
    const searchParams = useSearchParams();
    const path = searchParams.get("redirect");

    const handleLogin = async (event) => {
        event.preventDefault();

        const email = event.target.email.value;
        const password = event.target.password.value;

        const res = await signIn("credentials", {
            email,
            password,
            redirect: true,
            callbackUrl: path ? path : "/"
        })
        // if (res.status === 200) {
        //     router.push("/");
        // }
    }

    return (
        <div className='flex container mx-auto p-12 items-center my-12'>
            <div className='w-2/4 flex justify-center'>
                <Image src={"/assets/images/login/login.svg"} alt={'login image'} width={400} height={500} />
            </div>

            <div className='w-2/4 border-2 px-16 py-12 rounded-lg'>
                <h2 className='text-[#444444] text-4xl font-semibold text-center mb-10'>Login</h2>

                <form onSubmit={handleLogin}>
                    <label htmlFor='email' className="input input-bordered flex items-center gap-2 mb-6">
                        <input type="email" name='email' placeholder="Email" />
                    </label>

                    <label htmlFor='password' className="input input-bordered flex items-center gap-2 mb-6">
                        <input type="password" name='password' placeholder='Password' />
                    </label>

                    <button type='submit' className='btn btn-primary w-full'>{session?.status === "loading" ? <span className="loading loading-spinner loading-md"></span> : "Login"}</button>
                </form>

                <div className='text-center mt-6'>
                    <p className='mb-6 text-[#444444] text-lg font-medium'>Or Sign In with</p>
                    <SocialSignIn></SocialSignIn>
                    <p className='text-[#737373] text-lg'>Not have an account? <span className='text-[#FF3811] font-medium'><Link href={"/signup"} >Sign Up</Link></span></p>
                </div>
            </div>
        </div>
    );
};

export default Page;