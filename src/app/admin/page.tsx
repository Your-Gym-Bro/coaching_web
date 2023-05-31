'use client'
import React from "react";
import { useAuthContext } from "../../context/AuthContext";
import { useRouter } from "next/navigation";
function Page() {
    const { user } = useAuthContext();
    const router = useRouter()

    React.useEffect(() => {
        if (user == null) router.push("/")
    }, [user])

    return (<div>
        <h1>Only logged in users can view this page</h1>
        <h2>
            {user?.email}
        </h2>
        <h2>
            {user?.uid}
        </h2>

    </div>
    );
}

export default Page;