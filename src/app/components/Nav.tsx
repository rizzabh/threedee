"use client";
import Spline from "@splinetool/react-spline";

export default function Nav() {
  return (
    <div className="justify-center items-center w-full">
      <div className="inline-flex items-center gap-4 py-2 px-4 mx-5 my-5 relative bg-[#ffffff17] rounded-[67px] overflow-hidden border border-solid border-gray-800">
        <div className="relative w-[24px] h-[24px] bg-[#1079004a] rounded-[12px]">
          <div className="relative w-[6px] h-[6px] top-[9px] left-[9px] bg-[#70ff59] rounded-[3px] shadow-[0px_0px_7.1px_3px_#00b9288a]" />
        </div>
        <p className="relative w-fit [text-shadow:0px_0px_24.2px_#d5d5d540] [font-family:'Sans_Serif_Collection-Regular',Helvetica] font-normal text-ga  text-xs md:text-sm ">
          This Website will contain 3d Designs made using Spline or Three.js
        </p>
      </div>

      <div className="md:mt-24 mt-14 flex flex-col items-center gap-4 mb-4">
        <p className="love text-center md:text-sm text-base font-medium text-[#666666] lg:w-[46rem] md:w-[35rem] w-[15rem]">
          Made by{" "}
          <span className="underline cursor-pointer">
            {" "}
            <a href="https://github.com/rizzabh" target="_blank">
              {" "}
              rizzabh
            </a>
          </span>{" "}
          with love ❤️
        </p>
        <h1 className="z-10 text-center lg:text-6xl md:text-5xl text-4xl font-extrabold lg:w-[56rem] md:w-[40rem] w-[22rem] md:leading-normal leading-tight">
          Wanna Play with some <br />
          <span className="dtext leading-normal">3d Objects?</span>
        </h1>
      </div>

      <Spline
        scene="https://prod.spline.design/Hx-Zy8XO8VBm7pPz/scene.splinecode"
        className="z-40"
      />
    </div>
  );
}
