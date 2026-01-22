import Image from "next/image";

export default async function Home() {

 await new Promise((resolve)=>setTimeout(resolve ,3000)) 

  return (
   <div className="text-black" >
    Hello From Home
   </div>
  );
}
