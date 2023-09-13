import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link, useLocation } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import useAuthContext from "../../customHooks/useAuthContext";

const Services = () => {
  const { user } = useAuthContext();
  const [services, setServices] = useState([]);
  const location = useLocation();

  useEffect(() => {
    fetch(`http://localhost:5000/services?limit=0`)
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);

  const handleBooking = (id, img, title, price, description) => {
    const { displayName, email, photoURL } = user;

    const bookingInfo = {
      service_id: id,
      img,
      title,
      price,
      description,
      userName: displayName,
      email,
      photoURL,
      isPaid: false,
    };

    fetch("http://localhost:5000/bookings", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(bookingInfo),
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        if (data.insertedId) {
          toast.success("Booking Successful !", {
            position: toast.POSITION.TOP_CENTER,
          });
        } else {
          toast.error("Something went wrong !", {
            position: toast.POSITION.TOP_LEFT,
          });
        }
      });
  };

  return (
    <section className="py-10 bg-white sm:py-16 lg:py-24">
      <Helmet>
        <title>Jerins Parlour | Services</title>
        <meta name="description" content="Parlour Services" />
      </Helmet>
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">
            All Of Our Services
          </h2>
        </div>

        <div className="grid max-w-md grid-cols-1 gap-12 lg:gap-8 mx-auto mt-8 text-center lg:max-w-full lg:mt-16 lg:grid-cols-3">
          {services.map((service) => (
            <div
              key={service._id}
              className="overflow-hidden bg-green-50 border-2 border-green-200  rounded-md shadow-lg shadow-green-300">
              <div className="p-6 xl:px-6">
                <img
                  src={service.img}
                  alt={service.title}
                  className="rounded-lg h-56 object-cover"
                />
                <h3 className="text-xl md:text-3xl font-semibold mt-3 font-sans">
                  {service.title}
                </h3>
                <p className="text-xl md:text-3xl font-bold mt-5 text-green-600">
                  ${service.price}
                </p>
                <p className="mt-3 text-sm md:text-base h-48 overflow-y-auto text-dark/80">
                  {service.description}
                </p>

                {user ? (
                  <button
                    onClick={() =>
                      handleBooking(
                        service._id,
                        service.img,
                        service.title,
                        service.price,
                        service.description
                      )
                    }
                    className="inline-flex items-center justify-center px-8 md:px-10 py-3 md:py-4 mt-10 text-base font-semibold text-white transition-all duration-200 bg-gradient-to-r from-pink-500 to-blue-500 rounded-md hover:from-blue-500 hover:to-pink-500"
                    role="button">
                    {" "}
                    Book Service{" "}
                  </button>
                ) : (
                  <Link
                    to="/login"
                    state={{ from: location }}
                    replace={true}
                    className="inline-flex items-center justify-center px-8 md:px-10 py-3 md:py-4 mt-10 text-base font-semibold text-white transition-all duration-200 bg-gradient-to-r from-pink-500 to-blue-500 rounded-md hover:from-blue-500 hover:to-pink-500"
                    role="button">
                    {" "}
                    Book Service{" "}
                  </Link>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
      <ToastContainer />
    </section>
  );
};

export default Services;
