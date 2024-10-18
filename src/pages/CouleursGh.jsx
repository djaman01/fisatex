import Footer from "../components/Footer";
import Header from "../components/Header";

import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import {
  bleuGH,
  diversGH,
  grisGH,
  marronGH,
  roseGH,
  vertGH,
} from "../assets/images/indexGH";

import { Link } from "react-router-dom";
import { IoArrowBackOutline } from "react-icons/io5";

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

const CouleursGh = () => {
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
              src={bleuGH}
              alt="bleu GH"
              className="h-full w-full rounded-2xl border-4 border-black object-fill "
            />
          </div>

          <div className="px-2 lg:h-[700px]">
            <img
              src={roseGH}
              alt="rose GH"
              className="h-full w-full rounded-2xl border-4 border-black object-fill "
            />
          </div>

          <div className="px-2 lg:h-[700px]">
            <img
              src={vertGH}
              alt="vert GH"
              className="h-full w-full rounded-2xl border-4 border-black object-fill "
            />
          </div>

          <div className="px-2 lg:h-[700px]">
            <img
              src={marronGH}
              alt="marron GH"
              className="h-full w-full rounded-2xl border-4 border-black object-fill "
            />
          </div>

          <div className="px-2 lg:h-[700px]">
            <img
              src={grisGH}
              alt="gris GH"
              className="h-full w-full rounded-2xl border-4 border-black object-fill "
            />
          </div>

          <div className="px-2 lg:h-[700px]">
            <img
              src={diversGH}
              alt="divers GH"
              className="h-full w-full rounded-2xl border-4 border-black object-fill "
            />
          </div>
        </Slider>
      </div>

      <div className="mb-20 mt-[-90px] flex justify-center">
        <Link to="/gants" onClick={scrollToBottom}>
          <button className=" mt-2 flex h-[34px] w-80 justify-center rounded-full bg-[#1D77C3] bg-gradient-to-r font-bold text-white transition duration-150 ease-in-out hover:bg-[#00539C]">
            <div className="my-auto mr-2">
              <IoArrowBackOutline size={25} />
            </div>
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

export default CouleursGh;
