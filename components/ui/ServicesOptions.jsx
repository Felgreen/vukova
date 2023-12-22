import React from "react";
import { motion } from "framer-motion";

const ServicesOptions = ({ option, label, setOption, icon }) => {

  const boxVariant = {
    offscreen: { opacity: 0, scale: 0 },
    onscreen: {
      opacity: 1,
      scale: 1,
      transition: { type: "spring", duration: 1, bounce: 0.3 },
    },
  };

  return (
    <div className="flex items-start lg:p-2">
      <a className="cursor-pointer flex" onClick={() => setOption(option)}>
        <span className="flex items-center rounded-lg bg-gray-50 p-1">
          {icon}
        </span>
        <div className="ml-5 flex items-center transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110">
          <motion.h3
            className="text-xl font-semibold text-black"
            initial={"offscreen"}
            whileInView={"onscreen"}
            variants={boxVariant}
            viewport={{ once: true, amount: 1 }}
          >
            {label}
          </motion.h3>
        </div>
      </a>
    </div>
  );
};

export default ServicesOptions;
