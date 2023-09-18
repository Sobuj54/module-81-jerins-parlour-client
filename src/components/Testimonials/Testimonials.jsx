import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";
import { Rating, Star } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";

const myStyles = {
  itemShapes: Star,
  activeFillColor: "#ffb700",
  inactiveFillColor: "#fbf1a9",
};

const Testimonials = () => {
  const [testimonials, setTestimonials] = useState([]);

  useEffect(() => {
    fetch("https://jerins-parlour-server-three.vercel.app/reviews")
      .then((res) => res.json())
      .then((data) => setTestimonials(data));
  }, []);

  return (
    <section className="my-16 md:my-24 px-3 md:px-10">
      <h2 className="text-4xl md:text-6xl font-bold text-center">
        Testimonials
      </h2>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 50,
          },
        }}
        modules={[Pagination]}
        className="mySwiper">
        {testimonials.map((testimonial) => (
          <SwiperSlide key={testimonial._id}>
            <div className="p-5 mt-10 md:mt-16 mb-5 md:mb-10 flex flex-col h-auto justify-between">
              <div className="flex items-center mb-5">
                <img
                  src={testimonial.img}
                  alt={testimonial.name}
                  className="h-14 w-14 rounded-full object-cover"
                />
                <div className="ml-6">
                  <h3 className="text-xl md:text-2xl font-bold">
                    {testimonial.name}
                  </h3>
                  <h4 className="text-base md:text-lg font-semibold">
                    {testimonial.profession}
                  </h4>
                </div>
              </div>
              <p className="text-sm md:text-base">{testimonial.comment}</p>
              <Rating
                className="mt-6"
                style={{ maxWidth: 200 }}
                value={testimonial.rating}
                itemStyles={myStyles}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Testimonials;
