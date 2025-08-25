
import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
     <html lang="en">
      <body className="min-h-screen bg-[linear-gradient(to_bottom_right,_#010209_4%,_#200859_100%)] text-white">
        <main className="relative">
          {children}
        </main>
      </body>
    </html>
  );
}
