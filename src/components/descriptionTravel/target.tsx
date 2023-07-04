import Image from "next/image";
import { Icon } from "./icon";
import { DivisionPount } from "./divisionPount";
import tw from "tailwind-styled-components";
export interface TargetProps {
  icon?: string;
  title?: string;
  description?: string;
  description2?: string;
  description3?: string;
  style?: string;
  styleIcon?: string;
}
const P = tw.p`
col-span-2 text-[11px] md:text-sm
`;
export const Target = ({
  icon,
  title,
  description,
  description2,
  description3,
  style,
  styleIcon,
}: TargetProps) => {
  return (
    <>
      <DivisionPount />
      <div
        className={`grid grid-cols-5  shadow-md shadow-[#00000047] rounded-lg p-4 justify-items-center max-w-xl self-center gap-3 w-[-webkit-fill-available] ${style}`}
      >
        <div className="col-span-2 justify-self-start">
          <h2 className="text-base md:text-lg text-left font-bold">{title}</h2>
        </div>
        <div className="row-span-2 self-center">
          <Icon icon={icon} styleIcon={styleIcon} />
        </div>
        <P>{description}</P>
        <P>{description2}</P>
        <P className="col-start-4">{description3}</P>
      </div>
    </>
  );
};
