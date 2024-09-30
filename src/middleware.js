import { NextResponse } from "next/server"

export const middleware = async (request) => {

    const cookies = request.cookies;
    const token = cookies.get("__Secure-next-auth.session-token");

    const pathName = request.nextUrl.pathname;

    if (pathName.includes("api")) {
        return NextResponse.next();
    }

    if (!token){
        return NextResponse.redirect(new URL(`/login?redirect=${pathName}`, request.url))
    }

    return NextResponse.next();
}

export const config = {
    matcher: [ "/my-booking/:path*", "/services/:path*", "/checkout/:path*" ]
}