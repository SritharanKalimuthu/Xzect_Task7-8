import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Features from "./components/Features";
import Demo from "./components/Demo";
import Pricing from "./components/Pricing.jsx"
import Team from "./components/Team";
import Blog from "./components/Blog";

export default function Home() {
  return (
    <>
      <Navbar/>
      <Hero/>
      <Services/>
      <Features/>
      <Demo/>
      <Pricing/>
      <Team/>
      <Blog/>
    </>
  );
}
