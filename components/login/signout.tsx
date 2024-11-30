"use client"
import { signOut } from "next-auth/react";
export default function SignOut (){
    return(
        <div>
            <button className="px-4 py-2 mx-auto  bg-black text-white rounded-lg items-center" onClick={()=>signOut()}>
                  Sign Out
            </button>
        </div>
    )
}

