import HeroSection from "../components/HeroSection";
import LogoTrain from "../components/LogoTrain";
import GrowWithHelix from "../components/GrowWithHelix";
import Products from "../components/Products";
import ServicesSolution from "../components/ServicesSolution";
import FooterQuote from "../components/FooterQuote";
import Agnostic from "../components/Agnostic";
import IndustryExperience from "../components/IndustryExperience";

const Home = () => {
  return (
    <div className="w-full flex-1 bg-white">
      <HeroSection />
      <LogoTrain />
      <GrowWithHelix />
      <Products />
      <ServicesSolution />
      <Agnostic />
      <IndustryExperience/>
      <FooterQuote />
    </div>
  );
};

export default Home;
