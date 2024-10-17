import Footer from "../components/Footer";
import Header from "../components/Header";

import Slider from "react-slick";

import { IoArrowBackOutline } from "react-icons/io5";

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
  vert1,
} from "../assets/images/index-couleurs";

import { Link } from "react-router-dom";

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

  // To go instantly to the bottom of the page
  const scrollToBottom = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: "instant",
    });
  };

  return (
    <>
      <Header />

      <div className="mb-36 mt-10 rounded-2xl bg-[#EDF1FF]">
        <Slider
          {...settings}
          className="mx-auto max-lg:mt-7 lg:h-[700px] lg:w-[900px]"
        >
          <div className="px-2 lg:h-[700px]">
            <img
              src={vert1}
              alt="bleu 1"
              className="h-full w-full rounded-2xl border-4 border-black object-fill "
            />
          </div>

          <div className="px-2 lg:h-[700px]">
            <img
              src={bleu1}
              alt="vert 1"
              className="h-full w-full rounded-2xl border-4 border-black object-fill "
            />
          </div>

          <div className="px-2 lg:h-[700px]">
            <img
              src={orange1}
              alt="bleu 2"
              className="h-full w-full rounded-2xl border-4 border-black object-fill "
            />
          </div>

          <div className="px-2 lg:h-[700px]">
            <img
              src={bleu2}
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

      <div className="mb-20 mt-[-90px] flex justify-center">
        <Link to="/gants" onClick={scrollToBottom}>
          <button className=" flex justify-center mt-2 h-[34px] w-80 rounded-full bg-green-500 bg-gradient-to-r font-bold text-white transition duration-150 ease-in-out hover:bg-green-600">
            <div className="my-auto mr-2">< IoArrowBackOutline size={25} /></div>
            <div className=" my-auto">Retour</div>
          </button>
        </Link>
      </div>

      <footer className="padding-x bg-gray-800 pb-8 pt-8">
        <Footer />
      </footer>
    </>
  );
};

export default CouleursMiami;
