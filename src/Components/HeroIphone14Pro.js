import React from "react";

function HeroIphone14Pro() {
  return (
    <div className="mt-4 h-[calc(100vh-48px)] w-screen">
      <div className="flex flex-col items-center justify-around w-full h-full bg-black">
        <div className="flex flex-col items-center space-y-2 w-full mt-12 mb-6">
          <div className="flex flex-col items-center space-y-2">
            <h2 className="text-6xl font-semibold text-white">iPhone 14 Pro</h2>

            <h3 className="text-3xl font-normal text-white">Pro. Beyond.</h3>
          </div>
          <div className="flex justify-between w-1/4">
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

        <div className="w-full h-[65%] bg-black">
          <img
            src="/assets/iphone-14-pro.jpeg"
            alt="ipad"
            className="object-contain w-full h-full"
          />
        </div>
      </div>
    </div>
  );
}

export default HeroIphone14Pro;
