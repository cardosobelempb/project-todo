import {
  FaCheck,
  FaPlus,
  FaX,
  FaSpinner,
  FaRegTrashCan,
} from "react-icons/fa6";
import { IconRoot } from "./components/icon-root/icon-root";
import { TextRoot } from "./components/text-root/text-root";
import { PiClipboardText } from "react-icons/pi";
import { GoPencil } from "react-icons/go";
import { BadgeRoot } from "./components/badge-root/badge-root";

export default function App() {
  return (
    <main className="">
      <div className="grid gap-y-5 p-4">
        <div className=" flex flex-col gap-4">
          <TextRoot size="sm" className="text-pink-800">
            ToDo List
          </TextRoot>
          <TextRoot size="md" className="text-green-800">
            ToDo List
          </TextRoot>
          <TextRoot size="md-bold" className="text-gray-800">
            ToDo List
          </TextRoot>
        </div>
        <div className=" flex gap-4">
          <IconRoot className="p-1" icon={FaRegTrashCan} />
          <IconRoot
            onClick={() => alert("Hello World")}
            className="p-1"
            icon={FaCheck}
          />
          <IconRoot className="p-1" icon={GoPencil} />
          <IconRoot className="p-1" icon={FaPlus} />
          <IconRoot className="p-1" icon={FaX} />
          <IconRoot className="p-1" icon={PiClipboardText} />
          <IconRoot spin className="p-1 " icon={FaSpinner} />
        </div>

        <div className=" flex gap-4">
          <BadgeRoot className="bg-pink-500/50 text-pink-800">5</BadgeRoot>
          <BadgeRoot className="bg-green-500/50 text-green-800">
            2 de 5
          </BadgeRoot>
        </div>
      </div>
    </main>
  );
}
