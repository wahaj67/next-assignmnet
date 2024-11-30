
import { SessionWrapper } from "@/components/sessionWrapper";
import Login
 from "@/components/login/login";
 import  SignOut  from "@/components/login/signout";
 import { auth } from "@/lib/auth";

 export default  async function Home(){
  const session = await auth()
  const isAuthenticated = !!session?.user

  return(
    <div
  style={{
    backgroundImage: "url('/backgrounds.jpg')",
    backgroundSize: "cover", 
    backgroundPosition: "center", 
  }}
  className="flex relative items-center justify-center h-screen"
>
  
  <div className="w-[43%] md:w-[43%] xl:w-[100%] mt-10 flex absolute top-0 items-center justify-items-center max-h-screen rounded-md bg-gradient-to-tr from-pink-300 to-cyan-500">
    <SessionWrapper>
      {isAuthenticated ? <SignOut /> : <Login />}
    </SessionWrapper>
  </div>
</div>

  )
 }