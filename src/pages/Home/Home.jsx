import { Helmet } from "react-helmet-async";
import Contact from "../../components/Contact/Contact";
import Footer from "../../components/Footer/Footer";
import HeroSection from "../../components/HeroSection/HeroSection";
import MidHero from "../../components/MidHero/MidHero";
import SampleServices from "../../components/Services/SampleServices";
import { Suspense, lazy } from "react";
// import Testimonials from "../../components/Testimonials/Testimonials";

const Testimonials = lazy(() =>
  import("../../components/Testimonials/Testimonials.jsx")
);

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
      <Suspense fallback={<div>Loading...</div>}>
        <Testimonials></Testimonials>
      </Suspense>
      <Contact></Contact>
      <Footer></Footer>
    </>
  );
};

export default Home;
