// ... same imports and segmentMap remain unchanged

const Segment: React.FC<SegmentProps> = ({ active, horizontal = false }) => (
  <div
    className={`bg-green-500 transition-all duration-200 ${
      active ? "opacity-100" : "opacity-20"
    } ${horizontal ? "w-12 sm:w-16 md:w-20 h-1.5 sm:h-2" : "h-8 sm:h-10 w-1.5 sm:w-2"} rounded-sm`}
  ></div>
);

const ColonSegmentElement: React.FC<ColonSegmentElementProps> = ({ active }) => (
  <div
    className={`bg-green-500 transition-all duration-200 ${
      active ? "opacity-100" : "opacity-20"
    } w-2 sm:w-2.5 h-2 sm:h-2.5 rounded-sm`}
  ></div>
);

const SevenSegmentDisplay: React.FC<SevenSegmentDisplayProps> = ({ number }) => {
  const segments = segmentMap[number] || segmentMap[0];

  return (
    <div className="grid grid-cols-3 gap-1 sm:gap-1.5 p-2 sm:p-3 bg-black rounded-lg w-fit">
      {/* Top Segment */}
      <div className="col-span-3 flex justify-center">
        <Segment active={segments[0]} horizontal />
      </div>
      {/* Upper Left & Right Segments */}
      <div className="flex flex-col items-center">
        <Segment active={segments[1]} />
      </div>
      <div className="w-4 sm:w-6" />
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
      <div className="w-4 sm:w-6" />
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

export const ColonSegmentDisplay: React.FC<ColonSegmentDisplayProps> = ({ type = "colon" }) => {
  const segments = colonSegmentDisplay[type];

  return (
    <div className="grid grid-cols-3 gap-2 w-fit px-3 py-4 bg-black rounded-md">
      <div />
      <div className="flex flex-col items-center">
        <ColonSegmentElement active={segments[0]} />
      </div>
      <div className="col-span-3 flex justify-center my-2" />
      <div />
      <div className="flex flex-col items-center">
        <ColonSegmentElement active={segments[1]} />
      </div>
    </div>
  );
};

export default SevenSegmentDisplay;
