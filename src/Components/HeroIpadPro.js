import React from "react";

function HeroIpadPro() {
  return (
    <div className="h-[calc(100vh-48px)] w-screen flex">
      <div className="flex items-center justify-center w-full bg-black">
        <div className="flex flex-col items-center space-y-4 w-[25%]">
          <div className="flex flex-col items-center space-y-4">
            <h2 className="text-6xl font-semibold text-white">iPad Pro</h2>
            <div className="flex items-center">
              <h3 className="text-3xl font-normal text-white">
                Supercharged by
              </h3>
              <img
                src="/assets/m2_logo.png"
                alt="m2 processor logo"
                className="w-10 h-10"
              />
            </div>
          </div>
          <div className="flex justify-between w-10/12">
            <a href="/#" className="text-link text-xl font-normal">
              <span className="hover:underline">Learn more</span>{" "}
              <span>&rarr;</span>
            </a>
            <a href="/#" className="text-link text-xl font-normal">
              <span className="hover:underline">Buy now</span>{" "}
              <span>&rarr;</span>
            </a>
          </div>
        </div>

        <div className="w-[60%] h-full bg-gradient-to-r from-black via-purpleGradient to-black">
          <img
            src="/assets/ipad-pro.png"
            alt="ipad"
            className="object-contain w-full h-full"
          />
        </div>
      </div>
    </div>
  );
}

export default HeroIpadPro;
