import React from "react";
import work from "../assets/img/work 1.svg";
import play from "../assets/img/play-circle.5 1.svg";
import circaleleft from "../assets/img/circaleleft.svg";
import circalemiddle from "../assets/img/circalemiddle.svg";
import circaleright from "../assets/img/circaleright.png";
import map from "../assets/img/Map.png";
import airPlane1 from "../assets/img/airPlane1.svg";
import airPlane2 from "../assets/img/airPlane2.svg";
import airPlane3 from "../assets/img/airPlane3.svg";
import adduser from "../assets/img/add-user 1.svg";
import mapicon from "../assets/img/mapicon.svg";
import reachage1 from "../assets/img/Rectangle 1.png";
import reachage2 from "../assets/img/Rectangle 2.png";
import reachage3 from "../assets/img/Rectangle 3.png";
import send from "../assets/img/send 1.svg";
import Location from "../assets/img/location 1.svg";

const Home = () => {
  return (
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-1 relative lg:grid-cols-12 gap-6 md:gap-20 pt-20 lg:pt-40">
        <div className="lg:col-span-4 flex flex-col justify-center items-start">
          <div>
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
          <div className="mt-6 lg:mt-8">
            <h1 className="text-3xl lg:text-[69px] font-circular font-bold leading-tight lg:leading-[1.2]">
              Travel <span className="text-secondary">top destination</span>{" "}
              <br className="hidden lg:block" /> of the world
            </h1>
            <p className="mt-4 text-base lg:text-[18px] text-textColor2 font-inter font-normal">
              We always make our customer happy by providing{" "}
              <br className="hidden lg:block" /> as many choices as possible
            </p>
            <div className="mt-6 lg:mt-8 flex space-x-4">
              <button className="px-6 py-2 lg:px-7 lg:py-2 bg-btnColor shadow-lg text-white rounded-full">
                Get Started
              </button>
              <button className="flex items-center text-textColor font-bold space-x-2 px-6 py-2 lg:px-7 lg:py-2 border rounded-full">
                <img src={play} alt="Play Demo" />
                <p>Watch Demo</p>
              </button>
            </div>
          </div>
        </div>
        <div className="lg:col-span-8 relative">
          <div className="relative flex justify-center items-center">
            <div>
              <img className="w-full md:w-[700px] z-0" src={map} alt="Map" />
            </div>
            <div>
              <img src={mapicon} alt="mapicons" />
            </div>
            <div className="absolute top-0 left-0 flex flex-col lg:flex-row w-full lg:w-[1020px] md:flex-row md:w-[800px] ">
              <div className="relative flex-1 lg:basis-[250px]">
                <img
                  className="absolute top-12 left-1/2 transform -translate-x-1/2 lg:top-[46px] lg:left-[178px] md:top-[50px] md:left-[20px]"
                  src={airPlane1}
                  alt="Plane 1"
                />
                <img
                  className="absolute w-40 h-40 lg:w-[300px] lg:h-[350px] lg:top-10 lg:left-[70px] md:top-[80px] md:left-[0px]"
                  src={circaleleft}
                  alt="Circle left"
                />
              </div>
              <div className="relative flex-1 lg:basis-[420px]">
                <img
                  className="absolute top-[-18px] left-1/2 transform -translate-x-1/2 w-full lg:w-[350px] md:w-[300px]"
                  src={circalemiddle}
                  alt="Circle Middle"
                />
                <img
                  className="absolute top-[100px] right-[10px] lg:top-[186px] lg:left-[340px]"
                  src={airPlane2}
                  alt="Plane 2"
                />
              </div>
              <div className="relative flex-1 lg:basis-[300px]">
                <img
                  className="absolute top-[18px] right-[10px] lg:right-[166px]"
                  src={airPlane3}
                  alt="Plane 3"
                />
                <img
                  className="absolute w-32 h-32 lg:w-[170px] lg:h-[300px] lg:top-10 lg:right-[-6px]"
                  src={circaleright}
                  alt="Circle Right"
                />
              </div>
            </div>
          </div>
          {/* <div className="absolute top-[100px] left-[150px]  grid grid-rows-2 grid-flow-col gap-6 lg:gap-[20px]">
            <div className="flex flex-col relative gap-6 lg:gap-[20px]">
              <div>
                <img className="w-[270px] h-[300px]" src={reachage1} alt="" />
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
                <img src={reachage2} className="w-[270px] h-[300px]" alt="" />
              </div>
            </div>
            <div className="row-start-1 relative">
              <div className="relative">
                <img src={reachage3} className="w-[270px] h-[400px]" alt="" />
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
              <div className="absolute bottom-[0px] lg:bottom-[8px] left-[50px] lg:left-[100px]">
                <div className="w-10 h-10 lg:w-[50px] lg:h-[50px] flex justify-center items-center bg-orangeColor shadow-lg rounded-full z-10">
                  <img
                    className="w-5 h-5 lg:w-[20px] lg:h-[20px]"
                    src={adduser}
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Home;
