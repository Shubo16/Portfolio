import React from "react";
import { motion } from "framer-motion";
import ProjectCards from "./ProjectCards";

function Projects() {
  return (
    
    <motion.div
      id="projects"
      className="p-5 h-auto flex flex-col  items-center justify-center gap-10"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <h2 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl uppercase text-pretty font-bold hover:text-pink-600 hover:scale-110 transition-transform duration-75 ease-in-out">My Projects</h2>

      <motion.div>
        <ProjectCards/>
      </motion.div>
    </motion.div>
  );
}

export default Projects;
