import "./App.css";
import BottomSection from "./components/BottomSection";
import Button from "./components/Button";
import ToolsBar from "./components/ToolsBar";
import { RiMenu5Line } from "react-icons/ri";

function App() {
  return (
    <div className="mian-wrapper w-full h-full flex justify-between items-center lg:ps-4 lg:pe-4 ">
      <Button>
        <RiMenu5Line />
      </Button>
      <ToolsBar />
      <Button className={"lg:text-xs"}>Share</Button>
      <BottomSection />
    </div>
  );
}

export default App;
