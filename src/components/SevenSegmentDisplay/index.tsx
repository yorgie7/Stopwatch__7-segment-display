import React from "react";

// Define the type for segmentMap for better type safety
interface SegmentMap {
  [key: number]: boolean[];
}

const segmentMap: SegmentMap = {
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

const colonSegmentDisplay: { [key: string]: boolean[] } = {
  "colon": [true, true],
  "decimal": [false, true],
};

// Segment component to render individual segments
interface SegmentProps {
  active: boolean;
  horizontal: boolean;
}

const Segment: React.FC<SegmentProps> = ({ active, horizontal = false }) => (
  <div
    className={`bg-green-500 transition-all duration-200 ${
      active ? "opacity-100" : "opacity-20"
    } ${horizontal ? "w-8 h-2" : "w-2 h-6"} rounded-sm`}
  ></div>
);

// Colon segment element (active or inactive)
interface ColonSegmentElementProps {
  active: boolean;
}

const ColonSegmentElement: React.FC<ColonSegmentElementProps> = ({ active }) => (
  <div
    className={`bg-green-500 transition-all duration-200 ${
      active ? "opacity-100" : "opacity-20"
    } w-2 h-2 rounded-sm`}
  ></div>
);

// Seven-segment display component
interface SevenSegmentDisplayProps {
  number: number;
  horizontal ?: boolean;
}

const SevenSegmentDisplay: React.FC<SevenSegmentDisplayProps> = ({ number }) => {
  const segments = segmentMap[number] || segmentMap[0];

  return (
    <div className="grid grid-cols-3 gap-1 w-16 p-2 bg-black rounded-lg">
      {/* Top Segment */}
      <div className="col-span-3 flex justify-center">
        <Segment active={segments[0]} horizontal />
      </div>
      {/* Upper Left & Right Segments */}
      <div className="flex flex-col items-center">
        <Segment active={segments[1]} horizontal={false} />
      </div>
      <div className="w-10" />
      <div className="flex flex-col items-center">
        <Segment active={segments[2]} horizontal={false} />
      </div>
      {/* Middle Segment */}
      <div className="col-span-3 flex justify-center">
        <Segment active={segments[3]} horizontal />
      </div>
      {/* Lower Left & Right Segments */}
      <div className="flex flex-col items-center">
        <Segment active={segments[4]} horizontal={false} />
      </div>
      <div className="w-10" />
      <div className="flex flex-col items-center">
        <Segment active={segments[5]} horizontal={false} />
      </div>
      {/* Bottom Segment */}
      <div className="col-span-3 flex justify-center">
        <Segment active={segments[6]} horizontal />
      </div>
    </div>
  );
};

// Colon segment display component (used for the colon between time)
interface ColonSegmentDisplayProps {
  type: "colon" | "decimal";
}

export const ColonSegmentDisplay: React.FC<ColonSegmentDisplayProps> = ({ type = "colon" }) => {
  const segments = colonSegmentDisplay[type];

  return (
    <div className="grid grid-cols-3 gap-2 w-8 mx-2 py-5 bg-black rounded-md">
      <div className="w-4" />
      <div className="flex flex-col items-center">
        <ColonSegmentElement active={segments[0]} />
      </div>
      <div className="col-span-3 flex justify-center my-4"></div>
      <div className="w-4" />
      <div className="flex flex-col items-center">
        <ColonSegmentElement active={segments[1]} />
      </div>
    </div>
  );
};

export default SevenSegmentDisplay;
