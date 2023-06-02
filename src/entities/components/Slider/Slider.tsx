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
import { ImageCard } from "../ImageCard/ImageCard";
import { useDocument } from "../../../widgets/store/document.store";

SwiperCore.use([Navigation]);

interface Props {
  type?: "cards" | "documents" | "documentsM";
}

export const Slider: FC<Props> = ({ type }): JSX.Element => {
  const [swiperCards, setSwiperCards] = useState<SwiperType>();
  const [swiperCardsDocument, setSwiperCardsDocument] = useState<SwiperType>();
  const [swiperCardsDocumentM, setSwiperCardsDocumentM] =
    useState<SwiperType>();

  const [prevActiveCards, setPrevActiveCards] = useState(true);
  const [nextActiveCards, setNextActiveCards] = useState(false);

  const [prevActiveCardsDocument, setPrevActiveCardsDocument] = useState(true);
  const [nextActiveCardsDocument, setNextActiveCardsDocument] = useState(false);

  const [prevActiveCardsDocumentM, setPrevActiveCardsDocumentM] =
    useState(true);
  const [nextActiveCardsDocumentM, setNextActiveCardsDocumentM] =
    useState(false);

  const isActiceCards = () => {
    setPrevActiveCards(
      1 === Number(swiperCards && swiperCards?.activeIndex + 1)
    );
    setNextActiveCards(
      Number(swiperCards?.slides?.length) ===
        Number(swiperCards && swiperCards?.activeIndex + 3)
    );
  };
  const isActiceCardsD = () => {
    setPrevActiveCardsDocument(
      1 === Number(swiperCardsDocument && swiperCardsDocument?.activeIndex + 1)
    );
    setNextActiveCardsDocument(
      Number(swiperCardsDocument?.slides?.length) ===
        Number(swiperCardsDocument && swiperCardsDocument?.activeIndex + 3)
    );
  };

  const isActiceCardsM = () => {
    setPrevActiveCardsDocumentM(
      1 ===
        Number(swiperCardsDocumentM && swiperCardsDocumentM?.activeIndex + 1)
    );
    setNextActiveCardsDocumentM(
      Number(swiperCardsDocumentM?.slides?.length) ===
        Number(swiperCardsDocumentM && swiperCardsDocumentM?.activeIndex + 1)
    );
  };

  const { width } = useWindowDimensions();
  const { setIsActive } = useDocument();

  switch (type) {
    case "documents":
      return (
        <div className="slider_container">
          <Swiper
            onSwiper={(s) => setSwiperCardsDocument(s)}
            slidesPerView={width < 1200 ? (width < 700 ? 1 : 2) : 3}
            spaceBetween={30}
            modules={[Pagination]}
            pagination={true}
            onSlideChange={() => isActiceCardsD()}
            style={{ padding: "10px" }}
          >
            {[1, 2, 3, 4, 5].slice(0, 8).map((e) => {
              return (
                <SwiperSlide key={e}>
                  <div onClick={() => setIsActive(true)}>
                    <ImageCard url="https://arqtobacco.com/upload/medialibrary/6ca/syyur9yx40kwupdkj17vq18f5wv3fbji/09.png" />
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
          {
            <div
              className="prev"
              onClick={() =>
                swiperCardsDocument && swiperCardsDocument.slidePrev()
              }
            >
              <HiArrowLongLeft
                className={`arrow_prev ${prevActiveCardsDocument && "active"}`}
              />
            </div>
          }
          {
            <div
              className="next"
              onClick={() =>
                swiperCardsDocument && swiperCardsDocument.slideNext()
              }
            >
              <HiArrowLongRight
                className={`arrow_next ${nextActiveCardsDocument && "active"}`}
              />
            </div>
          }
        </div>
      );

    case "documentsM":
      return (
        <div className="slider_container">
          <Swiper
            onSwiper={(s) => setSwiperCardsDocumentM(s)}
            slidesPerView={1}
            spaceBetween={30}
            modules={[Pagination]}
            pagination={true}
            onSlideChange={() => isActiceCardsM()}
            style={{ padding: "10px" }}
          >
            {[1, 2, 3, 4, 5].slice(0, 8).map((e) => {
              return (
                <SwiperSlide key={e}>
                  <div onClick={() => setIsActive(true)}>
                    <ImageCard url="https://arqtobacco.com/upload/medialibrary/6ca/syyur9yx40kwupdkj17vq18f5wv3fbji/09.png" />
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
          {
            <div
              className="prev prev2"
              onClick={() =>
                swiperCardsDocumentM && swiperCardsDocumentM.slidePrev()
              }
            >
              <HiArrowLongLeft
                className={`arrow_prev ${prevActiveCardsDocumentM && "active"}`}
              />
            </div>
          }
          {
            <div
              className="next next2"
              onClick={() =>
                swiperCardsDocumentM && swiperCardsDocumentM.slideNext()
              }
            >
              <HiArrowLongRight
                className={`arrow_next ${nextActiveCardsDocumentM && "active"}`}
              />
            </div>
          }
        </div>
      );
    default:
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
  }
};
