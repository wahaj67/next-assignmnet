import { SessionWrapper } from "@/components/sessionWrapper"
import Login from "@/components/login/login"
import SignOut from "@/components/login/signout"
import { auth } from "@/lib/auth"
export default async function Home(){
  const session =  await auth()
  const isAuthenticated = !!session?.user
  return(<div
    style={{
      backgroundImage: "url('/backgrounds.jpg')",
      backgroundSize: "cover", // Image ko poora area cover karne ke liye
      backgroundPosition: "center", // Center align karne ke liye
    }}
    className="flex relative items-center justify-center h-screen "
  >
    
    <div className="w-[40%]  mt-10 flex absolute top-0 items-center justify-items-center max-h-screen opacity-80 drop-shadow-2xl  rounded-lg bg-gradient-to-tr from-pink-300 to-cyan-500">
      <SessionWrapper>
        {isAuthenticated ? <SignOut /> : <Login />}
      </SessionWrapper>
    </div>
  </div>
  )
}  