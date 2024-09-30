import { brief } from "./heroDetails";
import { motion } from "framer-motion";

export function HeroDesc() {
  return (
    <motion.div
      style={{
        width: "", // Set the width to 100% or any other value as needed
        height: "", // Set the height as needed
        borderRadius: 30,
        backgroundColor: "#F1F7ED",
        boxShadow: "0px -10px 90px 10px #F1F7ED",
      }}
      initial={{ backgroundColor: "transparent" }}
      animate={{
        backgroundColor: "#F1F7ED",
        boxShadow: "0px 0px 80px 30px #F1F7ED",
        
      }}
      transition={{ type: 'spring', damping: 300, }}
      className="transparent flex items-center justify-center p-14 md:px-2 md:h-42"
    >
      <h2 className="text-lg sm:text-xl md:text-2xl font-semibold uppercase text-pretty text-center">
        {brief.description}
      </h2>
    </motion.div>
  );
}
