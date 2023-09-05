import { Link } from "react-router-dom";
import heroImg from "../../assets/images/beautiful-young-asian-woman-touching-her-clean-face-with-fresh-healthy-skin-isolated-white-wall-beauty-cosmetics-facial-treatment-concept 1.png";

const HeroSection = () => {
  return (
    <div className="bg-gradient-to-b from-green-50 to-green-100">
      <section className="py-10 sm:py-14 lg:py-16">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="grid items-center grid-cols-1 gap-12 lg:grid-cols-2">
            <div className="order-2 lg:order-1">
              <h1 className="text-4xl font-bold text-black md:text-6xl lg:text-7xl">
                BEAUTY SALON FOR EVERY{" "}
                <div className="relative inline-flex">
                  <span className="absolute inset-x-0 bottom-0 border-b-[15px] sm:border-b-[20px] md:border-b-[30px] border-[#4ADE80]"></span>
                  <h1 className="relative text-4xl font-bold text-black sm:text-6xl lg:text-7xl">
                    WOMEN.
                  </h1>
                </div>
              </h1>

              <p className="mt-8 text-base text-black sm:text-xl">
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Velit officia consequat duis enim velit mollit.
                Exercitation veniam consequat.
              </p>

              <div className="mt-10 sm:flex sm:items-center sm:space-x-8">
                <Link
                  to="/"
                  title=""
                  className="inline-flex items-center justify-center px-10 py-4 text-base font-semibold text-white transition-all duration-200 bg-orange-500 hover:bg-orange-600 focus:bg-orange-600"
                  role="button">
                  {" "}
                  Get an Appointment{" "}
                </Link>
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <img className="w-full" src={heroImg} alt="beautiful girl" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HeroSection;
