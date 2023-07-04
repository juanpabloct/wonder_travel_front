import { DivisionPount } from "./divisionPount";
import { Flex } from "../tw-components/flex";

export const DayDetails = ({
  day,
  startLine = true,
}: {
  day: string;
  startLine?: boolean;
}) => {
  return (
    <div className="grid grid-cols-3 ">
      <div className="col-start-2">
        {startLine && (
          <>
            <DivisionPount />
            <DivisionPount />
          </>
        )}
      </div>
      <Flex col className="h-full row-span-2">
        <h4 className="text-right border-t w-4/5 md:w-2/3 border-orange-500 font-bold text-orange-500 self-end mt-3 translate-y-4">
          {day}
        </h4>
      </Flex>
    </div>
  );
};
