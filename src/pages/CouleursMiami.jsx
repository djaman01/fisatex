import Footer from "../components/Footer";
import Header from "../components/Header";

import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {
  bleu1,
  bleu2,
  divers1,
  marron1,
  orange1,
  pourpre1,
  rose1,
  verre1,
} from "../assets/images/index-couleurs";

function Arrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        background: "black",
        borderRadius: "100%",
        cursor: "pointer",
        paddingTop: "0.5px",
      }}
      onClick={onClick}
    />
  );
}

const CouleursMiami = () => {
  const settings = {
    nextArrow: <Arrow />,
    prevArrow: <Arrow />,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptativeHeight: true,
    autoplay: true,
    autoplaySpeed: 5000,
    centerMode: true,
    centerPadding: "60px",
    draggable: true,
    pauseOnFocus: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1, //ça marche comme ça, si on met plus que 1 ça fait une erreur
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      <Header />

      <div className="rounded-2xl bg-[#EDF1FF] mt-10 mb-36">
        <Slider
          {...settings}
          className="mx-auto max-lg:mt-7 lg:h-[700px] lg:w-[900px]"
        >
          <div className="px-2 lg:h-[700px]">
            <img
              src={bleu1}
              alt="bleu 1"
              className="h-full w-full rounded-2xl border-4 border-black object-fill "
            />
          </div>

          <div className="px-2 lg:h-[700px]">
            <img
              src={verre1}
              alt="vert 1"
              className="h-full w-full rounded-2xl border-4 border-black object-fill "
            />
          </div>

          <div className="px-2 lg:h-[700px]">
            <img
              src={bleu2}
              alt="bleu 2"
              className="h-full w-full rounded-2xl border-4 border-black object-fill "
            />
          </div>

          <div className="px-2 lg:h-[700px]">
            <img
              src={orange1}
              alt="orange 1"
              className="h-full w-full rounded-2xl border-4 border-black object-fill "
            />
          </div>

          <div className="px-2 lg:h-[700px]">
            <img
              src={rose1}
              alt="rose 1"
              className="h-full w-full rounded-2xl border-4 border-black object-fill "
            />
          </div>

          <div className="px-2 lg:h-[700px]">
            <img
              src={marron1}
              alt="maaron 1"
              className="h-full w-full rounded-2xl border-4 border-black object-fill "
            />
          </div>

          <div className="px-2 lg:h-[700px]">
            <img
              src={divers1}
              alt="divers 1"
              className="h-full w-full rounded-2xl border-4 border-black object-fill "
            />
          </div>

          <div className="px-2 lg:h-[700px]">
            <img
              src={pourpre1}
              alt="pourpre 1"
              className="h-full w-full rounded-2xl border-4 border-black object-fill "
            />
          </div>
        </Slider>
      </div>

      <footer className="padding-x bg-gray-800 pb-8 pt-8">
        <Footer />
      </footer>
    </>
  );
};

export default CouleursMiami;
