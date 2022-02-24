import { MutableRefObject } from 'react';
import Search from '../Search';
import Display from '../Display';
interface IWeatherResults {
  city: string;
  description: string;
  icon: string;
  temp: number;
}

type Props = {
  handleSubmit: (name: string) => void;
  weatherData: IWeatherResults;
  isError: Boolean;
  displayAreaRef: MutableRefObject<HTMLInputElement | null>;
};

const SearchArea: React.FC<Props> = ({
  handleSubmit,
  weatherData,
  isError,
  displayAreaRef,
}) => {
  return (
    <section className="flex flex-col items-center border-2 rounded w-2/4 border-green-800">
      <Search handleSubmit={handleSubmit}></Search>
      <Display
        weatherData={weatherData}
        isError={isError}
        savedWeatherArea={displayAreaRef}
      />
    </section>
  );
};

export default SearchArea;
