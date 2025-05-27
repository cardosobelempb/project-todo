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
import { InputRoot } from "./components/input-root/input-root";
import { InputCheckBoxRoot } from "./components/input-checkbox-root/input-checkbox-root";
import { BoxRoot } from "./components/box-root/box-root";
import { ContainerRoot } from "./components/container-root/container-root";
import { ContentRoot } from "./components/content-root/content-root";
import { SkeletonRoot } from "./components/skeleton-root/skeleton-root";

export default function App() {
  return (
    <>
      <ContainerRoot className="flex flex-col gap-y-5">
        <ContentRoot as="div" className="grid gap-y-5">
          <BoxRoot className=" flex flex-col gap-y-5">
            <TextRoot size="text-xs" font="font-semibold" text="text-gray-800">
              ToDo List
            </TextRoot>
            <TextRoot size="text-base" text="text-gray-800">
              ToDo List
            </TextRoot>
            <TextRoot
              size="text-base"
              leading="leading-6"
              font="font-bold"
              text="text-gray-800"
            >
              ToDo List
            </TextRoot>
          </BoxRoot>
          <BoxRoot className=" flex gap-y-5 borde">
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
          </BoxRoot>

          <BoxRoot as="div" className=" flex gap-y-5">
            <BadgeRoot size="text-xs" className="bg-pink-500/50 text-pink-800">
              5
            </BadgeRoot>
            <BadgeRoot
              size="text-xs"
              className="bg-green-500/50 text-green-800"
            >
              2 de 5
            </BadgeRoot>
          </BoxRoot>
        </ContentRoot>
        <ContentRoot className=" flex flex-col gap-y-4">
          <BoxRoot className="flex flex-col gap-y-4 ">
            <ButtonRoot
              className="bg-pink-100/50 px-3 py-2 rounded hover:bg-pink-100"
              icon={FaPlus}
              fill="fill-pink-500"
              onClick={() => alert("Button")}
              w="w-full"
            >
              Nova Tarefa
            </ButtonRoot>
            <ButtonRoot
              className=" bg-green-100/50 hover:bg-green-100 px-3 py-2 rounded"
              fill="fill-green-500"
              icon={FaPlus}
              onClick={() => alert("Button")}
              w="w-full"
            >
              Nova Tarefa
            </ButtonRoot>
            <ButtonRoot
              disabled
              className="px-3 py-2 rounded"
              icon={FaPlus}
              onClick={() => alert("Button")}
              w="w-full"
            >
              Disabled
            </ButtonRoot>
          </BoxRoot>

          <BoxRoot className="flex gap-y-4 justify-start">
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
          </BoxRoot>
        </ContentRoot>
        <ContentRoot className="flex flex-col gap-y-4">
          <BoxRoot className="flex flex-col gap-y-4 ">
            <InputRoot w="w-full" isFocus icon={FaRegTrashCan} />
            <InputRoot className="self-start" isFocus />
          </BoxRoot>
          <BoxRoot className="flex gap-x-4 ">
            <InputCheckBoxRoot />
            <InputCheckBoxRoot isChecked icon={FaCheck} />
            <InputCheckBoxRoot isChecked disabled />
            <InputCheckBoxRoot h="h-4" w="w-4" />
            <InputCheckBoxRoot h="h-4" w="w-4" isChecked icon={FaCheck} />
            <InputCheckBoxRoot h="h-4" w="w-4" isChecked disabled />
          </BoxRoot>
        </ContentRoot>
        <ContentRoot as="section" w="w-lg">
          <BoxRoot>
            <InputCheckBoxRoot h="h-4" w="w-4" isChecked icon={FaCheck} />
            <InputRoot
              pb="pb-2"
              w="w-full"
              placeholder="Fazer compras da semana"
            />

            <ButtonRoot
              className="rounded"
              px="px-0"
              py="py-0"
              fill="fill-gray-800"
              icon={PiClipboardText}
              onClick={() => alert("Button")}
            />
            <ButtonRoot
              className="rounded"
              px="px-0"
              py="py-0"
              fill="fill-gray-800"
              icon={GoPencil}
              onClick={() => alert("Button")}
            />
          </BoxRoot>

          <BoxRoot>
            <InputRoot
              disabled
              w="w-full"
              placeholder="Fazer compras da semana"
              pb="pb-2"
            />

            <ButtonRoot
              className="bg-pink-100/50 rounded hover:bg-pink-100"
              icon={FaX}
              fill="fill-pink-500"
              px="px-0"
              py="py-0"
              h="h-4"
              w="w-4"
              onClick={() => alert("Button")}
            />
            <InputCheckBoxRoot h="h-4" w="w-4" isChecked icon={FaCheck} />
          </BoxRoot>
        </ContentRoot>

        <ContentRoot className="flex flex-col gap-y-4">
          <TextRoot as="h3">Skeleton Root</TextRoot>
          <SkeletonRoot w="w-full" h="h-40" />
          <SkeletonRoot w="w-lg" h="h-80" rounded="rounded-lg" />
          <SkeletonRoot w="w-lg" h="h-24" rounded="rounded-full" />
        </ContentRoot>
      </ContainerRoot>
    </>
  );
}
