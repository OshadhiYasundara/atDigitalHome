import React from "react";
import Navbar from "./components/Navbar";
import ServiceComponent from "./components/ServiceComponent";
import FAQSection from "./components/FAQSection";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";

function App() {
  return (
    <div >
      <Navbar />
<HeroSection/>

<div className="xl:px-40 lg:px-16 sm:px-10 lg:gap-12 grid ">
<ServiceComponent align={'left'} image={"/webDev.png"} title={"Web & Mobile App Development"} description={"Your web and mobile Apps are pieces of the puzzle to grow your business. We use frameworks which tailor content and engagement methods to respond to different intents shown by your potential customers who interact with your business online."}/>

<ServiceComponent align={'right'} image={"/consulting.png"} title={"Digital Strategy Consulting"} description={"Your digital strategy should complement the overall marketing strategy of the company. In online marketing, each component will never work in isolation and every business needs a different mix. We provide a clear concept and strategic overview to find the most efficient model for your business."}/>

<FAQSection/>
</div>
<Footer/>
    </div>
  );
}

export default App;
