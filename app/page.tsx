import { SessionWrapper } from "@/components/sessionWrapper";
import Login from "@/components/login/login";
import SignOut
 from "@/components/login/signout"; ;
import {auth} from "@/lib/auth"

export default async function Home() {
  const session = await auth()
  const isAuthennticated = !!session?.user

  return(
    <div
  style={{
    backgroundImage: "url('/gg.jpg')",
    backgroundSize: "cover", 
    backgroundPosition: "center", 
  }}
  className="flex relative items-center justify-center h-screen"
>
  
  <div className="w-[43%]  mt-10 flex absolute top-0 items-center justify-items-center max-h-screen rounded-md bg-gradient-to-tr from-pink-300 to-cyan-500">
    <SessionWrapper>
      {isAuthennticated ? <SignOut /> : <Login />}
    </SessionWrapper>
  </div>
</div>

  )
 }