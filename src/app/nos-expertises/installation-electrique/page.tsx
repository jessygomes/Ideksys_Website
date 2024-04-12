import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Nos Expertises - Installation électrique | Ideksys",
  description: "Nos expertises dans l'installation électrique chez Ideksys",
};

export default function Electrique() {
  return (
    <section className=" mt-20 lg:mt-[7rem]">
      <div className="flex flex-col gap-[1rem] lg:gap-[2rem] mx-[0.5rem] lg:mx-[1rem] rounded-2xl lg:rounded-3xl bg-gradient-to-r from-jaune-elec to-yellow-600">
        <div className="w-full h-[3rem] lg:h-[4rem] mt-[1rem]">
          <Image
            src="/icons/eclairage.png"
            height="1000"
            width="1000"
            className="h-70 w-auto h-[4rem] object-contain mx-auto lg:w-auto lg:h-[6rem] Icon"
            alt="Icône éclairage de sécurité"
          />
        </div>
        <h1 className="text-white font-mPlusBold uppercase tracking-widest text-[1.4rem] lg:text-[3rem] text-center my-[0.5rem]">
          installation électrique
        </h1>
      </div>
    </section>
  );
}
