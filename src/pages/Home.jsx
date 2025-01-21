import React, { useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

// import required modules
import { Autoplay, EffectCoverflow, Pagination } from 'swiper/modules';

export  function App() {
  return (
    <>
   <h1 className="text-3xl font-semibold text-center  mb-4">
                     Servises 
                </h1>
      <Swiper 
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={'3'}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[Autoplay,EffectCoverflow, Pagination]}
        className="mySwiper my-8"
      >
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-1.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-2.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-3.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-4.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-5.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-6.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-7.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-8.jpg" />
        </SwiperSlide>
        <SwiperSlide>
        <img src="https://swiperjs.com/demos/images/nature-4.jpg" />
        </SwiperSlide>
      </Swiper>
    </>
  );
}


const Home = () => {
    return (
      
        <div className='z-1'>
             <h1 className="text-3xl font-semibold text-center  mb-4">
                    MyPage Home
                </h1>
            <div className="carousel w-full ">
  <div 
   style={{
    height : '600px'
  }}
  id="slide1" className="carousel-item relative w-full h-80">
    <img
      src="/src/assets/carasol/c_img-1.jpg"
      style={{
        height : '600px'
      }}
      className="w-full" />
    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
      <a href="#slide4" className="btn btn-circle">❮</a>
      <a href="#slide2" className="btn btn-circle">❯</a>
    </div>
  </div>
  <div id="slide2" 
  style={{
    height : '600px'
  }}
  className="carousel-item relative w-full ">
    <img
      src="/src/assets/carasol/c_img-2.jpg"
      style={{
        height : '600px'
      }}
      className="w-full" />
    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
      <a href="#slide1" className="btn btn-circle">❮</a>
      <a href="#slide3" className="btn btn-circle">❯</a>
    </div>
  </div>
  <div 
   style={{
    height : '600px'
  }}
  id="slide3" className="carousel-item relative w-full h-80">
    <img
      src="/src/assets/carasol/c_img-3.jpg"
      style={{
        height : '600px'
      }}
      className="w-full" />
    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
      <a href="#slide2" className="btn btn-circle">❮</a>
      <a href="#slide4" className="btn btn-circle">❯</a>
    </div>
  </div>
  <div 
   style={{
    height : '600px'
  }}
  id="slide4" className="carousel-item relative w-full h-80">
    <img
      src="/src/assets/carasol/c_img-4.jpg"
      style={{
        height : '600px'
      }}
      className="w-full" />
    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
      <a href="#slide3" className="btn btn-circle">❮</a>
      <a href="#slide1" className="btn btn-circle">❯</a>
    </div>
  </div>
</div>

<App ></App>
        </div>
    );
};

export default Home;