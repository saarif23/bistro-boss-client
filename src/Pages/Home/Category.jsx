import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/free-mode';
import Title from '../../Components/Title';

const Category = () => {
    return (
        <section>
            <Title
                subHeading={"From 11.00 am to  10.00 pm"}
                heading={"ORDER ONLINE"}
            > </Title>
            <Swiper
                slidesPerView={4}
                spaceBetween={30}
                freeMode={true}
                pagination={{
                    clickable: true,
                }}
                modules={[FreeMode, Pagination]}
                className="mySwiper mb-10 "
            >
                <SwiperSlide>
                    <img src="https://i.ibb.co/L67k2bP/slide1.jpg" alt="" />
                    <p className='text-3xl text-center -mt-16 text-white  uppercase '>Salads</p>
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://i.ibb.co/523PP62/slide2.jpg" alt="" />
                    <p className='text-3xl text-center -mt-16 text-white  uppercase '>Pizzas</p>
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://i.ibb.co/hWBL7SW/slide3.jpg" alt="" />
                    <p className='text-3xl text-center -mt-16 text-white  uppercase '>Soups</p>
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://i.ibb.co/nmjRZgn/slide4.jpg" alt="" />
                    <p className='text-3xl text-center -mt-16 text-white  uppercase '>Desserts</p>
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://i.ibb.co/L67k2bP/slide1.jpg" alt="" />
                    <p className='text-3xl text-center -mt-16 text-white  uppercase '>Salads</p>
                </SwiperSlide>

            </Swiper>
        </section>
    );
};

export default Category;




