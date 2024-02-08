import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/free-mode";
import Title from "../../Components/Title";
import img from "../../assets/home/chef-service.jpg";

const Category = () => {
  return (
    <section>
      <Title subHeading={"From 11.00 am to  10.00 pm"} heading={"ORDER ONLINE"}>
        {" "}
      </Title>
      <Swiper
        slidesPerView={4}
        spaceBetween={30}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
        className="mySwiper mb-16 "
      >
        <SwiperSlide>
          <img src="https://i.ibb.co/L67k2bP/slide1.jpg" alt="" />
          <p className="text-3xl text-center -mt-20  font-semibold uppercase ">
            Salads
          </p>
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://i.ibb.co/523PP62/slide2.jpg" alt="" />
          <p className="text-3xl text-center -mt-20  font-semibold uppercase pb-5">
            Pizzas
          </p>
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://i.ibb.co/hWBL7SW/slide3.jpg" alt="" />
          <p className="text-3xl text-center -mt-20  font-semibold uppercase pb-5">
            Soups
          </p>
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://i.ibb.co/nmjRZgn/slide4.jpg" alt="" />
          <p className="text-3xl text-center -mt-20  font-semibold uppercase pb-5">
            Desserts
          </p>
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://i.ibb.co/L67k2bP/slide1.jpg" alt="" />
          <p className="text-3xl text-center -mt-20  font-semibold uppercase pb-5">
            Salads
          </p>
        </SwiperSlide>
      </Swiper>
      <div
        className="h-[500px] bg-cover bg-center flex justify-center items-center"
        style={{ backgroundImage: `url(${img})` }}
      >
        <div className="text-black text-center space-y-3 bg-white w-2/3 mx-auto p-20  ">
          <h3 className="text-3xl font-semibold uppercase">Bistro Boss</h3>
          <p className="text-justify">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maxime
            itaque sunt quo, earum libero facere at possimus eos assumenda fuga
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, vero!
          </p>
        </div>
      </div>
    </section>
  );
};

export default Category;
