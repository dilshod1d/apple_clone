import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { BsFillPlayCircleFill, BsDot } from "react-icons/bs";

function StreamCarousel() {
  return (
    <Carousel
      centerMode={true}
      centerSlidePercentage={80}
      showArrows={false}
      showStatus={false}
      showThumbs={false}
      swipeable={true}
      dynamicHeight={false}
      className="mt-4 relative"
      autoPlay={false}
      useKeyboardArrows={true}
      selectedItem={2}
    >
      <div>
        <img src="assets/shantaram.png" alt="Pumpkin" />
        <div className="absolute left-12 bottom-16 flex items-center space-x-2">
          <div className="bg-white w-36 text-black py-2 px-4 rounded-3xl">
            <div className="flex items-center justify-between font-bold">
              Stream now
              <BsFillPlayCircleFill size="15" />
            </div>
          </div>
          <div className="text-white flex items-center">
            <span className="font-bold">Animation</span>
            <BsDot size="30" color="white" />
            <p className="font-medium">Happiness is a Halloween tradition</p>
          </div>
        </div>
      </div>
      <div>
        <img src="assets/the.png" alt="Pumpkin" />
        <div className="absolute left-12 bottom-16 flex items-center space-x-2">
          <div className="bg-white w-36 text-black py-2 px-4 rounded-3xl">
            <div className="flex items-center justify-between font-bold">
              Stream now
              <BsFillPlayCircleFill size="15" />
            </div>
          </div>
          <div className="text-white flex items-center">
            <span className="font-bold">Animation</span>
            <BsDot size="30" color="white" />
            <p className="font-medium">Happiness is a Halloween tradition</p>
          </div>
        </div>
      </div>
      <div>
        <img src="assets/pumpkin.png" alt="Pumpkin" />
        <div className="absolute left-12 bottom-16 flex items-center space-x-2">
          <div className="bg-white w-36 text-black py-2 px-4 rounded-3xl">
            <div className="flex items-center justify-between font-bold">
              Stream now
              <BsFillPlayCircleFill size="15" />
            </div>
          </div>
          <div className="text-white flex items-center">
            <span className="font-bold">Animation</span>
            <BsDot size="30" color="white" />
            <p className="font-medium">Happiness is a Halloween tradition</p>
          </div>
        </div>
      </div>
      <div>
        <img src="assets/shantaram.png" alt="Pumpkin" />
        <div className="absolute left-12 bottom-16 flex items-center space-x-2">
          <div className="bg-white w-36 text-black py-2 px-4 rounded-3xl">
            <div className="flex items-center justify-between font-bold">
              Stream now
              <BsFillPlayCircleFill size="15" />
            </div>
          </div>
          <div className="text-white flex items-center">
            <span className="font-bold">Animation</span>
            <BsDot size="30" color="white" />
            <p className="font-medium">Happiness is a Halloween tradition</p>
          </div>
        </div>
      </div>
      <div>
        <img src="assets/shantaram.png" alt="Pumpkin" />
        <div className="absolute left-12 bottom-16 flex items-center space-x-2">
          <div className="bg-white w-36 text-black py-2 px-4 rounded-3xl">
            <div className="flex items-center justify-between font-bold">
              Stream now
              <BsFillPlayCircleFill size="15" />
            </div>
          </div>
          <div className="text-white flex items-center">
            <span className="font-bold">Animation</span>
            <BsDot size="30" color="white" />
            <p className="font-medium">Happiness is a Halloween tradition</p>
          </div>
        </div>
      </div>
    </Carousel>
  );
}

export default StreamCarousel;
