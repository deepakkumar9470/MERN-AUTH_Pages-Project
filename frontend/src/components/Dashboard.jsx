import React from "react";
import { Link } from "react-router-dom";
import { Search, User } from "lucide-react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Navbar from "./Navbar";
import { useSelector } from "react-redux";
import { catCards, categories } from "../data/data";
const Dashboard = () => {
  const { userInfo } = useSelector((state) => state.auth);
  var settings = {
    className: "center",
    centerMode: true,
    centerPadding: "60px",
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 3000,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
          dots: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
        },
      },
    ],
  };

  return (
    <>
      <Navbar />
      <div className="w-full px-8 mx-auto flex items-center gap-2 justify-between md:px-20 py-4 mb-4 md:mb-0 md:py-5">
        <Link
          className="text-4xl tracking-wider text-darkRed1 font-extrabold"
          to="/"
        >
          Wedsurf
        </Link>

        <div className="flex items-center gap-1 relative">
          <User className="w-[50px] h-[50px] p-2 rounded-full bg-gray-300 cursor-pointer" />
          <p className="flex items-center justify-center rounded-full bg-gray-100 w-[25px] h-[25px] text-xl text-gray-700 font-bold absolute right-[-20%] top-[50%] cursor-pointer">
            {userInfo ? userInfo?.name.slice(0, 1) : "D"}
          </p>
        </div>
      </div>

      {/* Search bar */}
      <div className="w-full px-5 md:px-0 md:w-[60%] mx-auto flex rounded">
        <input
          type="text"
          className="w-full px-4 py-4 md:py-6 tracking-wider bg-lightGrey1 text-2xl 
                     placeholder:text-darkGrey1 placeholder:text-2xl 
                      text-darkGrey1 font-medium  rounded-s-2xl placeholder:text-2xl 
                      placeholder:text-darkGrey1 placeholder:text-xl md:placeholder:text-2xl   
                      focus:outline-none"
          placeholder="Search events, banquet...."
        />
        <button className="px-4 md:px-6 py-2 md:py-4 text-lightGrey1 bg-darkRed2 rounded-2xl  ">
          <Search className="w-12 h-12 md:w-10 md:h-10" />
        </button>
      </div>

      {/* Slider */}
      <div
        className="flex items-center justify-center mx-auto mt-10 md:mt-14
                      overflow-x-hidden overflow-y-hidden"
      >
        <Slider
          {...settings}
          className="w-full h-[40vh]  gap-2 py-3 px-4 md:px-20"
        >
          {categories.map((item, i) => (
            <div kay={i} className="flex items-center gap-6">
              <div className="w-full h-full flex items-center justify-center ml-2 mr-2">
                <img
                  className="w-full h-full object-contain rounded-2xl"
                  src={item.imageUrl}
                  alt={item.title}
                />
              </div>
            </div>
          ))}
        </Slider>
      </div>

      {/* Categories */}
      <div className="flex flex-col items-center justify-center gap-5 py-2 mb-28">
        <p className="text-4xl text-darkGrey2 font-extrabold py-4">
          Dive in
        </p>

        <div className="grid grid-cols-2 md:grid-cols-2 gap-4">
          {catCards.map((item, i) => (
            <div
              key={item.title}
              className="flex items-center flex-col gap-x-0 gap-y-4  bg-darkRed3 
              justify-center rounded-3xl w-[220px] h-[220px] md:w-[320px] md:h-[320px] 
             cursor-pointer relative overflow-hidden px-2 md:px-0"
            >
              <img
                className=":w-full h-auto absolute top-[10%] block left-[-35%] 
              object-cover"
                src={item.imageUrl}
                alt={item.title}
              />
              <p
                className="text-4xl tracking-wide w-[200px]
                          text-center  text-whiteClr 
                            font-semibold flex items-center 
                            justify-center absolute top-6 md:top-12 right-0 md:right-2"
              >
                {item.title}
              </p>
              <span
                className="text-lg tracking-wide 
                      text-center  text-whiteClr 
                        font-medium flex items-center 
                        justify-center absolute top-[50%] md:top-[45%] right-2 md:right-4"
              >
                {item.desc}
              </span>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Dashboard;
