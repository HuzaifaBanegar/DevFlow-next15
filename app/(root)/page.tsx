import { auth, signOut } from "@/auth";
import { Button } from "@/components/ui/button";
import { redirect } from "next/dist/server/api-utils";
import Image from "next/image";
import ROUTES from "@/constants/route";


const Home = async() => {
  const session = await auth();
  console.log(session);
  return (
  <>
  <h1 className="text-3xl">Welcome to next js 15</h1>
  <h1 className="text-3xl font-space-grotesk">Welcome to next js 15</h1>
  <form className="px-10 pt-[100px]"
    action={async()=>{
      "use server"
      await signOut({redirectTo:ROUTES.SIGN_IN})
    }}>
    <Button type="submit">Log out</Button>
  </form>

  </>)
};

export default Home;
