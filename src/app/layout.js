

import "./globals.css";



export default function RootLayout({
  children, team
}) {
  return (
    <html lang="en">
      <body
        
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
