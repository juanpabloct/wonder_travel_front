import { DivisionPount } from "./divisionPount";
import { Target, TargetProps } from "./target";
import { Flex } from "./tw-components/flex";
import send from "../../public/Path 2282.svg";
import { Icon } from "./icon";
import { DayDetails } from "./dayDetails";
import { Pount, PountProp } from "./pount";

const data = [
  {
    dia: "Dia 1",
    data: [
      {
        type: "pount",
        title: "Inicio",
        subTitle: "Ciudad de origen",
        divisionStart: false,
      },
      {
        type: "pount",
        subTitle: "Vuelo (1.5h)",
        description: "(No incluido, lo podemos organizar por ti)",
      },
      {
        type: "pount",
        subTitle: "Llegada a Pto. Inírida",
      },
      {
        type: "target",
        icon: send,
        title: "Los cerros sagrados",
        description: "Visita a los Cerros de Mavicure, Pajarito y Mono",
        description2: "Travesía en lancha (2h) desde Puerto Inírida",
        description3: "Visita a las comunidades del Remanso y Venado",
      },
      {
        type: "pount",
        subTitle: "Almuerzo en Comunidad Indigena",
      },
      {
        type: "pount",
        icon: send,
        title: "Cerro diablo",
        description: "Caminata y escalada al atardecer",
      },
      {
        type: "pount",
        subTitle: "Almuerzo en Comunidad Indigena",
        divisionEnd: false,
      },
    ],
  },
  {
    dia: "Dia 2",
    data: [
      {
        type: "target",
        icon: send,
        title: "Acenso al cerro Mavicure",
        description: "Para deleitarse con los paisajes del escudo guayanés",
      },
      {
        type: "target",
        icon: send,
        title: "Caño San Joaquín",
        description:
          "El “oasis del Guainía”, te estremecerá con sus aguas color naranja",
      },
      {
        type: "pount",
        subTitle: "Almuerzo en Comunidad Indigena",
      },
      {
        type: "pount",
        subTitle: "Desplazamiento a la comunidad La Ceiba",
      },
      {
        type: "target",
        icon: send,
        title: "Fauna Nocturna",
        description2: "Desplazamiento a la comunidad La Ceiba",
        description3:
          "def. Ictiofauna: Conjunto de peces de una zona acuática acotada",
      },
      {
        type: "pount",
        subTitle: "Alojamiento y cena en cabañas indígenas",
        divisionStart: true,
        divisionEnd: false,
      },
    ],
  },
  {
    dia: "Dia 3",
    data: [
      {
        type: "target",
        icon: send,
        title: "Comunidad la Ceiba",
        description:
          "Conocerás sus iniciativas productivas sostenibles como la Ruta de la Miel",
      },
      {
        type: "target",
        icon: send,
        title: "Actividad Verde",
        description2: "Ruta de Miel",
        style: "border-[#188038] border-solid border-4",
        descripcion:
          "Conoce la iniciativa de producción de miel orgánica que ayuda a reforestar la Orinoquía",
      },
      {
        type: "target",
        icon: send,
        title: "El gran Río Orinoco y la Estrella Fluvial",
        description:
          "Visita a la Estrella Fluvial donde convergen los Ríos Guaviare, Atabapo e Inírida originando el gran Río Orinoco",
      },
      {
        type: "pount",
        subTitle: "Almuerzo en Reserva Natural",
      },
      {
        type: "target",
        iconTarget: send,
        titleTarget: "¡A nadar!",
        description2:
          "Baño en las aguas del Río Atabapo en la piedra de Maviso",
        description3: "Río Atabapo",
      },
      {
        type: "target",
        iconTarget: send,
        titleTarget: "Dosel/ Canopy",
        description2:
          "Atravesando el nororiente amazónico por las copas de los árboles.",
        description3: "Reserva Natural Morú",
      },
      {
        type: "pount",
        subTitle: "Alojamiento y cena en Reserva Natural Morú",
      },
      {
        type: "pount",
        subTitle: "Desplazamiento a Puerto Inírida y aeropuerto",
        divisionStart: true,
        divisionEnd: false,
      },
    ],
  },
];
export const PountsTravel = () => {
  return (
    <Flex col width="w-full">
      <Flex col>
        {data.map((dia, i) => {
          return (
            <Flex key={dia.dia} col>
              <DayDetails day={dia.dia} />
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
                  } = valor as TargetProps;
                  return (
                    <Target
                      icon={icon}
                      title={title ?? ""}
                      description2={description2}
                      description3={description3}
                      description={description}
                      key={i}
                      style={style ?? ""}
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
          <Icon />
          <h2 className="break-words w-[22%] text-center text-sm">
            Regreso a ciudad de origen
          </h2>
        </Flex>
      </Flex>
    </Flex>
  );
};
