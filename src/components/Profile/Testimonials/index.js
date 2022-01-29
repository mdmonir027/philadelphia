import React, { useEffect, useRef, useState } from 'react';
import {
  FaAngleLeft,
  FaAngleRight,
  FaCommentAlt,
  FaStar,
} from 'react-icons/fa';
import { Navigation } from 'swiper';
// Import Swiper styles
import 'swiper/css';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import Testimonial from './Testimonial';
const Testimonials = () => {
  const prevBtnRef = useRef(null);
  const nextBtnRef = useRef(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    if (!prevBtnRef.current && !nextBtnRef.current && !isLoaded) {
      setIsLoaded(true);
    }
  }, [nextBtnRef, prevBtnRef, isLoaded]);
  return (
    <div className='border px-7 py-4 mt-5 rounded-md'>
      <div className='border-b pb-4 mb-4'>
        <div className='flex gap-2 items-center'>
          <FaStar className='text-primary text-xl' />
          <p className='text-3xl  font-bold text-primary-black'>4.96</p>
        </div>
        <p className='font-normal mt-1 text-gray-600'>
          Avg. score based on 235 reviews
        </p>
      </div>
      <div>
        <Swiper
          spaceBetween={0}
          slidesPerView={1}
          modules={[Navigation]}
          // navigation={true}
          navigation={{
            prevEl: prevBtnRef.current,
            nextEl: nextBtnRef.current,
          }}
          onBeforeInit={(swiper) => {
            swiper.params.navigation.prevEl = prevBtnRef.current;
            swiper.params.navigation.nextEl = nextBtnRef.current;
          }}
        >
          <SwiperSlide>
            <Testimonial />
          </SwiperSlide>
          <SwiperSlide>
            <Testimonial />
          </SwiperSlide>
          <div className='flex justify-between mt-7'>
            <div className='flex gap-x-2 items-center'>
              <div
                className='bg-gray-200 p-4 rounded-md text-gray-500 flex justify-center items-center cursor-pointer'
                ref={prevBtnRef}
              >
                <FaAngleLeft />
              </div>
              <div
                className='bg-gray-200 p-4 rounded-md text-gray-500 flex justify-center items-center cursor-pointer'
                ref={nextBtnRef}
              >
                <FaAngleRight />
              </div>
            </div>
            <div className='bg-gray-200 px-4 py-2 text-gray-500 rounded-md flex gap-x-2 items-center cursor-pointer'>
              <FaCommentAlt />
              <p>All Review</p>
            </div>
          </div>
        </Swiper>
      </div>
    </div>
  );
};

export default Testimonials;
