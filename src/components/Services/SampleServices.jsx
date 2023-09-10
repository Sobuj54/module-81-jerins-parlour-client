import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const SampleServices = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/services?limit=3`)
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);

  return (
    <section className="py-10 bg-white sm:py-16 lg:py-24">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">
            Our Awesome Services
          </h2>
        </div>

        <div className="grid max-w-md grid-cols-1 gap-10 mx-auto mt-8 text-center lg:max-w-full lg:mt-16 lg:grid-cols-3">
          {services.map((service) => (
            <div
              key={service._id}
              className="overflow-hidden bg-green-50 border-2 border-green-100 shadow-lg shadow-green-300 rounded-md">
              <div className="p-6 xl:px-6">
                <img
                  src={service.img}
                  alt={service.title}
                  className="rounded-lg"
                />
                <h3 className="text-xl md:text-3xl font-semibold mt-3 font-sans">
                  {service.title}
                </h3>
                <p className="text-xl md:text-3xl font-bold mt-5 text-green-600">
                  ${service.price}
                </p>
                <p className="mt-3 text-sm md:text-base text-dark/80">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
        <Link
          to="/services"
          className="flex items-center justify-center w-9/12 md:w-3/12 mx-auto px-10 py-4 mt-9 md:mt-14 mb-8 text-base font-semibold text-white transition-all duration-200 bg-gradient-to-r from-green-500 to-blue-500 rounded-md hover:from-blue-500 hover:to-green-500"
          role="button">
          {" "}
          Explore More{" "}
        </Link>
      </div>
    </section>
  );
};

export default SampleServices;
