import { NextResponse } from 'next/server'
import { NextRequest } from 'next/server'
import { userInterface } from './types/userTypes';
import { jwtDecode } from "jwt-decode";

const roleBaseRoutes = {
    ADMIN: ["/dashboard"],
    DOCTOR: ["/dashboard/doctor"],
    PATIENT: ["/dashboard/patient", "/dashboard/appoinments", "/dashboard/medical-records"],
}

const authRoutes = ['/login', '/register', '/forgot-password'];

// This function can be marked `async` if using `await` inside
export async function proxy(request: NextRequest) {

    const accessToken = request.cookies.get('accessToken')?.value;
    const refreshToken = request.cookies.get('refreshToken')?.value;

    // console.log("accessToken", refreshToken);
    

    const { pathname } = request.nextUrl;

    if (!accessToken && !refreshToken && authRoutes.includes(pathname)) {
        return NextResponse.redirect(
            new URL(`/login`, request.url) /// acc & refresh token jodi na thake taile login page a redirect korbe and pathName ta o show korbe.
        )
    }

    let user: userInterface | null;

    if (accessToken) {
        try {
            user = jwtDecode(accessToken) // bcrypt theke plain object a niye ashlam.
        } catch (error) { // login page a redirect korbe and pathname ta show korbe
            console.log("Error decoding access token:", error);
            return NextResponse.redirect(
                new URL(`/login?redirect=${pathname}`, request.url)
            );
        }
    }
console.log("user", user);

    if ( refreshToken) {
        try {
            const refreshRes = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/auth/refresh-token`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ refreshToken })
            })

            if (!refreshRes.ok) {
                const newAccessToken = request.cookies.get("accessToken")?.value;
                user = jwtDecode(newAccessToken!) /// newAccessToken! => ami sure kore bollam newAccessToken ashbei
                return NextResponse.next();
            } else {
                const response = NextResponse.redirect(
                    new URL(`/login?redirect=${pathname}`, request.url)
                );

                response.cookies.delete("accessToken");
                response.cookies.delete("refreshToken");
                return response;
            }
        } catch (error) {
            console.log("Error refreshing token:", error);
            const response = NextResponse.redirect(
                new URL(`/login?redirect=${pathname}`, request.url)
            );
            response.cookies.delete("accessToken");
            response.cookies.delete("refreshToken");
            return response;
        }
    }

    // if(user){
    //     const allowedRoutes = user ? roleBaseRoutes[user.role] : [];
    //     if(allowedRoutes && allowedRoutes.some((r)=> pathname.startsWith(r))){
    //         return NextResponse.next();
    //     }else{
    //         return NextResponse.redirect(new URL(`/unauthorized`, request.url))
    //     }
    // }

    // if(user && authRoutes.includes(pathname)){
    //     return NextResponse.redirect(new URL('/'));
    // }

    return NextResponse.next()
}

// See "Matching Paths" below to learn more
export const config = {
    matcher: ['/dashboard/:path*', '/services/:path*', '/login', '/register', '/forgot-password'],
}