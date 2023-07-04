import { Main } from "@/components/main";
import { Details } from "@/components/detalles";
import viajero from "../../public/viajero.png";
import viajero2 from "../../public/viajero (1).png";
import wonderOrange from "../../public/Group 1101.svg";
import tucan from "../../public/tucan.png";
import puestaDeSol from "../../public/puesta-de-sol.png";
import ballena from "../../public/ballena (2).png";
import amazonas from "../../public/amazonas (3).png";
import montañas from "../../public/montanas (1).png";
import PersonAdventure from "../../public/noun_adventure_68979.svg";
import Image from "next/image";
import { PountsTravel } from "@/components/pountsTravel";
import { Flex } from "@/components/tw-components/flex";

export default function Home() {
  return (
    <main className=" min-h-screen">
      <Flex
        col
        className="items-center justify-between  relative gap-6 bg-blackLight"
      >
        <Main />
        <Details />
      </Flex>
      <Flex col className="bg-beige text-black justify-center">
        <h3 className="text-xs text-center w-10/12 font-bold py-4 self-center">
          Wonder Travel es la plataforma que conecta viajeros con anfitriones en
          lugares mágicos de Colombia
        </h3>
        <Flex>
          <Flex>
            <Image src={viajero} alt="Viajero1" />
            <Image src={viajero2} alt="Viajero2" />
          </Flex>
          <Image src={wonderOrange} alt="Wonder Orange" />
          <div className="grid grid-cols-2 justify-items-center">
            <Image src={tucan} alt="" width={28} />
            <Image src={amazonas} alt="" width={28} />
            <Image className="col-span-2" src={montañas} alt="" width={28} />
            <Image src={puestaDeSol} alt="" width={28} />
            <Image src={ballena} alt="" width={28} />
          </div>
        </Flex>
        <Flex className="py-9">
          <Image src={PersonAdventure} alt="Wonder Orange" />
        </Flex>
        <Flex className="">
          <Flex col width="w-2/3">
            <Flex className="justify-between">
              <h3 className="text-xl font-semibold">La travesía</h3>
              <Flex col className="">
                <span>Wonder Travel</span>
              </Flex>
            </Flex>
            <PountsTravel />
          </Flex>
        </Flex>
      </Flex>
    </main>
  );
}
