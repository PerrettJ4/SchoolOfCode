import "./index.css";
import { motion } from "framer-motion";

export const SpinImage = () => (
  <motion.div
    animate={{
      scale: [1, 2, 3, 1, 1],
      rotate: [0, 0, 270, 270, 0],
      borderRadius: ["20%", "20%", "50%", "50%", "20%"],
    }}
    transition={{
      duration: 2,
      ease: "easeInOut",
      times: [0, 0.2, 0.5, 0.8, 1],
      loop: Infinity,
      repeatDelay: 1,
    }}
    className="div2"
  />
);

export default SpinImage;
