"use client"
import { signOut, useSession } from 'next-auth/react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';
import { AiOutlineShopping } from "react-icons/ai";
import { CiSearch } from "react-icons/ci";


const Navbar = () => {

    const pathName = usePathname();
    const session = useSession();

    const navItems = [
        {
            title: "Home",
            path: "/"
        },
        {
            title: "About",
            path: "/about"
        },
        {
            title: "Services",
            path: "/services"
        },
        {
            title: "MyBookings",
            path: "/my-booking"
        },
        {
            title: "Blog",
            path: "/blog"
        },
        {
            title: "Contact",
            path: "/contact"
        },
    ]

    return (
        <div className='bg-base-100'>
            <div className='container mx-auto'>
                <div className="navbar ">
                    <div className="navbar-start">
                        <Link href={"/"}>
                            <Image src={"/assets/logo.svg"} alt={"logo"} width={100} height={100} />
                        </Link>
                    </div>

                    <div className="navbar-center hidden lg:flex items-center space-x-10">
                        {
                            navItems.map((item) => (
                                <Link className={`font-semibold text-[#444444] hover:text-primary duration-300 ${pathName == item.path && "text-[#FF3811]"}`} href={item.path} key={item.path}>{item.title}</Link>
                            ))
                        }
                    </div>

                    <div className="navbar-end flex items-center space-x-5">
                        <AiOutlineShopping className='text-2xl' />
                        <CiSearch className='text-2xl' />
                        <a className="btn btn-outline btn-primary px-6 shadow-md">Appointment</a>
                    </div>

                    {session?.data?.user && <Image className='rounded-full w-[50px] h-[50px] ml-4' src={session?.data?.user?.image} alt={session?.data?.user?.name} height={100} width={100} />}
                    
                    {!session.data ?
                        <Link href={"/login"}><button className='btn btn-primary ml-4 px-5'>Login</button></Link> :
                        
                        <button onClick={()=> signOut()} className='btn btn-primary ml-4 px-5 border-orange-700'>Logout</button>
                    }
                </div>
            </div>
        </div>
    );
};

export default Navbar;