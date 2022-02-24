import "./index.css";
import { motion } from "framer-motion";

export const DragComp = () => (
  <motion.div
    drag
    dragConstraints={{
      top: -50,
      left: -50,
      right: 50,
      bottom: 50,
    }}
    className="div3"
  />
);

export default DragComp;
