'use client'
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default  function Home() {

  const navigate = useRouter()

 //await new Promise((resolve)=>setTimeout(resolve ,3000)) 

  return (
   <div className="text-black flex flex-col" >
    <Link href={'/'}>Hello From Home</Link>
     <Link href={'/profile'}>Profile</Link>
      <Link href={'/About'}>About</Link>
      <button onClick={()=>navigate.push('/dashboard')} className="bg-black text-white p-2 w-[20%] h-[20%] cursor-pointer ">
         Click Me
      </button>
   </div>
  );
}
