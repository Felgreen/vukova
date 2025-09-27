import Image from "next/image";
import React from "react";
import Ticker from "framer-motion-ticker";

const colors = ["#632bf3", "#f122c8", "#f16022", "#9ef344", "#44d3f3"];

const images = [
  "/images/ticker/1.jpg",
  "/images/ticker/2.jpg",
  "/images/ticker/13.jpg",
  "/images/ticker/3.jpg",
  "/images/ticker/5.jpg",
];

const images2 = [
  "/images/ticker/17.jpg",
  "/images/ticker/7.jpg",
  "/images/ticker/8.jpg",
  "/images/ticker/11.jpg",
  ,
  "/images/ticker/9.jpg",
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
            <Image src={imageUrl} alt="" width={200} height={250} />
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
            <Image src={imageUrl} alt="" width={200} height={250} />
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
