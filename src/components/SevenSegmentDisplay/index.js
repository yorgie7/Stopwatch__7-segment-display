import React from "react";

const segmentMap = {
  0: [true, true, true, false, true, true, true],
  1: [false, false, true, false, false, true, false],
  2: [true, false, true, true, true, false, true],
  3: [true, false, true, true, false, true, true],
  4: [false, true, true, true, false, true, false],
  5: [true, true, false, true, false, true, true],
  6: [true, true, false, true, true, true, true],
  7: [true, false, true, false, false, true, false],
  8: [true, true, true, true, true, true, true],
  9: [true, true, true, true, false, true, true],
};

const colonSegmentDisplay = {
  "colon" : [true, true],
  "decimal" : [false, true],
};

const Segment = ({ active, horizontal }) => (
  <div
    className={`bg-green-500 transition-all duration-200 ${
      active ? "opacity-100" : "opacity-20"
    } ${horizontal ? "w-8 h-2" : "w-2 h-6"} rounded-sm`}
  ></div>
);

const ColonSegmentElement   = ({ active }) => (
  <div
  className={`bg-green-500 transition-all duration-200 ${
    active ? "opacity-100" : "opacity-20"
  } w-2 h-2 rounded-sm`}
></div>
);

const SevenSegmentDisplay = ({ number }) => {
  const segments = segmentMap[number] || segmentMap[0];
  return (
    <div className="grid grid-cols-3 gap-1 w-16 p-2 bg-black rounded-lg">
      {/* Top Segment */}
      <div className="col-span-3 flex justify-center">
        <Segment active={segments[0]} horizontal />
      </div>
      {/* Upper Left & Right Segments */}
      <div className="flex flex-col items-center">
        <Segment active={segments[1]} />
      </div>
      <div className="w-10" />
      <div className="flex flex-col items-center">
        <Segment active={segments[2]} />
      </div>
      {/* Middle Segment */}
      <div className="col-span-3 flex justify-center">
        <Segment active={segments[3]} horizontal />
      </div>
      {/* Lower Left & Right Segments */}
      <div className="flex flex-col items-center">
        <Segment active={segments[4]} />    
      </div>
      <div className="w-10" />
      <div className="flex flex-col items-center">
        <Segment active={segments[5]} />
      </div>
      {/* Bottom Segment */}
      <div className="col-span-3 flex justify-center">
        <Segment active={segments[6]} horizontal />
      </div>
    </div>
  );
};


export const ColonSegmentDisplay = ({ type = "colon" }) => {
  const segments = colonSegmentDisplay[type];
  return (
    <div className="grid grid-cols-3 gap-2 w-8 mx-2 py-5 bg-black rounded-md">
      <div className="w-4" />
      <div className="flex flex-col items-center">
        <ColonSegmentElement active={segments[0]} horizontal/>
      </div>
     
      <div className="col-span-3 flex justify-center my-4"></div>
      <div className="w-4" />

      <div className="flex flex-col items-center">
        <ColonSegmentElement active={segments[1]} horizontal />
      </div>

    </div>
  );
};

export default SevenSegmentDisplay;
