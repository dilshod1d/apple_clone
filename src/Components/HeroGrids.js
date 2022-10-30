import React from "react";
import { BsApple } from "react-icons/bs";

function HeroGrids() {
  return (
    <div className="mt-4 grid grid-cols-2 grid-rows-3 gap-4 w-screen">

      <div className="bg-quaternary h-[calc(100vh-48px)] ">
        <div className="flex flex-col items-center space-y-2 w-full mt-12 mb-6">
          <div className="flex flex-col items-center space-y-2">
            <h4 className="text-4xl font-semibold">iPhone 14</h4>

            <h5 className="text-xl font-normal">Big and bigger</h5>
          </div>
          <div className="flex justify-between w-1/3">
            <a href="/#" className="text-link text-lg font-normal">
              <span className="hover:underline">Learn more</span>
              <span>&rarr;</span>
            </a>
            <a href="/#" className="text-link text-lg font-normal">
              <span className="hover:underline">Buy now</span>
              <span>&rarr;</span>
            </a>
          </div>
        </div>

        <div className="w-full h-[65%]">
          <img
            src="/assets/iphone-14.png"
            alt="ipad"
            className="object-contain w-full h-full"
          />
        </div>
      </div>
      
      <div className="bg-tertirary h-[calc(100vh-48px)]">
        <div className="flex flex-col items-center space-y-2 w-full mt-12 mb-6">
          <div className="flex flex-col items-center space-y-2">
            <div className="flex items-center">
              <BsApple size="30" />
              <h4 className="text-4xl font-semibold">
                tv
                <span className="text-3xl text-transparent bg-clip-text bg-gradient-to-r from-red-600 via-yellow-500 to-blue-400 font-extrabold">
                  4K
                </span>
              </h4>
            </div>

            <h5 className="text-xl font-normal">
              The apple experience. <br /> Cinematic in every sense
            </h5>
          </div>
          <div className="flex justify-between w-1/3">
            <a href="/#" className="text-link text-lg font-normal">
              <span className="hover:underline">Learn more</span>
              <span>&rarr;</span>
            </a>
            <a href="/#" className="text-link text-lg font-normal">
              <span className="hover:underline">Buy now</span>
              <span>&rarr;</span>
            </a>
          </div>
        </div>

        <div className="w-full h-[65%]">
          <img
            src="/assets/apple-tv.png"
            alt="ipad"
            className="object-contain w-full h-full"
          />
        </div>
      </div>
      <div className="bg-quaternary h-[calc(100vh-48px)]">
        <div className="flex flex-col items-center space-y-2 w-full mt-12 mb-6">
          <div className="flex flex-col items-center space-y-2">
            <div className="flex flex-col items-center">
              <div className="flex items-center">
                <BsApple size="30" />
                <h4 className="text-4xl font-semibold uppercase">watch</h4>
              </div>
              <span className="uppercase text-red-500">Ultra</span>
            </div>
            <h5 className="text-xl font-normal">Adventure awaits.</h5>
          </div>
          <div className="flex justify-between w-1/3">
            <a href="/#" className="text-link text-lg font-normal">
              <span className="hover:underline">Learn more</span>
              <span>&rarr;</span>
            </a>
            <a href="/#" className="text-link text-lg font-normal">
              <span className="hover:underline">Buy now</span>
              <span>&rarr;</span>
            </a>
          </div>
        </div>

        <div className="w-full h-[65%]">
          <img
            src="/assets/watch.jpeg"
            alt="ipad"
            className="object-contain w-full h-full"
          />
        </div>
      </div>
      <div className="bg-black h-[calc(100vh-48px)] overflow-hidden">
        <div className="flex flex-col items-center space-y-2 w-full mt-12 mb-6">
          <div className="flex flex-col items-center space-y-2">
            <div className="flex flex-col items-center">
              <div className="flex items-center">
                <BsApple size="30" color="white" />
                <h4 className="text-4xl text-white font-semibold uppercase">
                  watch
                </h4>
              </div>
              <span className="uppercase text-red-500">series 8</span>
            </div>
            <h5 className="text-xl font-normal">A healthy leap ahead.</h5>
          </div>
          <div className="flex justify-between w-1/3">
            <a href="/#" className="text-link text-lg font-normal">
              <span className="hover:underline">Learn more</span>
              <span>&rarr;</span>
            </a>
            <a href="/#" className="text-link text-lg font-normal">
              <span className="hover:underline">Buy now</span>
              <span>&rarr;</span>
            </a>
          </div>
        </div>

        <div className="w-full h-[65%]">
          <img
            src="/assets/iwatch-series.jpeg"
            alt="ipad"
            className="object-contain w-full h-full"
          />
        </div>
      </div>
      <div className="bg-tertirary h-[calc(100vh-48px)]">
        <div className="flex flex-col items-center space-y-2 w-full mt-12 mb-6">
          <div className="flex flex-col items-center space-y-2">
            <div className="flex items-center">
              <BsApple size="30" />
              <h4 className="text-4xl font-semibold">Fitness+</h4>
            </div>

            <h5 className="text-xl font-normal">
              Fitness for everyone. <br /> Now all you need is iPhone
            </h5>
          </div>
          <div className="flex justify-between w-[40%]">
            <a href="/#" className="text-link text-lg font-normal">
              <span className="hover:underline">Learn more</span>
              <span>&rarr;</span>
            </a>
            <a href="/#" className="text-link text-lg font-normal flex">
              <span className="hover:underline flex items-start">
                Try for free <span className="text-xs">1</span>
              </span>
              <span>&rarr;</span>
            </a>
          </div>
        </div>

        <div className="w-full h-[65%]">
          <img
            src="/assets/fitnes+.png"
            alt="ipad"
            className="object-contain w-full h-full"
          />
        </div>
      </div>
      <div className="bg-quaternary h-[calc(100vh-48px)] ">
        <div className="flex flex-col items-center space-y-2 w-full mt-12 mb-6">
          <div className="flex flex-col items-center space-y-2">
            <div className="flex items-center">
              <BsApple size="30" />
              <h4 className="text-4xl font-semibold">Card</h4>
            </div>

            <h5 className="text-xl font-normal">
              Get up 3% Daily Cashback <br />
              with every purchase
            </h5>
          </div>
          <div className="flex justify-between w-1/3">
            <a href="/#" className="text-link text-lg font-normal">
              <span className="hover:underline">Learn more</span>
              <span>&rarr;</span>
            </a>
            <a href="/#" className="text-link text-lg font-normal">
              <span className="hover:underline">Buy now</span>
              <span>&rarr;</span>
            </a>
          </div>
        </div>

        <div className="w-full h-[65%]">
          <img
            src="/assets/card.png"
            alt="ipad"
            className="object-contain w-full h-full"
          />
        </div>
      </div>
    </div>
  );
}

export default HeroGrids;
