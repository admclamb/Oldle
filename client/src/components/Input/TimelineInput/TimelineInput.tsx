import React from "react";

type Props = {
  value: string;
  setValue: (arg0: string) => void;
};

const TimelineInput = ({ value, setValue }: Props) => {
  const handleChange = ({ target: { value: inputValue } }) => {
    setValue(inputValue);
  };
  return (
    <form className="flex flex-col items-center gap-2">
      <label htmlFor="timeline" className="text-lg">
        Guess The Time Period
      </label>
      <input
        type="range"
        min="1823"
        max="2023"
        value={value}
        onChange={handleChange}
        step="1"
        className="w-full"
        id="timeline"
      />
      <p className="text-center">{value}</p>
    </form>
  );
};

export default TimelineInput;
