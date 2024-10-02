import React from "react";
import { motion } from "framer-motion";
import GradientBackground from "./NeatGradient";
import { links } from "./landingDetails";

function HomeScreen() {
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
        className="content flex justify-center items-center flex-col h-5/6"
      >
        <motion.h1 className="text-black text-5xl font-extrabold uppercase text-center">
          Shubo's Portfolio
        </motion.h1>
        <motion.h3 className="text-3xl">description</motion.h3>
        <motion.div>
          {links.map((link) => {
            return (
              <div key={link.key}>
                <a href={link.url}>
                  <div>{link.image}</div>
                </a>
              </div>
            );
          })}
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

export default HomeScreen;
