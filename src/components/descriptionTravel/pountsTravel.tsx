import { DivisionPount } from "./divisionPount";
import { Target, TargetProps } from "./target";
import { Flex } from "../tw-components/flex";
import { Icon } from "./icon";
import { DayDetails } from "./dayDetails";
import { Pount, PountProp } from "./pount";
import { avion } from "../../../public/icons";
import { information } from "@/information";

export const DescriptionTravel = () => {
  return (
    <Flex col width="w-full">
      <Flex col>
        {information.map((dia, i) => {
          return (
            <Flex key={dia.dia} col>
              <DayDetails day={dia.dia} startLine={dia.startLine} />
              {dia.data.map((valor, i) => {
                if (valor.type === "pount") {
                  const {
                    description,
                    divisionEnd,
                    divisionStart,
                    icon,
                    title,
                  } = valor as PountProp;
                  return (
                    <Pount
                      key={i}
                      subTitle={valor.subTitle ?? ""}
                      description={description}
                      divisionEnd={divisionEnd}
                      divisionStart={divisionStart}
                      icon={icon}
                      title={title}
                    />
                  );
                } else if (valor.type === "target") {
                  const {
                    icon,
                    title,
                    description2,
                    description3,
                    description,
                    style,
                    styleIcon,
                  } = valor as TargetProps;
                  return (
                    <Target
                      icon={icon}
                      title={title ?? ""}
                      description2={description2}
                      description3={description3}
                      description={description}
                      key={i}
                      style={style}
                      styleIcon={styleIcon}
                    />
                  );
                }
              })}
            </Flex>
          );
        })}
      </Flex>
      <Flex col>
        <DivisionPount />
        <Flex col className="items-center">
          <Icon icon={avion} />
          <h2 className="break-words w-[25%] text-center text-sm">
            Regreso a ciudad de origen
          </h2>
        </Flex>
      </Flex>
      <Flex className="my-16">
        <hr className="w-10/12 h-4 border-t-2 border-[#d4d4d3]" />
      </Flex>
    </Flex>
  );
};
