import { signIn } from 'next-auth/react';
import { useSearchParams } from 'next/navigation';
import React from 'react';
import { FaFacebookF, FaGithub } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';

const SocialSignIn = () => {

    // const router = useRouter();
    // const session = useSession();
    const searchParams = useSearchParams();
    const path = searchParams.get("redirect");

    const handleSocialLogin = async (provider) => {
        const res = await signIn(provider, {
            redirect: true,
            callbackUrl: path ? path : "/"
        });
        // console.log(res);
    }

    // if (session?.status === "authenticated") {
    //     router.push("/");
    // }

    return (
        <div>
            <div className='space-x-5 mb-6'>
                <button onClick={() => handleSocialLogin("google")} className='bg-[#F5F5F8] p-4 rounded-full'><FcGoogle className='text-3xl ' /></button>

                <button onClick={() => handleSocialLogin("facebook")} className='bg-[#F5F5F8] p-4 rounded-full'><FaFacebookF className='text-[#3B5998] text-3xl' /></button>

                <button onClick={() => handleSocialLogin("github")} className='bg-[#F5F5F8] p-4 rounded-full'><FaGithub className='text-3xl' /></button>
            </div>
        </div>
    );
};

export default SocialSignIn;