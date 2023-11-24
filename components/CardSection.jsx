import React from "react";

const CardSection = () => {
  return (
    <div
      section
      id="CardSection"
      className="  flex flex-wrap justify-center items-center p-4 text-white bg-[#0c0c0c] space-y-3 sm:space-y-0 sm:gap-y-2 sm:space-x-2 md:space-x-6 lg:space-x-8"
    >
      {/* Card 1 */}
      <div className=" group relative">
        <div className="absolute inset-1 bg-gradient-to-r from-[#cd3e51] to-[#eb6724] rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
        <div className="bg-[#20201F] relative rounded-lg p-4 h-96 w-72 m-2  ">
          {/* Card content */}
          <div className="text-xl font-antonioBold mb-4">Card 1</div>

          <p className=" font-antonRegular">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>
      </div>
      {/* Card 2 */}
      <div className=" group relative">
        <div className="absolute inset-1 bg-gradient-to-r from-[#cd3e51] to-[#eb6724] rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
        <div className="bg-[#20201F] relative rounded-lg p-4 h-96 w-72 m-2 ">
          {/* Card content */}
          <div className="text-xl font-antonioBold mb-4">Card 1</div>

          <p className=" font-antonRegular">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>
      </div>

      {/* Card 3 */}
      <div className=" group relative">
        <div className="absolute inset-1 bg-gradient-to-r from-[#cd3e51] to-[#eb6724] rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
        <div className="bg-[#20201F] relative rounded-lg p-4 h-96 w-72 m-2  ">
          {/* Card content */}
          <div className="text-xl font-antonioBold mb-4">Card 1</div>
          <p className=" font-antonRegular">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>
      </div>
    </div>
  );
};

export default CardSection;
