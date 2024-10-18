import Footer from "../components/Footer";
import Header from "../components/Header";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { IoArrowBackOutline } from "react-icons/io5";

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

const ColorComp = ({
  color1,
  color2,
  color3,
  color4,
  color5,
  color6,
  color7,
  color8,

  alt1,
  alt2,
  alt3,
  alt4,
  alt5,
  alt6,
  alt7,
  alt8,

  bgColor,
  hoverBgColor,
}) => {
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
              src={color1}
              alt={alt1}
              className="h-full w-full rounded-2xl border-4 border-black object-fill "
            />
          </div>

          <div className="px-2 lg:h-[700px]">
            <img
              src={color2}
              alt={alt2}
              className="h-full w-full rounded-2xl border-4 border-black object-fill "
            />
          </div>

          <div className="px-2 lg:h-[700px]">
            <img
              src={color3}
              alt={alt3}
              className="h-full w-full rounded-2xl border-4 border-black object-fill "
            />
          </div>

          <div className="px-2 lg:h-[700px]">
            <img
              src={color4}
              alt={alt4}
              className="h-full w-full rounded-2xl border-4 border-black object-fill "
            />
          </div>

          <div className="px-2 lg:h-[700px]">
            <img
              src={color5}
              alt={alt5}
              className="h-full w-full rounded-2xl border-4 border-black object-fill "
            />
          </div>

          <div className="px-2 lg:h-[700px]">
            <img
              src={color6}
              alt={alt6}
              className="h-full w-full rounded-2xl border-4 border-black object-fill "
            />
          </div>

          {/* Il y a forcement 6 images, mais pas 8 en fonction du tissus: donc je dis que si color7 existe alors montre une image avec un cadre, pour que s'il n'y a rien, on ne voit pas un cadre vide */}
          {color7 && (
            <div className="px-2 lg:h-[700px]">
              <img
                src={color7}
                alt={alt7}
                className="h-full w-full rounded-2xl border-4 border-black object-fill "
              />
            </div>
          )}

          {color8 && (
            <div className="px-2 lg:h-[700px]">
              <img
                src={color8}
                alt={alt8}
                className="h-full w-full rounded-2xl border-4 border-black object-fill "
              />
            </div>
          )}
        </Slider>
      </div>

      <div className="mb-20 mt-[-90px] flex justify-center">
        <Link to="/gants" onClick={scrollToBottom}>
          <button className={`mt-2 flex h-[34px] w-80 justify-center rounded-full ${bgColor} bg-gradient-to-r font-bold text-white transition duration-150 ease-in-out ${hoverBgColor}`}>
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

export default ColorComp;
