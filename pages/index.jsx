import { useSession } from "next-auth/react";

const { default: Layout } = require("@/components/layout")

const Home = () => {
  const {data: session} = useSession();

  if(!session){
    return <div>sign in</div>
  }

  return <Layout>
    <div className="flex justify-between">
      <h1>hello <b>{session.user.name}</b></h1>
     <div className=" flex  bg-gray-300 gap-2 p-2 rounded-lg overflow-hidden">
     <img src={session.user.image} className="w-6 h-6 rounded-full " alt="" />
      <h2>{session.user.name}</h2>
     </div>
      </div>
  </Layout>
}

export default Home;