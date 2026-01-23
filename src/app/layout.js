

import "./globals.css";
import { Poppins } from 'next/font/google';


const poppins = Poppins({
   weight: ['400', '700'], // Specify the weights you need
  subsets: ['latin'],
})


export default function RootLayout({
  children, team
}) {
  return (
    <html lang="en">
      <body
        className={poppins.className}
      >
        <div className="min-h-screen bg-white flex">
        <div className="w-[50%] ">
          Navbar
          {children}

          Footer
        </div>
        <div className="w-[50%] bg-black">{team}</div></div>
      </body>
    </html>
  );
}
