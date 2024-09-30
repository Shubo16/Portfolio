import { AnimatePresence, easeInOut, motion } from "framer-motion";
import React from "react";
import { projectDetails } from "../cardDetails";

function ProjectCards() {
  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
    exit: { opacity: 0, y: -50, transition: { duration: 0.6 } },
  };

  const projectsVar = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3, // Stagger the children
      },
    },
  };

  return (
    <AnimatePresence>
      <motion.div
        className="flex-col flex gap-10 md:items-center lg:items-center "
        variants={projectsVar}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        {projectDetails.map((project, index) => (
          <motion.div
            key={index}
            className="border-y-2 border-solid border-zinc-950 flex items-center drop-shadow-lg shadow-sm rounded-md md:w-[50%]"
            variants={itemVariants}
            whileInView="visible"
            whileHover={{
              scale: 1.03,
              transition: {
                spring:1,
                
              }
              
            }}
            initial="hidden"
            viewport={{ once: false, amount: 0.3 }} // Customize how much of the item needs to be in view before animating
            exit="exit"
          >
            {/* Displaying the project image */}
            <motion.div className="w-1/3">
              <a href={project.link} target="_blank">
                <img
                  src={project.src}
                  alt={project.title}
                  className="w-full h-auto text-sm rounded-lg"
                />
              </a>
            </motion.div>

            {/* Displaying the project title and description */}
            <motion.div className="p-6 flex flex-col justify-center gap-4 w-11/12">
              <motion.h3 className="text-xl font-bold sm:text-2xl">
                {project.title}
              </motion.h3>
              <motion.p className="text-sm text-balance font-medium sm:text-base ">
                {project.description}
              </motion.p>

              <motion.div className="tags-container flex flex-row gap-10 items-center flex-wrap w-5/6">
                {project.tags?.map((tag, tagIndex) => (
                  <motion.div
                    key={tagIndex}
                    className="tag-box text-pink-500 p-1 border-2 border-black rounded uppercase text-xs sm:text-base"
                  >
                    {tag}
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </motion.div>
        ))}
      </motion.div>
    </AnimatePresence>
  );
}

export default ProjectCards;
