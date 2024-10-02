import React from "react";
import { easeIn, motion } from "framer-motion";

function AvatarList() {
  return (
    <section>
      <motion.ul className="flex justify-evenly gap-4 md:gap-10">
        <motion.div
          animate={{ scale: 1.2 }}
          transition={{ duration: 0.1 }}
          whileHover={{ scale: 1.5, transition: easeIn }}
        >
          <img
            src="assets/shubo1.jpeg"
            alt="pfp"
            className="hidden sm:block rounded-md sm:h-24 md:h-28 z-10 border-2 sm:border-lm-light-green border-solid"
          />
        </motion.div>
        <motion.div
          animate={{ scale: 1.2 }}
          transition={{ duration: 0.5 }}
          whileHover={{ scale: 1.5, transition: easeIn }}
        >
          <img
            src="assets/londonpfp.jpeg"
            alt="pfp"
            className="hidden sm:block rounded-md sm:h-24 md:h-28 z-10 border-2 border-lm-light-green border-solid"
          />
        </motion.div>

        <motion.div
          animate={{ scale: 1.2 }}
          transition={{ duration: 0.5 }}
          whileHover={{ scale: 1.5, transition: easeIn }}
        >
          <img
            src="assets/screenshot.png"
            alt="pfp"
            className="hidden sm:block rounded-md sm:h-24  md:h-28 z-10 border-2 border-lm-light-green border-solid"
          />
        </motion.div>
      </motion.ul>
    </section>
  );
}

export default AvatarList;
