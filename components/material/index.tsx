import { useRef, useState } from "react";
import { useTranslation } from "next-i18next";
import { Swiper, SwiperSlide } from "swiper/react";
import { Swiper as SwiperType } from "swiper/types";
import { ArrowRightIcon, ArrowLeftIcon } from "@heroicons/react/outline";

import SingleMaterial from "./single-material";

import "swiper/css";

const Material = () => {
  const swiperRef = useRef<SwiperType | null>(null);
  const [disableButton, setDisableButton] = useState("first");
  const { t } = useTranslation();

  const MATERIALS = [
    {
      title: t("residence.material.materials.low-mission-glass"),
      image: "/images/material1.jpg",
    },
    {
      title: t("residence.material.materials.itong-block"),
      image: "/images/material2.jpg",
    },
    {
      title: t("residence.material.materials.heidelberg-concrete"),
      image: "/images/material3.jpg",
    },
    {
      title: t("residence.material.materials.hpl-panels"),
      image: "/images/material4.jpeg",
    },
    {
      title: t("residence.material.materials.caparol-paint"),
      image: "/images/material5.jpg",
    },
    {
      title: t("residence.material.materials.caparol-paint"),
      image: "/images/material6.jpg",
    },
  ];

  const handleSlidePrev = () => {
    swiperRef.current?.slidePrev();
  };

  const handleSlideNext = () => {
    swiperRef.current?.slideNext();
  };

  const handleButtonDisable = (swiper: SwiperType) => {

    if (swiper.currentBreakpoint === "0") {
      if (swiper.realIndex === 0) {
        setDisableButton("first");
      } else if (swiper.realIndex === 5) {
        setDisableButton("second");
      } else {
        setDisableButton("");
      }
    } else if (swiper.currentBreakpoint === "400") {
      if (swiper.realIndex === 0) {
        setDisableButton("first");
      } else if (swiper.realIndex === 4) {
        setDisableButton("second");
      } else {
        setDisableButton("");
      }
    }else if (swiper.currentBreakpoint === "768") {
      if (swiper.realIndex === 0) {
        setDisableButton("first");
      } else if (swiper.realIndex === 3) {
        setDisableButton("second");
      } else {
        setDisableButton("");
      }
    } else {
      if (swiper.realIndex === 0) {
        setDisableButton("first");
      } else if (swiper.realIndex === 2) {
        setDisableButton("second");
      } else {
        setDisableButton("");
      }
    }
  };

  return (
    <section className="py-16">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="flex flex-col">
          <div className="mb-8 space-y-6 basis-1/3">
            <h4 className="text-4xl font-bold leading-tight sm:text-5xl">
              {t("residence.material.building-materials")}
            </h4>
            <p className="max-w-sm text-lg font-semibold leading-8 sm:text-xl md:max-w-3xl">
              {t("residence.material.header")}
            </p>
            <div className="flex gap-x-4">
              <button
                className={`${disableButton === "first"
                    ? "bg-light_blue"
                    : "bg-primary active:scale-110"
                  } p-4 text-white transition duration-300 rounded-full `}
                onClick={handleSlidePrev}
                disabled={disableButton === "first"}
              >
                <ArrowLeftIcon className="w-4" />
              </button>
              <button
                className={`${disableButton === "second"
                    ? "bg-light_blue"
                    : "bg-primary active:scale-110"
                  } p-4 text-white transition duration-300 rounded-full `}
                onClick={handleSlideNext}
                disabled={disableButton === "second"}
              >
                <ArrowRightIcon className="w-4" />
              </button>
            </div>
          </div>
          <div className="flex ">
            <Swiper
              breakpoints={{
                0: {
                  slidesPerView: 1,
                },
                400: {
                  slidesPerView: 2
                },
                768: {
                  slidesPerView: 3,
                },
                1024: {
                  slidesPerView: 4,
                },
              }}
              spaceBetween={40}
              onSwiper={(swiper) => (swiperRef.current = swiper)}
              onSlideChange={handleButtonDisable}
              ref={swiperRef as any}
            >
              {MATERIALS.map((material, idx) => (
                <SwiperSlide key={idx}>
                  <SingleMaterial
                    title={material.title}
                    image={material.image}
                  />
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
