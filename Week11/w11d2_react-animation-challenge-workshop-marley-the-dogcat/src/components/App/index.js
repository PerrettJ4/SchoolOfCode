import "./App.css";
import { motion } from "framer-motion";
import { SpinImage } from "../SpinImage/SpinImage";
import { DragComp } from "../DragComp/DragComp.js";

function App() {
  return (
    <div className="App">
      <h1>By The Fireplace</h1>
      <div></div>
      <SpinImage />
      <DragComp />
      <motion.div animate={{ scale: 0.5 }} className="div1" />
    </div>
  );
}

export default App;
