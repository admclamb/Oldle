import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX } from "@fortawesome/free-solid-svg-icons";
type Props = {
  error: {
    message: string;
  };
  setError: ({}: { message: string }) => void;
};

const ErrorAlert = ({ error, setError }: Props) => {
  return (
    error.message && (
      <div
        className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded fixed top-5 left-1/2 -translate-x-1/2 flex justify-between items-center gap-6"
        role="alert"
      >
        <div>
          <p className="font-bold">
            Holy smokes!
            <span className="font-medium ml-3">
              Something seriously bad happened.
            </span>
          </p>
        </div>

        <button
          onClick={() => setError({ message: "" })}
          className="w-8 h-8 border rounded hover:bg-red-200 active:bg-red-300 duration-200 ease-out  flex justify-center items-center"
        >
          <FontAwesomeIcon icon={faX} />
        </button>
      </div>
    )
  );
};

export default ErrorAlert;
