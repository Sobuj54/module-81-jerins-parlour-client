import image from "../../assets/images/engin-akyurt-g-m8EDc4X6Q-unsplash 1.png";

const MidHero = () => {
  return (
    <section className="py-10 bg-gradient-to-b from-green-50 to-green-100 sm:py-16 lg:py-32">
      <div className="max-w-6xl px-4 mx-auto sm:px-6 lg:px-8">
        <div className="grid items-center grid-cols-1 lg:items-stretch lg:grid-cols-2 gap-y-8 gap-x-12 xl:gap-x-20">
          <div className="aspect-w-4 aspect-h-3">
            <img
              className="object-cover w-full h-full rounded-xl"
              src={image}
              alt="skin care"
            />
          </div>

          <div className="flex flex-col justify-between md:py-5">
            <h2 className="font-bold text-4xl md:text-5xl capitalize ">
              Let us handle your skin{" "}
              <span className="text-green-600">Professionally.</span>
            </h2>
            <blockquote>
              <p className="text-base leading-relaxed text-black mt-7">
                Jerins Parlour is your destination for beauty and self-care. Our
                team of expert professionals is dedicated to enhancing your
                natural radiance through a range of services, from hairstyling
                to skincare. With a commitment to quality, we create a welcoming
                and eco-conscious environment where you can indulge in
                self-pampering. Join us for an unforgettable beauty experience.
                Contact us today to schedule your appointment and discover your
                true beauty potential.
              </p>
            </blockquote>

            <div className="mt-10  flex items-center gap-7 md:gap-16">
              <div>
                <h2 className="text-4xl md:text-5xl text-green-600 font-extrabold">
                  500+
                </h2>
                <p className="text-base md:text-lg font-semibold mt-4">
                  Happy Customer
                </p>
              </div>
              <div>
                <h2 className="text-4xl md:text-5xl text-green-600 font-extrabold">
                  16+
                </h2>
                <p className="text-base md:text-lg font-semibold mt-4">
                  Total Services
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MidHero;
