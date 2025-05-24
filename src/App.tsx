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
import { ButtonRoot } from "./components/button-root/button-root";

export default function App() {
  return (
    <main className="">
      <div className="grid gap-y-5 p-4">
        <div className=" flex flex-col gap-4">
          <TextRoot
            size="text-xs"
            font="font-semibold"
            className="text-pink-800"
          >
            ToDo List
          </TextRoot>
          <TextRoot size="text-base" className="text-green-800">
            ToDo List
          </TextRoot>
          <TextRoot
            size="text-base"
            leading="leading-6"
            font="font-bold"
            className="text-gray-800"
          >
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
          <BadgeRoot size="text-xs" className="bg-pink-500/50 text-pink-800">
            5
          </BadgeRoot>
          <BadgeRoot size="text-xs" className="bg-green-500/50 text-green-800">
            2 de 5
          </BadgeRoot>
        </div>

        <div className=" flex items-center gap-4">
          <ButtonRoot
            className="bg-pink-100/50 px-3 py-2 rounded hover:bg-pink-100"
            icon={FaPlus}
            fill="fill-pink-500"
            onClick={() => alert("Button")}
          >
            Nova Tarefa
          </ButtonRoot>
          <ButtonRoot
            className=" bg-green-100/50 hover:bg-green-100 px-3 py-2 rounded"
            fill="fill-green-500"
            icon={FaPlus}
            onClick={() => alert("Button")}
          >
            Nova Tarefa
          </ButtonRoot>
          <ButtonRoot
            disabled
            className="px-3 py-2 rounded"
            icon={FaPlus}
            onClick={() => alert("Button")}
          >
            Disabled
          </ButtonRoot>

          <ButtonRoot
            className="bg-pink-500 rounded hover:bg-pink-800"
            icon={FaRegTrashCan}
            fill="fill-pink-100"
            px="px-0"
            py="py-0"
            onClick={() => alert("Button")}
          />

          <ButtonRoot
            className="bg-pink-100/50 rounded hover:bg-pink-100"
            icon={FaRegTrashCan}
            fill="fill-pink-500"
            px="px-0"
            py="py-0"
            onClick={() => alert("Button")}
          />

          <ButtonRoot
            className=" bg-green-500  hover:bg-green-800 rounded"
            fill="fill-green-100"
            px="px-0"
            py="py-0"
            icon={FaRegTrashCan}
            onClick={() => alert("Button")}
          />

          <ButtonRoot
            className=" bg-green-100/50 hover:bg-green-100 rounded"
            fill="fill-green-500"
            px="px-0"
            py="py-0"
            icon={FaRegTrashCan}
            onClick={() => alert("Button")}
          />

          <ButtonRoot
            disabled
            className="rounded"
            px="px-0"
            py="py-0"
            icon={FaRegTrashCan}
            onClick={() => alert("Button")}
          />
        </div>
      </div>
    </main>
  );
}
