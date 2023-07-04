import Image from "next/image";
import { IconTitleMain } from "./iconTitleMain";
import mapa from "../../public/Group 536.svg";
import IconArrowUp from "../../public/Icon - Keyboard Arrow - Up - Dark.svg";
import IconWhatsapp from "../../public/whatsapp (1).png";
import IconNounOffRoad from "../../public/noun_off-road_1938384.svg";
import IconSendMessage from "../../public/Path 2202.svg";
import IconNounHut from "../../public/noun_Hut_233351.svg";
import IconNounFood from "../../public/noun_Food_2688587-1.svg";
import selectorMapa from "../../public/Group 431.svg";
import iconExperience from "../../public/noun_adventure_1941281.svg";
import { IconWithTitle } from "./iconWithTitle";
export const Details = () => {
  return (
    <>
      <hr className="w-1/2 my-6" />
      <h4 className="break-words text-center w-1/2 text-xs font-extralight">
        viaje por lo cerros de Mavicure y sus alrededores
      </h4>
      <div className="border border-solid border-white w-64 flex gap-6 p-3 rounded-md">
        <Image alt="Send Message" src={IconSendMessage} className="ml-2" />
        <span>4 dias, 3 noches*</span>
      </div>
      <IconWithTitle
        icon={
          <div className="relative ">
            <Image src={mapa} alt="mapa de colombia" width={75} />
            <Image
              src={selectorMapa}
              alt="selector mapa de colombia"
              className="absolute top-[42%] right-2"
              width={10}
            />
          </div>
        }
        text={<p className="text-xs">Orinoquia (Guania, Colombia)</p>}
      />
      <div className="grid grid-cols-4 gap-x-8 gap-y-4">
        <IconTitleMain icon={iconExperience} text="Experiencia Cautivantes" />
        <IconTitleMain icon={IconNounFood} text="Todas las comidas Incluidas" />
        <IconTitleMain icon={IconNounHut} text="Alojamientos únicos" />
        <IconTitleMain
          icon={IconNounOffRoad}
          text="Transporte terrestre y fluvial en la Guainia"
        />
      </div>
      <div className="flex items-center flex-col gap-2">
        <h3>Whatsapp:</h3>
        <button className="flex gap-3 bg-gradient-to-t w-[18rem] justify-center p-2 from-[#FF6348] to-[#FF805A] shadow-sm  shadow-[#FF6348]">
          <Image src={IconWhatsapp} alt="Icono Whatsapp" />
          <span className="text-sm">Reservar / información</span>
        </button>
      </div>
      <Image src={IconArrowUp} alt="Icono Arrow Up" />
    </>
  );
};
