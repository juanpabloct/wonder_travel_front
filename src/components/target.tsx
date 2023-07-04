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
}
const P = tw.p`
col-span-2 text-sm
`;
export const Target = ({
  icon,
  title,
  description,
  description2,
  description3,
  style,
}: TargetProps) => {
  return (
    <>
      <DivisionPount />
      <div
        className={`grid grid-cols-5  shadow-sm shadow-black rounded-md p-4 justify-items-center gap-3  ${style}`}
      >
        <div className="col-span-2">
          <h2 className="text-lg font-bold">{title}</h2>
        </div>
        <div className="row-span-2 self-center">
          <Icon icon={icon} />
        </div>
        <P>{description}</P>
        <P>{description2}</P>
        <P className="col-start-4">{description3}</P>
      </div>
    </>
  );
};
