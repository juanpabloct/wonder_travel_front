import { Main } from "@/components/header/main";
import { Details } from "@/components/header/detalles";

import Image from "next/image";
import { DescriptionTravel } from "@/components/descriptionTravel/pountsTravel";
import { Flex } from "@/components/tw-components/flex";
import {
  PersonAdventure,
  acotur,
  amazonas,
  ballena,
  footer,
  montañas,
  puestaDelSol,
  tucan,
  viajero1,
  viajero2,
  wonderBlack,
  wonderOrange,
} from "../../public/icons";

export default function Home() {
  return (
    <main className=" min-h-screen">
      <header className=" flex flex-col items-center justify-between  relative gap-6 bg-blackLight">
        <Main />
        <Details />
      </header>
      <Flex col className="bg-beige text-black ">
        <h3 className="text-xs text-center w-10/12 font-bold py-4 self-center">
          Wonder Travel es la plataforma que conecta viajeros con anfitriones en
          lugares mágicos de Colombia
        </h3>
        <Flex>
          <Flex>
            <Image src={viajero1} alt="Viajero1" />
            <Image src={viajero2} alt="Viajero2" />
          </Flex>
          <Image src={wonderOrange} alt="Wonder Orange" />
          <div className="grid grid-cols-2 justify-items-center">
            <Image src={tucan} alt="" width={28} />
            <Image src={amazonas} alt="" width={28} />
            <Image className="col-span-2" src={montañas} alt="" width={28} />
            <Image src={puestaDelSol} alt="" width={28} />
            <Image src={ballena} alt="" width={28} />
          </div>
        </Flex>
        <Flex className="py-9">
          <Image src={PersonAdventure} alt="Wonder Orange" />
        </Flex>
        <Flex className="">
          <Flex col width="w-2/3" className="max-w-2xl">
            <Flex className="justify-between">
              <h3 className="text-xl font-semibold">La travesía</h3>
              <Flex col className="">
                <span>Wonder Travel</span>
              </Flex>
            </Flex>
            <DescriptionTravel />
          </Flex>
        </Flex>
      </Flex>
      <footer className="bg-beige text-black">
        <Flex col className="items-center pb-16">
          <div className="grid grid-cols-2 justify-items-center items-center gap-2 divide-x-2 divide-orange-500 mb-3">
            <Image src={wonderBlack} alt="Logo en negro" />
            <Flex className="h-1/2 items-center pl-6">
              <h4 className="">#ViajaAlMomento</h4>
            </Flex>
          </div>
          <Image src={footer} alt="footer" className="mb-3" />
          <h2 className="underline my-2 ">Miembro de:</h2>
          <Image src={acotur} alt="Acotur" />
        </Flex>
        <Flex className="bg-black p-2">
          <p className="text-[#FDFCF7] text-[15px]">
            © Copyright Wonder Travel
          </p>
        </Flex>
      </footer>
    </main>
  );
}
