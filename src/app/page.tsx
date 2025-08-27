import AboutComponent from "@/components/AboutComponent";
import HomeComponent from "@/components/HomeComponent";

import PortfolioComponent from "@/components/portfolio/PortfolioComponent";

export default function Home() {
  return (
    <>       
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
