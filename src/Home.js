import HomeSection from "./HomeSection";
import About from "./About";
import Blog from "./Blog";
import Work from "./Work";
import Contact from "./Contact";
import usePreloader from "./hooks/usePreloader";

function Home() {
  usePreloader();

  return (
    <>
      {/* HOME  */}
      <HomeSection />

      {/* ABOUT  */}
      <About />

      {/* BLOG  */}
      <Blog />

      {/* WORK  */}
      <Work />

      {/* CONTACT  */}
      <Contact />
    </>
  );
}

export default Home;
