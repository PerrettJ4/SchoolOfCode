import { useState } from 'react';

interface Props {
  handleSubmit: (name: string) => void;
}
//Define as variable with anon function assigned

const Search: React.FC<Props> = ({ handleSubmit }) => {
  const [text, setText] = useState('');

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setText(e.target.value);
  }
  return (
    <div>
      <input
        placeholder="Enter City"
        onChange={handleChange}
        value={text}
        className="m-2 p-3 rounded-full border-2 border-solid green-800"
      ></input>
      <button
        onClick={() => handleSubmit(text)}
        className="rounded-full bg-green-100 p-3 m-2 w-32 ring-2 ring-green-300"
      >
        Search
      </button>
    </div>
  );
};

export default Search;
