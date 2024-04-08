"use client";
import Image from "next/image";
import Link from "next/link";
import { CardBody, CardContainer, CardItem } from "../ui/3d-card";

export default function Expertises() {
  return (
    <section>
      <h1 className="text-white font-mPlusBold tracking-widest text-[2rem] lg:text-[3rem] text-center my-[0.5rem]">
        NOS EXPERTISES
      </h1>
      <CardContainer className="inter-var flex flex-wrap lg:flex-row px-[0.5rem] lg:px-[1rem] gap-[0.5rem] lg:gap-[1rem]">
        <CardBody className="flex-[2] bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border">
          <Link
            href="/surete"
            id="surete"
            className="flex flex-col justify-center items-center gap-[0.5rem] lg:gap-[1rem] flex-[2] h-[10rem] lg:h-[18rem] w-full rounded-2xl lg:rounded-3xl overflow-hidden bg-bleu-surete"
          >
            <CardItem translateZ="100" className="h-[4rem] lg:h-[10rem] w-auto">
              <Image
                id="iconImg"
                className="w-auto h-[4rem] object-contain mx-auto lg:w-auto lg:h-[10rem] filter drop-shadow-2xl"
                src="/Logo/surete.png"
                width={500}
                height={500}
                alt="Technicien électricien travaillant dans un standard de fusibles et utilisant une tablette"
              />
            </CardItem>
            <h2 className=" font-mPlusBold text-white lg:text-[1.8rem] text-center">
              SÛRETE
            </h2>
          </Link>
        </CardBody>
        <Link
          href="securite-indendie"
          className="flex flex-col justify-center items-center gap-[0.5rem] lg:gap-[1rem] flex-[2] h-[10rem] lg:h-[18rem] w-full rounded-2xl lg:rounded-3xl overflow-hidden bg-rouge-incendie"
        >
          <div className="h-[4rem] lg:h-[10rem] w-auto">
            <Image
              className="w-auto h-[4rem] object-cover mx-auto lg:w-auto lg:h-[10rem]"
              src="/Logo/incendie.png"
              width={400}
              height={400}
              alt="Technicien électricien travaillant dans un standard de fusibles et utilisant une tablette"
            />
          </div>
          <h2 className=" font-mPlusBold text-white lg:text-[1.8rem] text-center">
            SECURITE INDENDIE
          </h2>
        </Link>
        <Link
          href="eclairage-de-securite"
          className="flex flex-col justify-center items-center gap-[0.5rem] lg:gap-[1rem] flex-[2] h-[10rem] lg:h-[18rem] w-full rounded-2xl lg:rounded-3xl overflow-hidden bg-vert-securite"
        >
          <div className="h-[4rem] lg:h-[10rem] w-auto">
            <Image
              className="w-auto h-[4rem] object-cover mx-auto lg:w-auto lg:h-[10rem] drop-shadow-2xl"
              src="/Logo/eclairage.png"
              width={500}
              height={500}
              alt="Technicien électricien travaillant dans un standard de fusibles et utilisant une tablette"
            />
          </div>
          <h2 className=" font-mPlusBold text-white lg:text-[1.8rem] text-center">
            ECLAIRAGE DE SECURITE
          </h2>
        </Link>
      </CardContainer>
    </section>
  );
}
