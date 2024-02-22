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
          slidesToScroll: 3,
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
      <Navbar />
      <div className="w-full px-6 mx-auto flex items-center gap-2 justify-between md:px-20 py-1 mb-4 md:mb-0 md:py-5">
        <Link className="text-3xl tracking-wide text-gray-600 font-bold" to="/">
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
          className="w-full px-4 py-4 tracking-wider text-md text-gray-900 font-bold bg-gray-300  rounded-s-md  focus:outline-none"
          placeholder="Search events, banquet,wedding....."
        />
        <button className="px-4 py-4 text-gray-100 bg-gray-800 rounded-md  ">
          <Search />
        </button>
      </div>
      {/* Slider */}
      <div className="flex items-center justify-center mx-auto overflow-x-hidden overflow-y-hidden">
        <Slider
          {...settings}
          className=" max-w-[1000px] gap-2 w-full py-3 px-12 mt-10"
        >
          {categories.map((item, i) => (
            <div kay={i} className="flex items-center gap-6">
              <div className="flex items-center justify-center bg-gradient-to-r from-slate-200 to-zinc-800 rounded-2xl w-[300px] h-[200px] p-2 cursor-pointer">
                <h3 className="text-2xl tracking-widest text-center  text-white font-semibold flex items-center justify-center">
                  {item}
                </h3>
              </div>
            </div>
          ))}
        </Slider>
      </div>

      {/* Categories */}
      <div className="flex flex-col items-center justify-center gap-5 py-6">
        <p className="text-lg text-gray-800 font-bold py-4 items-start">
          Dive in
        </p>
        <div className="grid grid-cols-2 md:grid-cols-2 gap-4">
          {catCards.map((item, i) => (
            <div className="flex items-center flex-col gap-2 justify-center bg-gradient-to-r from-black via-gray-900 to-neutral-500 rounded-2xl w-[200px] h-[200px] md:w-[300px] md:h-[300px] p-2 cursor-pointer">
              <p className="text-3xl tracking-wide text-center  text-white font-bold flex items-center justify-center">
                {item}
              </p>
              <span className="text-md tracking-wide text-center  text-white font-bold flex items-center justify-center">
                {item}
              </span>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Dashboard;
