import Navbar from "./components/Navbar";
import Identity from "./cards/Identity";
import Toolbox from "./cards/Toolbox";

export default function Home() {
  return (
    <>
      <Navbar />
      <div className="flex gap-2 grow w-full">
        <Identity />
        <div className="mt-4 mb-4 mr-4 gap-2 flex flex-col w-full items-center justify-start">
          <Toolbox />
        </div>
      </div>
    </>
  );
}
