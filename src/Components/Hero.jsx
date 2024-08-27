import React from "react";
import work from "../assets/img/work 1.svg";
import play from "../assets/img/play-circle.5 1.svg";
import adduser from "../assets/img/add-user 1.svg";
import reachage1 from "../assets/img/Rectangle 1.png";
import reachage2 from "../assets/img/Rectangle 2.png";
import reachage3 from "../assets/img/Rectangle 3.png";
import send from "../assets/img/send 1.svg";
import Location from "../assets/img/location 1.svg";
import Layermap from "../assets/img/layer.png";
import Ellipse from "../assets/img/Ellipse 24.png";
import Shape from "../assets/img/OBJECTS.svg";

const Hero = () => {
  return (
    <section className="container">
      <div className="relative">
        <div className="grid grid-cols-12 max-lg:flex max-lg:flex-col-reverse max-lg:gap-[0px] max-md:flex max-md:flex-col-reverse max-md:gap-[0px] justify-center items-center">
          <div className="col-span-4">
            <div className="grid grid-rows-3 grid-flow-col">
              <div className="row-start-1 h-[100px]"></div>
              <div className=" row-start-2 h-[300px]">
                <div className="">
                  <button className="flex items-center py-3 px-5 lg:py-4 lg:px-7 space-x-2 rounded-full bg-primary shadow-lg">
                    <p className="text-secondary text-sm lg:text-[14px] font-bold">
                      Explore the world!
                    </p>
                    <img
                      className="w-5 h-5 lg:w-[24px] lg:h-[24px]"
                      src={work}
                      alt="work"
                    />
                  </button>
                </div>
                <div className="mt-10">
                  <h1 className="text-[69px] md:text-[58px] font-circular font-bold leading-tight lg:leading-[1.2]">
                    Travel{" "}
                    <span className="text-secondary">top destination</span>{" "}
                    <br className="hidden lg:block" /> of the world
                  </h1>
                  <p className="mt-4 text-base lg:text-[18px] text-textColor2 font-inter font-normal">
                    We always make our customer happy by providing{" "}
                    <br className="hidden lg:block" /> as many choices as
                    possible
                  </p>
                  <div className="mt-6 lg:mt-8 flex space-x-4">
                    <button className="px-6 py-2 max-lg:px-4 lg:py-2 bg-btnColor shadow-lg text-white rounded-full">
                      Get Started
                    </button>
                    <button className="flex items-center text-textColor font-bold space-x-2 px-6 py-2 max-lg:px-4 max-lg:py-2 border rounded-full">
                      <img src={play} alt="Play Demo" />
                      <p>Watch Demo</p>
                    </button>
                  </div>
                </div>
              </div>
              <div className="row-start-3 h-[100px]"></div>
            </div>
          </div>
          <div className="col-span-8">
            <div className="relative w-[100%] h-[600px] 2xl:mt-0 xl:mt-0 md:mt-10 max-md:mt-10 max-sm:mt-6">
              <div className="flex justify-center items-center">
                <img src={Layermap} alt="" />
              </div>
              <div className="grid grid-rows-2 grid-flow-col gap-6 absolute z-50 2xl:top-[140px] 2xl:left-[210px] xl:top-[140px] lg:top-[60px] xl:left-[140px] lg:left-[70px] md:left[100px] max-md:top-[60px] sm:left-[0px] max-sm:left-[20px]   lg:gap-[20px]">
                <div className="flex flex-col relative 2xl:gap-6 lg:gap-[20px] sm:gap-[10px] max-sm:gap-[10px]">
                  <div>
                    <img
                      className="w-[270px] h-[300px]"
                      src={reachage1}
                      alt=""
                    />
                  </div>
                  <div className="absolute top-[260px] left-[-25px]">
                    <div className="w-10 h-10 lg:w-[50px] lg:h-[50px] flex justify-center items-center bg-secondary shadow-lg rounded-full z-10">
                      <img
                        className="w-5 h-5 lg:w-[20px] lg:h-[20px]"
                        src={send}
                        alt=""
                      />
                    </div>
                  </div>
                  <div>
                    <img
                      src={reachage2}
                      className="w-[270px] h-[300px]"
                      alt=""
                    />
                  </div>
                </div>
                <div className="row-start-1 col-span-2 flex items-center justify-center relative">
                  <div>
                    <div className="relative">
                      <img
                        src={reachage3}
                        className="w-[270px] h-[400px] sm:w-[250px] max-sm:w-[210px]"
                        alt=""
                      />
                      <button className="absolute bottom-8 right-[-40px] lg:right-[-80px] flex items-center py-3 lg:py-4 px-5 lg:px-7 space-x-1 rounded-full bg-primary shadow-lg">
                        <img
                          className="mr-1 w-5 h-5 lg:w-[20px] lg:h-[20px]"
                          src={Location}
                          alt="Location"
                        />
                        <p className="text-textColor font-circular text-sm lg:text-[14px] font-bold">
                          Top Places
                        </p>
                      </button>
                    </div>
                    <div className="absolute bottom-[0px] lg:bottom-[0px] left-[50px] lg:left-[100px]">
                      <div className="w-10 h-10 lg:w-[50px] lg:h-[50px] flex justify-center items-center bg-orangeColor shadow-lg rounded-full z-10">
                        <img
                          className="w-5 h-5 lg:w-[20px] lg:h-[20px]"
                          src={adduser}
                          alt=""
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className=" -z-50 flex justify-between h-auto relative">
          <img
            src={Ellipse}
            className="absolute top-[-576px] right-[-20px]"
            alt=""
          />
          <img
            src={Shape}
            className="absolute top-[140px] left-[-50px]"
            alt=""
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
