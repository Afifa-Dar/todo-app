import { Dancing_Script } from "next/font/google";
// import { useRouter } from 'next/router';
import { headers } from "next/headers";
import { Signup } from '@/components/signup';
import { Login } from "@/components/login";


const dancingScript = Dancing_Script({
  weight: "700",
  subsets: ["latin"],
});

export default function Auth({ params }: {
  params: { mode: string }
}) {
  // const router = useRouter();
  // const { mode } = router.query;

  // const referer = headers().get('domain') || ''
  // console.log(referer , 'ref')
  // const pathname = new URL(referer).pathname; // Extract pathname from URL
  // console.log(pathname)
  // Get the last segment after splitting by '/'
 // const mode = pathname.split('/').filter(segment => segment)[1]; 
  const mode = params.mode
  
  return (
    <main className="bg-gradient-to-br from-black via-blue-950 to-purple-950 w-full h-screen text-white">
      <div className="grid grid-cols-12 grid-rows-1 h-full p-10">
        <div
          className="col-span-7 border-none rounded-l-3xl"
          style={{
            backgroundImage: "url('/signup-bg.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        ></div>
        <div className="col-span-5 bg-gray-200 border-none rounded-r-3xl">
          <h1
            className={`${dancingScript.className} capitalize text-purple-950 text-6xl font-extrabold italic text-center pt-10 pb-5`}
          >
            {mode}
          </h1>
          <hr
            className=" bg-purple-950"
            style={{
              color: "purple",
              height: 2,
              width: "50%",
              margin: "auto",
            }}
          />
          {
            mode == 'signup'? <Signup/> : <Login/>
          }
          
        </div>
      </div>
    </main>
  );
}
