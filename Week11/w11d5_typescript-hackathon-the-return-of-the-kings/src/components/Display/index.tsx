import { MutableRefObject } from "react";
import { motion } from "framer-motion";
import css from "./index.module.css";

interface IWeatherResults {
  city: string;
  description: string;
  icon: string;
  temp: number;
}

type Props = {
  weatherData: IWeatherResults;
  isError: Boolean;
  savedWeatherArea?: MutableRefObject<HTMLInputElement | null>;
};

const Display: React.FC<Props> = ({
  weatherData,
  isError,
  savedWeatherArea,
}) => {
  if (isError) {
    return (
      <section>
        <h2>Data not found!</h2>
      </section>
    );
  }
  return (
    <motion.section
      drag
      layout
      whileDrag={{ scale: 1.2 }}
      dragConstraints={savedWeatherArea}
    >
      <section className="flex flex-col justify-center items-center content-evenly bg-green-100 rounded w-4/5 shadow-lg m-3 p-4">
        <h2>{weatherData.city}</h2>
        <img
          src={weatherData.icon}
          alt={weatherData.description}
          className={css.icon}
        />
        <p>
          {weatherData.temp}°C | {weatherData.description}
        </p>
      </section>
    </motion.section>
  );
};

export default Display;
