import { DivisionPount } from "./divisionPount";
import { Flex } from "./tw-components/flex";

export const DayDetails = ({ day }: { day: string }) => {
  return (
    <div className="grid grid-cols-3">
      <div className="col-start-2">
        <DivisionPount />
      </div>
      <Flex col className="h-full">
        <h4 className="text-right border-t w-32 border-orange-500 font-bold text-orange-500 self-end mt-3">
          {day}
        </h4>
      </Flex>
    </div>
  );
};
