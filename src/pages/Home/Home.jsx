import Contact from "../../components/Contact/Contact";
import Footer from "../../components/Footer/Footer";
import HeroSection from "../../components/HeroSection/HeroSection";
import MidHero from "../../components/MidHero/MidHero";
import SampleServices from "../../components/Services/SampleServices";

const Home = () => {
  return (
    <>
      <HeroSection></HeroSection>
      <SampleServices></SampleServices>
      <MidHero></MidHero>
      <Contact></Contact>
      <Footer></Footer>
    </>
  );
};

export default Home;
