import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination } from 'swiper/modules';

export  function App() {
  return (
    <>
      <Swiper
        slidesPerView={'auto'}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>Slide 1</SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide>
      </Swiper>
    </>
  );
}


const Home = () => {
    return (
      
        <div className='z-1'>
             <h1 className="text-3xl font-semibold  mb-4">
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

<App></App>
        </div>
    );
};

export default Home;