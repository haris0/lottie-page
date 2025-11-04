"use client";
import { useState, useRef } from "react";
import Header from "@/components/header/Header";
import style from "./page.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import Link from "next/link";
import TutorCard from "@/components/tutor-card/TutorCard";

const Tutorial = () => {
  const [swiper, setSwiper] = useState<SwiperCore | null>(null);
  const [isEnd, setIsEnd] = useState(false);

  const handleNext = () => {
    swiper?.slideNext();
  };

  return (
    <div className={style.container}>
      <Header showBackButton={true} />
      <Swiper
        onSwiper={setSwiper}
        spaceBetween={50}
        slidesPerView={1}
        pagination={{ clickable: true }}
        modules={[Pagination]}
        onSlideChange={(swiper) => setIsEnd(swiper.isEnd)}
        className={style.swiperContainer}
      >
        <SwiperSlide>
          <div className={style.slide}>
            <TutorCard text="Professionals around the world shared how they feel about technology and I've listened. Now it's your turn."/>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={style.slide}>
            <TutorCard text="I'll ask you a handful of meaningful questions and compare your responses with people in your industry."/>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={style.slide}>
            <TutorCard text="You'll get insights into current industry sentiments and a reality check about technology in a few minutes. Deal? Great!"/>
          </div>
        </SwiperSlide>
      </Swiper>
      <footer className={style.footer}>
        {isEnd ? (
          <Link href="/forms" className={style.start_link}>
            <button className={style.start_button}>Get started</button>
          </Link>
        ) : (
          <button className={style.continue_button} onClick={handleNext}>Continue</button>
        )}
      </footer>
    </div>
  );
};

export default Tutorial;
