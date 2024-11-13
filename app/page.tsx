import Navbar from "./components/Navbar";
import Identity from "./cards/Identity";
import Toolbox from "./cards/Toolbox";

export default function Home() {
  return (
    <>
      <Navbar />
      <div className="flex grow">
        <Identity />
        <Toolbox />
      </div>
    </>
  );
}
