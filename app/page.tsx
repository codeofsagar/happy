"use client";

import RatesSection from "./components/RatesSection";
import Hero from "./components/Hero";
import ServicesSection from "./components/ServicesSection";
import StepsSection from "./components/StepsSection";
import SimulatorsSection from "./components/SimulatorsSection";

export default function Home() {

  return (
    <div className="flex flex-col w-full overflow-hidden">
      {/* Hero Section Animated */}
      <Hero />

      <ServicesSection />
      
      {/* How It Works Section */}
      <StepsSection />

      {/* Hours & Rates Section */}
     
         
        
      
     

      {/* Our Simulators Section */}
      <SimulatorsSection />
      {/* <SimulatorsSection /> */}

    </div>
  );
}
