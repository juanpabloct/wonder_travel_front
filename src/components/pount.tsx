import { DivisionPount } from "./divisionPount";
import { Icon } from "./icon";
import { Flex } from "./tw-components/flex";
export interface PountProp {
  title?: string;
  subTitle?: string;
  icon?: string;
  description?: string;
  divisionStart?: boolean;
  divisionEnd?: boolean;
}
export const Pount = ({
  icon,
  subTitle,
  title,
  description,
  divisionStart = true,
  divisionEnd,
}: PountProp) => {
  return (
    <>
      {divisionStart && <DivisionPount />}
      <div className="grid grid-cols-3 justify-items-center ">
        <h4>{title}</h4>
        <Icon icon={icon} />
        <Flex width="w-full" className="relative justify-start">
          <Flex col className="absolute text-[11px]">
            <p className="">{subTitle}</p>
            <p className=" text-[#707070] h-2">{description}</p>
          </Flex>
        </Flex>
      </div>
      {divisionEnd && <DivisionPount />}
    </>
  );
};
