import { avion, bote, food, reciclar, send, sleep } from "../public/icons";

export const information = [
  {
    dia: "Día 1",
    startLine: false,
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
        icon: avion,
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
        icon: food,
      },
      {
        type: "target",
        icon: send,
        title: "Cerro diablo",
        description: "Caminata y escalada al atardecer",
      },
      {
        type: "pount",
        subTitle: "Alojamiento y cena en cabañas indígenas",
        divisionEnd: false,
        icon: sleep,
      },
    ],
  },
  {
    dia: "Día 2",
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
        icon: food,
      },
      {
        type: "pount",
        subTitle: "Desplazamiento a la comunidad La Ceiba",
        icon: bote,
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
        icon: sleep,
      },
    ],
  },
  {
    dia: "Día 3",
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
        icon: reciclar,
        title: "Actividad Verde",
        description2: "Ruta de Miel",
        style: "border-[#188038] border-solid border-2",
        styleIcon: "bg-[#188038]",
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
        icon: food,
      },
      {
        type: "target",
        icon: send,
        title: "¡A nadar!",
        description2:
          "Baño en las aguas del Río Atabapo en la piedra de Maviso",
        description3: "Río Atabapo",
      },
      {
        type: "target",
        icon: send,
        title: "Dosel/ Canopy",
        description2:
          "Atravesando el nororiente amazónico por las copas de los árboles.",
        description3: "Reserva Natural Morú",
      },
      {
        type: "pount",
        subTitle: "Alojamiento y cena en Reserva Natural Morú",
        icon: sleep,
      },
      {
        type: "pount",
        subTitle: "Desplazamiento a Puerto Inírida y aeropuerto",
        divisionStart: true,
        divisionEnd: false,
        icon: bote,
      },
    ],
  },
];
