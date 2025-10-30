/* eslint-disable @typescript-eslint/no-explicit-any */

const loginUser = async (email: string, password: string) => {
    try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/auth/login`, {
            method: "POST",
            headers: {
                "content-type" : "application/json"
            },
            body: JSON.stringify({email, password}),
            credentials: "include" // set cookie in browser
         })

        const data = await res.json();
        return data;
    } catch (error: any) {
        throw new Error(error|| "An error occrred while logging in.")
    }
}

export default loginUser;