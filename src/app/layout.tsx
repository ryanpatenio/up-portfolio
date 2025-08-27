
import "./globals.css";
import NavBar from "@/components/NavBar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
     <html lang="en">
      <body className="min-h-screen bg-[linear-gradient(to_bottom_right,_#010209_4%,_#200859_100%)] text-white">
         <section id="header" className="w-full bg-transparent z-50 sticky top-0 ">
            <NavBar />
         </section>
         
        <main className="relative">
          {children}
        </main>
      </body>
    </html>
  );
}
