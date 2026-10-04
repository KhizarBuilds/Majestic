import Navbar from "@/components/navigation/Navbar";
import HeroSection from "@/components/hero/HeroSection";
import BrandManifesto from "@/components/sections/BrandManifesto";
import FeaturedGame from "@/components/sections/FeaturedGame";
import WorldsSlider from "@/components/sections/WorldsSlider";
import StudioCulture from "@/components/sections/StudioCulture";
import DispatchesJournal from "@/components/sections/DispatchesJournal";
import FinalCallToAction from "@/components/sections/FinalCallToAction";
import Footer from "@/components/footer/Footer";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-[#050505] text-[#c8c8c8] flex flex-col selection:bg-[#f2f2f2] selection:text-[#050505]">
      {/* 00 / Minimal Navigation */}
      <Navbar />

      {/* 01 / Cinematic Hero Opening */}
      <HeroSection />

      {/* 02 / Studio Manifesto & Philosophy */}
      <BrandManifesto />

      {/* 03 / Flagship Experience: AETHERIUS */}
      <FeaturedGame />

      {/* 04 / Active Worlds Horizontal Slider */}
      <WorldsSlider />

      {/* 05 / Studio Hubs & Architectural Culture */}
      <StudioCulture />

      {/* 06 / Technical Intelligence & Dispatches */}
      <DispatchesJournal />

      {/* 07 / Final Statement & Direct Communiqué */}
      <FinalCallToAction />

      {/* 08 / Studio Matrix Footer */}
      <Footer />
    </main>
  );
}
