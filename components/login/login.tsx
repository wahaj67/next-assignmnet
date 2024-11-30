"use client"

import { signIn } from "@/lib/auth"

export default function Login(){
    return(
        <div>
            <h1>Login</h1>

            <button onClick={()=> signIn("github")}>
                login with Github

            </button>
        </div>
    )
}