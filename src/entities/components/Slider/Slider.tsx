import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import "./styles.scss";

// import required modules
import SwiperCore, { Navigation, Pagination } from "swiper";
import { FC, useState } from "react";
import { HiArrowLongLeft, HiArrowLongRight } from "react-icons/hi2";
import { useWindowDimensions } from "../../../shared";
import { Card } from "../Card/Card";
import { SwiperType } from "../../types/Swiper";

SwiperCore.use([Navigation]);

interface Props {
  type?: "cards";
}

export const Slider: FC<Props> = (): JSX.Element => {
  const [swiperCards, setSwiperCards] = useState<SwiperType>();

  const [prevActiveCards, setPrevActiveCards] = useState(true);
  const [nextActiveCards, setNextActiveCards] = useState(false);

  const isActiceCards = () => {
    setPrevActiveCards(
      1 === Number(swiperCards && swiperCards?.activeIndex + 1)
    );
    setNextActiveCards(
      Number(swiperCards?.slides?.length) ===
        Number(swiperCards && swiperCards?.activeIndex + 3)
    );
  };

  const { width } = useWindowDimensions();

  return (
    <div className="slider_container">
      <Swiper
        onSwiper={(s) => setSwiperCards(s)}
        slidesPerView={width < 1200 ? (width < 700 ? 1 : 2) : 3}
        spaceBetween={30}
        modules={[Pagination]}
        pagination={true}
        onSlideChange={() => isActiceCards()}
        style={{ padding: "10px" }}
      >
        {[1, 2, 3, 4, 5].slice(0, 8).map((e) => {
          return (
            <SwiperSlide key={e}>
              <Card />
            </SwiperSlide>
          );
        })}
      </Swiper>
      {
        <div
          className="prev"
          onClick={() => swiperCards && swiperCards.slidePrev()}
        >
          <HiArrowLongLeft
            className={`arrow_prev ${prevActiveCards && "active"}`}
          />
        </div>
      }
      {
        <div
          className="next"
          onClick={() => swiperCards && swiperCards.slideNext()}
        >
          <HiArrowLongRight
            className={`arrow_next ${nextActiveCards && "active"}`}
          />
        </div>
      }
    </div>
  );
};
