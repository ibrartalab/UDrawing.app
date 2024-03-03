import React, { useState } from "react";
import Button from "./Button";
import { MdOutlineLock } from "react-icons/md";
import { TbHandStop } from "react-icons/tb";
import { LuMousePointer2 } from "react-icons/lu";
import { BiRectangle } from "react-icons/bi";
import { BsCircle } from "react-icons/bs";
import { LuDiamond } from "react-icons/lu";
import { FaArrowRight } from "react-icons/fa6";
import { IoRemoveOutline } from "react-icons/io5";
import { HiOutlinePencil } from "react-icons/hi";
import { IoImagesOutline } from "react-icons/io5";
import { CiEraser, CiText } from "react-icons/ci";

const toolsData = [
  { id: 1, icon: <MdOutlineLock />, name: "lock" },
  { id: 2, icon: <TbHandStop />, name: "hand" },
  { id: 3, icon: <LuMousePointer2 />, name: "pointer" },
  { id: 4, icon: <BiRectangle />, name: "rectangle" },
  { id: 5, icon: <BsCircle />, name: "circle" },
  { id: 6, icon: <LuDiamond />, name: "diamond" },
  { id: 7, icon: <FaArrowRight />, name: "arrow" },
  { id: 8, icon: <IoRemoveOutline />, name: "line" },
  { id: 9, icon: <HiOutlinePencil />, name: "pencil" },
  { id: 10, icon: <IoImagesOutline />, name: "image" },
  { id: 11, icon: <CiEraser />, name: "eraser" },
  { id: 12, icon: <CiText />, name: "text" },
];
function ToolsBar() {
  const [name, setName] = useState("");
  const handleClick = (toolName) => {
    setName(toolName);
  };
  console.log(name);
  return (
    <div className="toolsbar-container w-max h-max bg-black rounded-xl z-10 flex lg:flex-row lg:justify-evenly lg:items-center lg:p-1 lg:gap-2 lg:mt-4 lg:m-auto">
      {toolsData.map((tool) => (
        <Button
          key={tool.id}
          className={`${
            name === tool.name ? " text-white" : ""
          } py-1 rounded-lg`}
          handler={() => handleClick(tool.name)}
        >
          {tool.icon}
        </Button>
      ))}
    </div>
  );
}

export default ToolsBar;
