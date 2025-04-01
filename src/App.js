import Stopwatch from "./pages/Stopwatch";

const App = () => {
  return (<>
     <div className="min-h-50 ">
                <div className="sticky top-0 w-full bg-gray-100 p-4 shadow-md flex justify-center space-x-8 z-[9999]">
                    <p className="text-lg font-semibold">Stopwatch</p>
                </div>
            </div>
            <Stopwatch />
  </>)
};

export default App;
