import Image from "next/image";
import iconoTituloPrincipal from "../../public/imageDirector/tituloPrincipal.svg";
import { Flex } from "./tw-components/flex";

export const Main = () => {
  return (
    <Flex
      col
      className="relative  items-center justify-center before:h-24 before:absolute before:bottom-0 before:w-full  before:bg-gradient-to-b before:from-[#00000013]  before:to-[#1a1c1f]  aspect-square lg:aspect-[3/2] 2xl:aspect-[3/1] md:bg-center  bg-[url('../../public/imageDirector/cerro-pajarito11-.png')] w-full bg-no-repeat bg-cover bg-right-bottom"
    >
      <Image src={iconoTituloPrincipal} alt="fondo" />
      <h2 className="text-white absolute bottom-0 text-4xl font-abrilFatFace font-semibold break-words w-2/3 text-center">
        Guanía y Cerros de Mavicure
      </h2>
    </Flex>
  );
};
