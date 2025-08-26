import AboutComponent from "@/components/AboutComponent";
import HomeComponent from "@/components/HomeComponent";
import NavBar from "@/components/NavBar";
import PortfolioComponent from "@/components/portfolio/PortfolioComponent";


export default function Home() {
  return (
    <>
      <section id="header" className="w-full bg-transparent z-50 sticky top-0 ">
        <NavBar />
      </section>
       <section id="home" className="min-h-screen bg-transparent px-6 py-6 ">
          <HomeComponent />
       </section>
       <section id="about" className="min-h-screen bg-transparent px-6 py-6">
          <AboutComponent />
       </section>

       <section id="portfolio" className="min-h-screen bg-transparent px-6 py-6">
          <PortfolioComponent />
       </section>

      {/* <footer className="py-6 bg-transparent text-center">
        <p>© 2025 My Portfolio</p>
      </footer> */}
    </>
  );
}
