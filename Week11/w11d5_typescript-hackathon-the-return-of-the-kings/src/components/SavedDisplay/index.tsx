import { MutableRefObject } from 'react';
import Display from '../Display';

interface Weather {
  city: string;
  description: string;
  icon: string;
  temp: number;
}

interface Props {
  savedItems: Array<Weather>;
  displayAreaRef: MutableRefObject<HTMLInputElement | null>;
}

const SavedDisplay: React.FC<Props> = ({ savedItems, displayAreaRef }) => {
  return (
    <section
      ref={displayAreaRef}
      className="bg-green-900 m-3 h-96 w-2/4 border-2 rounded border-green-800"
    >
      <h1 className="text-green-100 text-center text-2xl">Saved Locations</h1>
      {savedItems.map((el) => {
        <Display weatherData={el} isError={false} />;
      })}
    </section>
  );
};

export default SavedDisplay;
