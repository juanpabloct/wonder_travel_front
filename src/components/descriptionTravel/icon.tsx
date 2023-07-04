import Image from "next/image";
import { Flex } from "../tw-components/flex";

export const Icon = ({
  icon,
  styleIcon,
}: {
  icon?: string;
  styleIcon?: string;
}) => {
  return (
    <Flex
      className={`h-8 w-8 col-start-2 bg-[#FF6549] rounded-full ${styleIcon}`}
    >
      {icon && <Image src={icon} alt="" width={20} height={20} />}
    </Flex>
  );
};
