import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import SymptomCard from './SymptomCard';

const Slider = ({ conditions }) => {
  return (
    <div className="slider">
      <div className="slider__track">
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={false}
          modules={[Autoplay,  Navigation]} 
          className="mySwiper"
        >
          {Object.entries(conditions).map(([condition, symptoms]) => (
            <SwiperSlide key={condition}> 
              <SymptomCard title={condition} symptoms={symptoms} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Slider;