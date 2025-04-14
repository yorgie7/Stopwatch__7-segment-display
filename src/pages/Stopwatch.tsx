import React, { useState, useEffect } from "react";
import SevenSegmentDisplay, { ColonSegmentDisplay } from "../components/SevenSegmentDisplay";

const Stopwatch: React.FC = () => {
  // Proper types for time and isRunning state
  const [time, setTime] = useState<number>(0);
  const [isRunning, setIsRunning] = useState<boolean>(false);

  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout> | null = null;
    if (isRunning) {
      timeout = setTimeout(() => {
        setTime((prevTime) => prevTime + 125); // increment time every 125ms
      }, 125);
    }

    // Cleanup function to clear timeout when component unmounts or dependencies change
    return () => {
      if (timeout) clearTimeout(timeout);
    };
  }, [isRunning, time]); // Updated to trigger on changes to `time` and `isRunning`

  // Start Stopwatch handler
  const startStopwatch = (): void => {
    if (!isRunning) {
      setIsRunning(true);
    }
  };

  // Stop Stopwatch handler
  const stopStopwatch = (): void => {
    setIsRunning(false);
  };

  // Reset Stopwatch handler
  const resetStopwatch = (): void => {
    setIsRunning(false);
    setTime(0);
  };

  // Formatting time for display
  const timeStringSecond = Math.floor((time / 1000) % 60).toString().padStart(2, "0");
  const timeStringMinute = Math.floor((time / 60000) % 60).toString().padStart(2, "0");

  // For microseconds
  const timeMicroInstance = Math.floor((time / 23) % 100).toString().padStart(2, "0");

  return (
    <div className="min-h-auto bg-gray-200 p-8 w-fit-content">
      <div className="flex justify-center py-8 items-center h-fit-content bg-gray-800">
        {/* Minutes */}
        <SevenSegmentDisplay number={Number(timeStringMinute[0])} />
        <SevenSegmentDisplay number={Number(timeStringMinute[1])} />

        <ColonSegmentDisplay type={"colon"} />
        
        {/* Seconds */}
        <SevenSegmentDisplay number={Number(timeStringSecond[0])} />
        <SevenSegmentDisplay number={Number(timeStringSecond[1])} />

        <ColonSegmentDisplay type={"colon"} />
        
        {/* Microseconds */}
        <SevenSegmentDisplay number={Number(timeMicroInstance[0])} />
        <SevenSegmentDisplay number={Number(timeMicroInstance[1])} />
      </div>

      <div className="flex flex-col items-center justify-center min-h-200 bg-gray-900 text-white">
        <div className="flex space-x-6 h-100 p-3">
          {/* Start Button */}
          <button
            type="button"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-lg px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
            onClick={startStopwatch}
          >
            Start
          </button>

          {/* Stop Button */}
          <button
            type="button"
            className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-lg px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
            onClick={stopStopwatch}
          >
            Stop
          </button>

          {/* Reset Button */}
          <button
            type="button"
            className="py-2.5 px-5 me-2 mb-2 text-lg font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
            onClick={resetStopwatch}
          >
            Reset
          </button>
        </div>
      </div>
    </div>
  );
};

export default Stopwatch;
