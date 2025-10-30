
const checkAuthStatus = async ()=> {
    try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/auth/me`, {
            method: "GET",
            headers: {
                "content-type": "application/json"
            },
            credentials: "include" /// access and get cookie data
        })

        const data = await res.json();

        if(!res.ok){
            throw new Error("Faild to fatch authentication status.")
        }

        return {
            isAuthenticated: true,
            user: data?.data
        }

    } catch (error) {
        console.log(error);
        return {
            isAuthenticated: false,
            user: null
        }        
    }
}

export default checkAuthStatus;