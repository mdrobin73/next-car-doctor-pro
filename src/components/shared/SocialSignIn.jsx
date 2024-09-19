import { signIn, useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import React from 'react';
import { FaFacebookF, FaGithub } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';

const SocialSignIn = () => {

    const router = useRouter();
    const session = useSession();

    const handleSignIn = async (provider) => {
        const res = await signIn(provider, {redirect: false});
        console.log(res);
    }

    if (session?.status === "authenticated") {
        router.push("/");
    }

    return (
        <div>
            <div className='space-x-5 mb-6'>
                <button onClick={() => handleSignIn("google")} className='bg-[#F5F5F8] p-4 rounded-full'><FcGoogle className='text-3xl ' /></button>

                <button onClick={() => handleSignIn("facebook")} className='bg-[#F5F5F8] p-4 rounded-full'><FaFacebookF className='text-[#3B5998] text-3xl' /></button>

                <button onClick={() => handleSignIn("github")} className='bg-[#F5F5F8] p-4 rounded-full'><FaGithub className='text-3xl' /></button>
            </div>
        </div>
    );
};

export default SocialSignIn;