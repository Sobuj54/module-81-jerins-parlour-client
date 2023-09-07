import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";

const Testimonials = () => {
  const [testimonials, setTestimonials] = useState([]);

  useEffect(() => {
    fetch("testimonials.json")
      .then((res) => res.json())
      .then((data) => setTestimonials(data));
  }, []);

  return (
    <section className="my-24">
      <h2 className="text-6xl font-bold text-center">Testimonials</h2>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper">
        {testimonials.map((testimonial) => (
          <SwiperSlide key={testimonial.id}>
            <div className="p-5 mt-16 mb-10">
              <div className="flex items-center mb-5">
                <img
                  src={testimonial.img}
                  alt={testimonial.name}
                  className="h-14 w-14 rounded-full"
                />
                <div className="ml-6">
                  <h3 className="text-2xl font-bold">{testimonial.name}</h3>
                  <h4 className="text-lg font-semibold">
                    {testimonial.profession}
                  </h4>
                </div>
              </div>
              <p>{testimonial.comment}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Testimonials;
