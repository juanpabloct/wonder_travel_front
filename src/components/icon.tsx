import Image from "next/image";
import { Flex } from "./tw-components/flex";

export const Icon = ({ icon }: { icon?: string }) => {
  return (
    <Flex className="h-8 w-8 col-start-2 bg-[#FF6549] rounded-full">
      {icon && <Image src={icon} alt="" width={20} height={20} />}
    </Flex>
  );
};
