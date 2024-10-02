import React from "react";
import { brief } from "./heroDetails";
import AvatarList from "./Avatars";
import Skills from "./skills";
import { LastFmData } from "../lastfm/lastFmData";
import { AnimatePresence, motion } from "framer-motion"; // Removed useInView

function Hero() {
  const mainContainerVar = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
    exit: { opacity: 0, y: -50, transition: { duration: 0.6 } },

  };

  const childVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.9 } },
    exit: { opacity: 0, x: 20, transition: { duration: 0.5 } }, // Added exit variant for children
  };

  return (
    <section
      id="about" // Updated to meaningful ID
      className="h-screen w-[100svw] bg-lm-pastel-green flex justify-center flex-col lg:flex-row xl:flex-row p-10 gap-20"
    >
      <AnimatePresence> {/* If needed */}
        <motion.main
          variants={mainContainerVar}
          initial={"hidden"}
          animate={"visible"}
          exit={"exit"} // Apply exit animation
          className="border-2 border-gray-950 h-auto rounded-xl bg-white shadow-2xl p-8 grid-flow-dense lg:overflow-hidden"
        >
          <motion.div
            variants={childVariants}
            className="p-2 text-center my-3 flex justify-center sm:items-center sm:justify-around lg:flex-row lg:gap-10"
          >
            <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl uppercase text-pretty font-bold hover:text-pink-600 hover:scale-110 transition-transform duration-75 ease-in-out">
              About Me
            </h1>
            <AvatarList />
          </motion.div>

          <motion.div
            variants={childVariants}
            className="border-2 border-gray-950 rounded-xl p-4 grid text-lg md:text-2xl lg:text-3xl lg:leading-10 text-center font-medium"
          >
            {brief.description}
          </motion.div>
          <div className="lg:flex gap-10 lg:h-full mt-4">
            <motion.div
              variants={childVariants}
              className="border-2 mt-4 border-gray-950 rounded-xl p-2 lg:w-6/12 lg:h-96  overflow-x-auto"
            >
              <Skills className="" />
            </motion.div>

            <motion.div
              variants={childVariants}
              className="mt-5 lg:w-8/12 h-auto"
            >
              <LastFmData
                userName="shubo_kobir"
                apiKey="bd456b17c4842a4e18b5b0804a26754a"
              />
            </motion.div>
          </div>
        </motion.main>
      </AnimatePresence>
    </section>
  );
}

export default Hero;
