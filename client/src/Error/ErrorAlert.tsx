import React from 'react';

type Props = {
  error: {
    message: string;
  };
  setError: ({}: { message: string }) => void;
};

const ErrorAlert = ({ error, setError }: Props) => {
  return (
    error.message && (
      <div className="fixed top-5 w-18 flex justify-between">
        <p>Error: {error.message}</p>
        <button onClick={() => setError({ message: '' })}>x</button>
      </div>
    )
  );
};

export default ErrorAlert;
