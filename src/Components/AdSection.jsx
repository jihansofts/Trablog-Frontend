import React from "react";

import Group from "../assets/img/Group.png";
import Group1 from "../assets/img/Group 2.png";
import Group2 from "../assets/img/Group (1).png";
import Group3 from "../assets/img/Group 3.png";
import Group4 from "../assets/img/Group 9235.png";
const AdSection = () => {
  return (
    <section className="container h-[600px] flex justify-center items-center">
      <div className="relative">
        <div className="flex flex-row gap-[80px] max-sm:flex-col max-sm:mt-[20rem] max-md:gap-[20px] max-sm:gap-[10px] ">
          <div className="basis-1/3 md:basis-1/2 max-sm:basis-[180px]">
            <img className="w-[100%] h-[40px]" src={Group} alt="" />
          </div>
          <div className=" basis-1/3 md:basis-1/2 max-sm:basis-[180px]">
            <img className="w-[100%] h-[40px]" src={Group1} alt="" />
          </div>
          <div className=" basis-1/3 md:basis-1/2 max-sm:basis-[180px]">
            <img className="w-[100%] h-[40px]" src={Group2} alt="" />
          </div>
          <div className=" basis-1/3 md:basis-1/2 max-sm:basis-[180px]">
            <img className="w-[100%] h-[40px]" src={Group4} alt="" />
          </div>
          <div className=" basis-1/3 md:basis-1/2 max-sm:basis-[180px]">
            <img className="w-[100%] h-[40px]" src={Group3} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdSection;
