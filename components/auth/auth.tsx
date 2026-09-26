"use client"

import {signIn, signOut, useSession} from "next-auth/react"
import Image from "next/image"

export default function LoginButton() {
    const { data: session, status } = useSession();

    if(status === "loading")
        return <div className="w-10 h-10 rounded-full bg-gray-200 animate-pulse"/>

    if(session?.user?.image) {
        return(
            <button
                onClick={() => signOut()}
                className="relative w-10 h-10 rounded-full overflow-hidden border-2 border-gray-300 hover:opacity-80 transition"
                title="Sign Out">
                <Image src={session.user.image}
                       alt={session.user.name || "User Avatar"}
                       fill
                       className="object-cover"/>
            </button>
        );
    }

    return(
        <button onClick={() => signIn("google")}
                className="relative w-10 h-10 rounded-full overflow-hidden border-2 border-gray-300 hover:opacity-80 transition">
            <Image src="/icons/unknown-user.svg" alt="Unknown User" fill className="object-cover"/>
        </button>
    )
}