import React from "react";
import { animate, motion } from "framer-motion";
import GradientBackground from "./NeatGradient";
import { links } from "./landingDetails";

function HomeScreen() {
  const logoVariants = {
    initial: { scaleY: 0 },
    animate: {
      scaleY: 1,
      transition: {
        duration: 1,
        ease: [0.12, 0, 0.36, 0],
      },
    },
    exit: {
      scaleY: 0,
      transition: {
        delay: 0.5,
        duration: 0.5,
        ease: [1, 2, 3, 4],
      },
    },
  };
  const containerLogo = {
    initial: {
      transition: {
        staggerChildren: 0.1,
        staggerDirection: -1,
      },
    },
    open: {
      transition: {
        delayChildren: 0.8,
        staggerChildren: 0.1,
        staggerDirection: 1,
      },
    },
  };

  return (
    <motion.div
      style={{ position: "relative", height: "100vh", overflow: "hidden" }}
    >
      <GradientBackground />
      <motion.div
        initial={{ scale: 0, x: 0 }}
        animate={{ x: 0, scale: 1 }}
        transition={{
          type: "spring",
          stiffness: 260,
          damping: 50,
        }}
        className="content flex justify-center items-center flex-col h-5/6 w-full gap-10"
      >
        <motion.h1 className="text-black text-5xl font-extrabold uppercase text-center">
          hi there, i'm shubo!
        </motion.h1>
        <motion.h3 className="text-3xl top-4 font-thin w-11/12 text-pretty text-center uppercase object-contain">
          creative frontend developer based in the UK
        </motion.h3>
        <motion.div
        variants={logoVariants} 
        initial="initial"
        animate="animate"
        exit="exit"
        className="flex gap-10">
          {links.map((link) => {
            return (
              <motion.div key={link.key}>
                <a href={link.url} target="_blank">
                  <motion.img
                    whileHover={{
                      scale: 1.2,
                      rotate: 360,
                      transitionDuration: "1s",
                    }}
                    src={link.image}
                    alt={link.name}
                    className="h-20"
                  />
                </a>
              </motion.div>
            );
          })}
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

export default HomeScreen;
