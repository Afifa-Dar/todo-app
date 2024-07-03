import Image from "next/image";
import Link from "next/link";

export default function Home() {
 
  return (
    <main
      className="w-full h-screen flex flex-col items-center justify-center"
      style={{
        backgroundImage: "url('/bg-image.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="flex flex-row -space-x-10 items-center">
        <Image src={"/todo-icon.png"} alt="" width={200} height={200}></Image>
        {/* <h1 className="text-7xl">Welcome to my To-do app</h1> */}
        <p className="text-6xl md:text-7xl font-extrabold bg-clip-text text-transparent bg-[linear-gradient(to_right,theme(colors.indigo.600),theme(colors.indigo.300),theme(colors.sky.600),theme(colors.fuchsia.600),theme(colors.sky.600),theme(colors.indigo.300),theme(colors.indigo.600))] bg-[length:200%_auto] animate-pulse">
          Welcome to my Todo
        </p>
        {/* <p className="text-6xl md:text-7xl font-extrabold bg-clip-text text-transparent bg-[linear-gradient(to_right,theme(colors.green.300),theme(colors.green.100),theme(colors.sky.400),theme(colors.yellow.200),theme(colors.sky.400),theme(colors.green.100),theme(colors.green.300))] bg-[length:200%_auto] animate-gradient">To</p>
          <p className="text-6xl md:text-7xl font-extrabold bg-clip-text text-transparent bg-[linear-gradient(to_right,theme(colors.purple.400),theme(colors.purple.100),theme(colors.pink.300),theme(colors.orange.400),theme(colors.pink.300),theme(colors.purple.100),theme(colors.purple.400))] bg-[length:200%_auto] animate-gradient">MystiReveal.com </p> */}
      </div>
      <p className=" italic text-purple-400 font-bold">
        Unlock your productivity potential. Sign up now to start organizing!
      </p>
      <div className="flex flex-row my-20 space-x-10">
        <Link href="auth/signup">
          <button className="bg-purple-700 text-purple-300 text-center rounded-lg py-5 font-bold text-lg w-32 animate-pulse">
            SignUp
          </button>
        </Link>
        <Link href="auth/login">
          <button className="bg-purple-700 text-purple-300 text-center rounded-lg py-5 font-bold text-lg w-32 animate-pulse">
            LogIn
          </button>
        </Link>
       
      </div>
    </main>
  );
}
