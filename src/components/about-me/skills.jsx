import React from "react";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHtml5,
  faCss3Alt,
  faJs,
  faReact,
  faGithub,
  faGitAlt,
} from "@fortawesome/free-brands-svg-icons"; // Import the specific icons

const slides = [
  {
    icon: (
      <FontAwesomeIcon
        icon={faHtml5}
        className="h-10 sm:h-12 md:h-14
   "
      />
    ),
  },
  {
    icon: <FontAwesomeIcon icon={faCss3Alt} className="h-10 sm:h-12 md:h-14" />,
  },
  { icon: <FontAwesomeIcon icon={faJs} className="h-10 sm:h-12 md:h-14" /> },
  { icon: <FontAwesomeIcon icon={faReact} className="h-10 sm:h-12 md:h-14" /> },
  {
    icon: <FontAwesomeIcon icon={faGithub} className="h-10 sm:h-12 md:h-14" />,
  },
  {
    icon: (
      <FontAwesomeIcon
        icon={faGitAlt}
        className="h-10 sm:h-12 md:h-14
  "
      />
    ),
  },
  {
    icon: (
      <img
        src="./assets/tailwind.svg"
        alt="Tailwind CSS"
        className="h-10 sm:h-12 md:h-14
        "
      />
    ),
  },
];

const SliderDesign2 = () => {
  const duplicatedSlides = [...slides, ...slides]; // Duplicate for infinite loop

  return (
    <div
      className="relative h-[100%]  overflow-hidden py-5 bg-white mx-auto "
      style={{ width: "60%" }}
    >
      {/* Gradient Overlay */}
      <h2 className="flex items-center justify-center uppercase font-bold mb-5 text-xl sm:text-2xl md:text-3xl">
        My skills
      </h2>
      <div className="absolute inset-0 z-20 before:absolute before:left-0 before:top-0 before:w-1/4 before:h-full before:bg-gradient-to-r before:from-white before:to-transparent before:filter before:blur-1 after:absolute after:right-0 after:top-0 after:w-1/4 after:h-full after:bg-gradient-to-l after:from-white after:to-transparent after:filter after:blur-3 "></div>

      {/* Slider */}
      <motion.div
        className="flex gap-10 lg:h-auto lg:mt-28"
        animate={{
          x: ["0%", "-100%"],
          transition: {
            ease: "linear",
            duration: 7,
            repeat: Infinity,
          },
        }}
      >
        {duplicatedSlides.map((slide, index) => (
          <div
            key={index}
            className="flex-shrink-0"
            style={{ width: `${100 / slides.length}%` }}
          >
            <div className="flex items-center justify-center h-full gap-10">
              {slide.icon}
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default SliderDesign2;
