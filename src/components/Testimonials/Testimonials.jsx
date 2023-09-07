import Swiper from "react-id-swiper";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";

const Testimonials = () => {
  const params = {
    slidesPerView: 3,
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  };

  return (
    <Swiper {...params}>
      <div className="bg-green-500 h">Slide #1</div>
      <div>Slide #2</div>
      <div>Slide #3</div>
      <div>Slide #4</div>
      <div>Slide #5</div>
    </Swiper>
  );
};

export default Testimonials;
