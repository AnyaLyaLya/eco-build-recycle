import 'swiper/css';
import 'swiper/css/pagination';
import { Swiper, SwiperClass, SwiperSlide } from 'swiper/react';
import { slider } from '../../utils/slider';
import { useEffect, useRef, useState } from "react";
import cn from 'classnames';

export const Slider = () => {  
  const [slidesPerView, setSlidesPerView] = useState(getSlidesPerView());
  const [isStart, setIsStart] = useState(true);
  const [isEnd, setIsEnd] = useState(false);
  const swiperRef = useRef<SwiperClass | null>(null);

  useEffect(() => {
    const handleResize = () => {
      setSlidesPerView(getSlidesPerView());
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  function getSlidesPerView() {
    const screenWidth = window.innerWidth;

    if (screenWidth >= 1400) {
      return 3.2; 
    } else if (screenWidth >= 1200) {
      return 2.5;
    } else if (screenWidth >= 768) {
      return 2.2;
    } else if (screenWidth >= 376) {
      return 1.2;
    }
  }

  return (
    <div className="slider" id='services'>
      <div className="slider__top">
        <h1 className='slider__title'>Why choose our service?</h1>

        <div className="slider__nav">
          <button onClick={() => swiperRef.current?.slidePrev()} className="slider__button" disabled={isStart}>
            <svg 
              width="70" 
              height="70" 
              viewBox="0 0 70 70" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg" 
              className={cn('slider__button--svg', {'slider__button--disabled': isStart})}
            >
              <circle cx="35" cy="35" r="34.5" stroke="#7CB83F"/>
              <path d="M48 35L22 35M22 35L35 48M22 35L35 22" stroke="#7CB83F" stroke-width="2"/>
            </svg>
          </button>

          <button onClick={() => swiperRef.current?.slideNext()} className="slider__button" disabled={isEnd}>
            <svg 
              width="70" 
              height="70" 
              viewBox="0 0 70 70" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg" 
              className={cn('slider__button--svg', {'slider__button--disabled': isEnd})}
            >
              <circle cx="35" cy="35" r="34.5" stroke="#7CB83F"/>
              <path d="M22 35H48M48 35L35 22M48 35L35 48" stroke="#7CB83F" stroke-width="2"/>
            </svg>
          </button>
        </div>
      </div>

      <Swiper
        navigation
        onSwiper={(swiper) => {
          setIsStart(true);
          setIsEnd(swiper.isEnd);
          swiperRef.current = swiper;
        }}
        onSlideChange={(swiper) => {
          setIsStart(swiper.isBeginning);
          setIsEnd(swiper.isEnd);
        }}
        spaceBetween='20px'
        slidesPerView={slidesPerView}
      >
        {slider.map((slide, index) => (
          <SwiperSlide>
            <div className='slider__slide' key={index}>
              <img src={slide.logo} alt={slide.title}  className="slider__slide--img"/>

              <h2 className="slider__slide--title">
                {slide.title}
              </h2>

              <p className="slider__slide--text">
                {slide.text}
              </p>
            </div>
          </SwiperSlide>
       ))}
      </Swiper>
    </div>
  );
}