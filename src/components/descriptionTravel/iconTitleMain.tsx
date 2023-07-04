import Image from "next/image";
import { IconWithTitle } from "./iconWithTitle";

export const IconTitleMain = ({
  icon,
  text,
}: {
  icon: string;
  text: string;
}) => {
  return (
    <div className="col-span-2">
      <IconWithTitle
        icon={<Image src={icon} alt={text} width={20} />}
        text={
          <p className="text-xs  break-words text-left w-[8rem] ml-3">{text}</p>
        }
      />
    </div>
  );
};
