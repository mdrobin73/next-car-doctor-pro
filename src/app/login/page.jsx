"use client"

import Image from 'next/image';
import React from 'react';
import { FcGoogle } from "react-icons/fc";
import { FaFacebookF } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import Link from 'next/link';


const page = () => {

    const handleLogin = (e) => {
        e.preventDefault();
    }

    return (
        <div className='flex container mx-auto p-12 items-center my-12'>
            <div className='w-2/4 flex justify-center'>
                <Image src={"/assets/images/login/login.svg"} alt={'login image'} width={400} height={500} />
            </div>

            <div className='w-2/4 border-2 px-16 py-12 rounded-lg'>
                <h2 className='text-[#444444] text-4xl font-semibold text-center mb-10'>Login</h2>

                <form onClick={handleLogin}>
                    <label className="input input-bordered flex items-center gap-2 mb-6">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 16 16"
                            fill="currentColor"
                            className="h-4 w-4 opacity-70">
                            <path
                                d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                            <path
                                d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
                        </svg>
                        <input type="email" name='email' placeholder="Email" />
                    </label>

                    <label className="input input-bordered flex items-center gap-2 mb-6">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 16 16"
                            fill="currentColor"
                            className="h-4 w-4 opacity-70">
                            <path
                                fillRule="evenodd"
                                d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
                                clipRule="evenodd" />
                        </svg>
                        <input type="password" name='password' placeholder='Password' />
                    </label>

                    <button type='submit' className='btn btn-primary w-full'>Sign In</button>
                </form>

                <div className='text-center mt-6'>
                    <p className='mb-6 text-[#444444] text-lg font-medium'>Or Sign In with</p>
                    <div className='space-x-5 mb-6'>
                        <button className='bg-[#F5F5F8] p-4 rounded-full'><FcGoogle className='text-3xl ' /></button>
                        <button className='bg-[#F5F5F8] p-4 rounded-full'><FaFacebookF className='text-[#3B5998] text-3xl' /></button>
                        <button className='bg-[#F5F5F8] p-4 rounded-full'><FaGithub className='text-3xl' /></button>
                    </div>
                    <p className='text-[#737373] text-lg'>Not have an account? <span className='text-[#FF3811] font-medium'><Link href={"/signup"} >Sign Up</Link></span></p>
                </div>
            </div>
        </div>
    );
};

export default page;