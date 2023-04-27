import Navbar from "@/components/nav"
import { useSession, signIn, signOut } from "next-auth/react"

export default function Layout({children}) {
  const { data: session } = useSession()
  if(!session) {
    return <>
    Not signed in <br/>
    <div className="'bg-blue-900 w-screen h-screen flex items-center">
        <div className="text-center w-full">
          <button onClick={() => signIn('facebook')} className="bg-black text-white p-2 px-4 rounded-lg"> login with facebook</button>
        </div>
      </div>
  </> }
  return <div> 
  <div className="bg-blue-900 min-h-screen flex">
  < Navbar />
    
    <h1 className="bg-white flex-grow mt-2 mr-2 rounded-lg mb-2 p-4">
        {children}</h1>
   <br/>
  </div>
</div>
}




{/* <button onClick={() => signOut()}>Sign out</button> */}
