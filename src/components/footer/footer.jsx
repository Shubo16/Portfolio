import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { details } from "./footerDetails"; // Correct import

export default function Footer() {
  const container = useRef(null);

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start 0.65", "start 0.1"],
  });

  const opacity = useTransform(scrollYProgress, [0, 1], [0, 1]);

  const d = new Date();
  let year = d.getFullYear();

  return (
    <motion.div
      id="footer"
      ref={container}
      className="min-h-screen flex flex-col items-center justify-center mt-10"
      style={{ opacity }} // Apply opacity dynamically
    >
      <h2 className="uppercase text-5xl font-bold">Contact me</h2>

      <div className="my-24 flex flex-col items-center">
        {details.map((detail, index) => {
          const key = Object.keys(detail)[0];
          const value = detail[key];

          return (
            <div
              key={index}
              className="text-4xl font-semibold uppercase border-b-2 border-gray-950 mb-6"
            >
              <span>{value}</span>
            </div>
          );
        })}
      </div>

      <motion.p className="font-semibold left-10 ">{year}&#169;</motion.p>
    </motion.div>
  );
}
