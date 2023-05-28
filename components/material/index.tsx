import { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { ArrowRightIcon, ArrowLeftIcon } from "@heroicons/react/outline";
import { Swiper as SwiperType} from 'swiper/types'

import SingleMaterial from "./single-material";

import "swiper/css";

const MATERIALS = [
  {
    title: 'Low-mission glass',
    image: '/images/material1.jpg'
  },
  {
    title: 'Itong block',
    image: '/images/material2.jpg'
  },
  {
    title: 'Heidelberg concrete',
    image: '/images/material3.jpg'
  },
  {
    title: 'HPL Panels',
    image: '/images/material4.jpeg'
  },
  {
    title: 'Caparol paint',
    image: '/images/material5.jpg'
  },
  {
    title: 'Caparol paint',
    image: '/images/material6.jpg'
  },
]


const Material = () => {
  const swiperRef = useRef<SwiperType | null>(null);
  const [disableButton, setDisableButton] = useState('first')

  const handleSlidePrev = () => {
    swiperRef.current?.slidePrev()

  }

  const handleSlideNext = () => {
    swiperRef.current?.slideNext()

  }

  const handleButtonDisable = (swiper: SwiperType) => {
    if(swiper.currentBreakpoint === '0'){
      if(swiper.realIndex === 0) {
        setDisableButton('first')
      } else if(swiper.realIndex === 3) {
        setDisableButton('second')
      } else {
        setDisableButton('')
      }
    } else {
      if(swiper.realIndex === 0) {
        setDisableButton('first')
      } else if(swiper.realIndex === 2) {
        setDisableButton('second')
      } else {
        setDisableButton('')
      }
    }
  }

  
  return (
    <section className="py-16">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="flex flex-col">
          <div className="mb-8 space-y-6 basis-1/3">
            <h4 className="text-5xl font-bold leading-tight">
              Building Materials
            </h4>
            <p className="max-w-sm text-xl font-semibold leading-8">
              High-quality energy-efficient building materials are used in the
              construction of <span className="font-bold">TURCVG</span>{" "}
              projects.
            </p>
            <div className="flex gap-x-4">
              <button
                className={`${disableButton === 'first' ? 'bg-light_blue' : 'bg-primary active:scale-110'} p-4 text-white transition duration-300 rounded-full `}
                onClick={handleSlidePrev}
                disabled={disableButton === 'first'}
              >
                <ArrowLeftIcon className="w-4" />
              </button>
              <button
                className={`${disableButton === 'second' ? 'bg-light_blue' : 'bg-primary active:scale-110'} p-4 text-white transition duration-300 rounded-full `}
                onClick={handleSlideNext}
                disabled={disableButton === 'second'}
              >
                <ArrowRightIcon className="w-4" />
              </button>
            </div>
          </div>
          <div className="flex ">
            <Swiper
              breakpoints={{
                0: {
                  slidesPerView: 3
                },
                1024: {
                  slidesPerView: 4
                }
              }}
              spaceBetween={40}
              slidesPerView={3}
              onSwiper={(swiper) => (swiperRef.current = swiper)}
              onSlideChange={handleButtonDisable}
              ref={swiperRef as any}
            >
              {MATERIALS.map((material,idx) => (
                <SwiperSlide key={idx}>
                  <SingleMaterial title={material.title} image={material.image} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Material;
