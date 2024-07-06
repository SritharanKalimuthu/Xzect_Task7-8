import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Features from "./components/Features";
import Demo from "./components/Demo";
import Pricing from "./components/Pricing.jsx"
import Team from "./components/Team";
import Blog from "./components/Blog";
import Community from "./components/Community";
import Contact from "./components/Contact";
import Footer from "./components/Footer"

export default function Home() {
  return (
    <main>
      <Navbar/>
      <Hero/>
      <Services/>
      <Features/>
      <Demo/>
      <Pricing/>
      <Team/>
      <Blog/>
      <Community/>
      <Contact/>
      <Footer/>
    </main>
  );
}
