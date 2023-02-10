import React from 'react';

type Props = {
  value: string;
  setValue: (arg0: string) => void;
};

const TimelineInput = ({ value, setValue }: Props) => {
  const handleChange = ({ target: { value: inputValue } }) => {
    setValue(inputValue);
  };
  return (
    <form>
      <input
        type="range"
        min="1823"
        max="2023"
        value={value}
        onChange={handleChange}
        step="1"
      />
    </form>
  );
};

export default TimelineInput;
