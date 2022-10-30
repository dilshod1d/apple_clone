import React from "react";

export default function IpadHero() {
  return (
    <div className="mt-12 relative h-[calc(100vh-48px)] w-screen flex justify-center">
      <div className="flex items-center justify-center w-[65%]">
        <img
          src="/assets/ipad.jpeg"
          alt="ipad"
          className="h-[520px] w-auto object-contain"
        />
        <div className="flex flex-col items-center space-y-4">
          <div className="flex flex-col items-center space-y-4">
            <h2 className="text-6xl font-semibold">iPad</h2>
            <h3 className="text-3xl font-normal">Lovable. Drawable. Magical</h3>
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
      </div>
    </div>
  );
}
