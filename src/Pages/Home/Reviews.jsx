import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import Title from "../../Components/Title";
import ReactStarsRating from "react-awesome-stars-rating";
import { FaQuoteLeft } from "react-icons/fa6";
const Reviews = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch("review.json")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);
  return (
    <>
      <Title
        subHeading={"What Our Client Says"}
        heading={"testimonials"}
      ></Title>
      <Swiper
        navigation={true}
        modules={[Navigation]}
        className="mySwiper my-10"
      >
        {reviews.map((review) => (
          <SwiperSlide key={review._id}>
            <div className="text-center px-20 flex flex-col justify-center items-center space-y-5">
              <ReactStarsRating value={review.rating} className="flex gap-2" />
              <FaQuoteLeft size={100}/>
              <p className="w-2/3">{review.details}</p>
              <h3 className="text-2xl text-yellow-500">{review.name}</h3>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default Reviews;
