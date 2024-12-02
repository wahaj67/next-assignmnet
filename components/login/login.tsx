"use client"
import { FaFacebook } from "react-icons/fa";
import { signIn } from "next-auth/react"
import { FaGoogle } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";


export default function Login(){
    return(
        <div className="mx-auto ">
            <h1 className="text-center text-2xl font-sans font-medium">Login</h1>
            
             <div className="flex flex-col gap-5 mt-5">

             
            <button className="mx-auto flex gap-4 px-4 py-2  hover:animate-pulse shadow-lg rounded-lg bg-gradient-to-br from-sky-600 to bg-green-300 text-black hover:bg-green-700 hover:text-white" onClick={()=> signIn("github")}>
                  <FaGithub size={20}/>      Sign In with Github

            </button>
            <button className="mx-auto flex gap-4 px-4 py-2 hover:animate-pulse shadow-lg rounded-lg bg-gradient-to-br from-sky-600 to bg-green-300 text-black hover:bg-green-700 hover:text-white" onClick={()=>signIn("google")}>
             <FaGoogle size={20}/>   Sign In with Google 
            </button>
            {/* <button  className="mx-auto gap-2 flex px-4 py-2 hover:animate-pulse shadow-lg rounded-lg bg-gradient-to-br from-sky-600 to bg-green-300 text-black
             hover:bg-green-700 hover:text-white
            
            "
              
            onClick={()=> signIn("facebook")}>
             <FaFacebook  size={20}/>  Sign In with facebook 
            </button> */}
            </div>
            
        </div>
    )
}

