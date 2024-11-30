"use client"
import { signOut } from "@/lib/auth";
export default function SignOut (){
    return(
        <div>
            <button className="px-4 py-2 bg-black text-white rounded-lg items-center" onClick={()=>signOut()}>
                  Sign Out
            </button>
        </div>
    )
}

