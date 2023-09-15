import { Helmet } from "react-helmet-async";
import Contact from "../../components/Contact/Contact";
import Footer from "../../components/Footer/Footer";
import HeroSection from "../../components/HeroSection/HeroSection";
import MidHero from "../../components/MidHero/MidHero";
import SampleServices from "../../components/Services/SampleServices";
import Testimonials from "../../components/Testimonials/Testimonials";

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Jerins Parlour | Home</title>
        <link rel="Home" href="https://www.chipotle.com" />
        <meta name="Jerins Parlour" value="Home" />
      </Helmet>
      <HeroSection></HeroSection>
      <SampleServices></SampleServices>
      <MidHero></MidHero>

      <Testimonials></Testimonials>

      <Contact></Contact>
      <Footer></Footer>
    </>
  );
};

export default Home;
