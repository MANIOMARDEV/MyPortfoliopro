import { useGSAP } from "@gsap/react";
import gsap from "gsap";

import AnimatedCounter from "../components/AnimatedCounter";
import Button from "../components/Button";
import { words } from "../constants";
import HeroExperience from "../components/Models/Hero_Models/HeroExperience";
import { resolveAssetPath } from "../utils/resolveAssetPath";

// Hero section component that showcases the main content of the portfolio, use stagger to increase delay in text
const Hero = () => {
  useGSAP(() => {
    gsap.fromTo(
      ".hero-text h1",
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, stagger: 0.2, duration: 1, ease: "power2.inOut" }
    );
  });


  return (
    <section id="hero" className="relative overflow-hidden">
      <div className="absolute top-0 left-0 z-10">
        <img src={resolveAssetPath("/images/bg.png")} alt="" />
      </div>
  
      {/* 🔧 FLEX LAYOUT + SPACING FIXED */}
      <section id="hero" className="relative overflow-hidden min-h-screen">
  {/* Background Layer */}
  <div className="absolute inset-0 z-0">
    <img src={resolveAssetPath("/images/bg.png")} alt="" className="w-full h-full object-cover opacity-10" />
  </div>

  {/* Hero Content Layout */}
  <div className="relative z-10 hero-layout flex flex-col-reverse md:flex-row items-center justify-between gap-12 w-full min-h-screen px-4 md:px-20">
    
    {/* LEFT: Text Content */}
    <header className="w-full md:w-1/2 flex flex-col justify-center gap-6 mt-8 md:mt-0 text-left">
      <div className="hero-text space-y-4">
        <h1 className="text-3xl md:text-5xl font-bold leading-tight">
          Shaping{" "}
          <span className="slide">
            <span className="wrapper">
              {words.map((word, index) => (
                <span
                  key={index}
                  className="flex items-center md:gap-3 gap-1 pb-2"
                >
                  <img
                    src={word.imgPath}
                    alt="person"
                    className="xl:w-12 xl:h-12 md:w-10 md:h-10 w-7 h-7 md:p-2 p-1 rounded-full bg-white"
                  />
                  <span>{word.text}</span>
                </span>
              ))}
            </span>
          </span>
        </h1>
        <h1 className="text-3xl md:text-5xl font-bold">into Real Projects</h1>
        <h1 className="text-3xl md:text-5xl font-bold">that Deliver Results</h1>
      </div>

      <p className="text-white text-lg md:text-xl max-w-xl">
        Hi, I’m Mani Omar , a developer based in Tunisia with a passion for code.
      </p>

      {/* Scroll Button */}
      <Button
        text="See My Work"
        className="md:w-80 md:h-16 w-60 h-12"
        id="counter"
      />
    </header>

    {/* RIGHT: 3D Model */}
    <figure className="w-full md:w-1/2 flex justify-center items-center">
      <div className="w-full max-w-[500px] h-[450px] md:h-[600px] overflow-hidden">
        <HeroExperience />
      </div>
    </figure>
  </div>
</section>

  {/* Below the Hero section */}
<section id="counter" className="bg-black py-20 px-4">
  <AnimatedCounter />
</section>
    </section>
  );
  

  
};

export default Hero;
