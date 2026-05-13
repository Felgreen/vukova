import Image from "next/image";
import React from "react";
import Ticker from "framer-motion-ticker";

const colors = ["#632bf3", "#f122c8", "#f16022", "#9ef344", "#44d3f3"];

const images = [
  "/images/ticker/1.webp",
  "/images/ticker/2.webp",
  "/images/ticker/13.webp",
  "/images/ticker/3.webp",
  "/images/ticker/5.webp",
];

const images2 = [
  "/images/ticker/17.webp",
  "/images/ticker/7.webp",
  "/images/ticker/8.webp",
  "/images/ticker/11.webp",
  ,
  "/images/ticker/9.webp",
];

const TickerComponent = () => {
  return (
    <div className="ticker-container w-screen">
      <Ticker direction={1} duration={20}>
        {images.map((imageUrl, index) => (
          <div
            key={index}
            style={{
              margin: "5px",
              height: "250px",
              width: "200px",
            }}
          >
            <Image src={imageUrl} alt="" width={200} height={250}
                quality={70}
                loading="lazy" />
          </div>
        ))}
      </Ticker>

      <Ticker direction={-1} duration={20}>
        {images2.map((imageUrl, index) => (
          <div
            key={index}
            style={{
              margin: "5px",
              height: "250px",
              width: "200px",
            }}
          >
            <Image src={imageUrl} alt="" width={200} height={250}
                quality={70}
                loading="lazy" />
          </div>
        ))}
      </Ticker>
      {/* <Ticker 
      direction={-1}
      duration={20}>
        {colors.map((item, index) => (
          <div
            key={index}
            style={{
              backgroundColor: item,
              margin: '5px',
              height: '250px',
              width: '200px',
            }}
          />
        ))}
      </Ticker> */}
    </div>
  );
};

export default TickerComponent;
