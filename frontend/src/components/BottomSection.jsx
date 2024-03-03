import Button from "./Button";
import { BiUndo } from "react-icons/bi";

function BottomSection() {
  return (
    <div className="bottom-section-container w-full h-max p-0 m-0 fixed top-96 mt-28  flex justify-between items-center">
      <div className="bottom-left flex justify-evenly items-center lg:gap-4">
        <div className="zoom-in-out w-max h-max p-0 rounded-xl">
          <Button className={"py-1 rounded-r-none"}>-</Button>
          <span className="text-xs">100%</span>
          <Button className={"py-1 rounded-l-none"}>+</Button>
        </div>
        <div className="undo-redo w-max h-max  rounded-xl text-sm">
          <Button className={"rounded-r-none"}>
            <BiUndo />
          </Button>
          <Button className={"rounded-l-none"}>
            <BiUndo className="flip-horizontal" />
          </Button>
        </div>
      </div>
      <div className="bottom-right lg:pe-8">
        <Button className={"py-0"}>?</Button>
      </div>
    </div>
  );
}

export default BottomSection;
