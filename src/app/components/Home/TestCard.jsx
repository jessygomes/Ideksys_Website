"use client";

import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "../ui/3d-card";
import Link from "next/link";

export function TestCard() {
  return (
    <section>
      <h1 className="text-white font-mPlusBold tracking-widest text-[2rem] lg:text-[3rem] text-center my-[0.5rem]">
        NOS EXPERTISES
      </h1>
      <div className=" flex flex-wrap justify-center lg:flex-row px-[0.5rem] lg:px-[1rem] gap-[0.5rem] lg:gap-[1rem] ">
        <Link
          href="/nos-expertises/surete"
          className="flex lg:flex-1 flex-col h-auto lg:h-[18rem] w-[48%] sm:w-full Card"
        >
          <CardContainer className="inter-var w-full">
            <CardBody className="flex flex-col group/card w-full sm:w-auto h-[10rem] lg:h-[18rem] flex-grow rounded-2xl lg:rounded-3xl bg-gradient-to-r from-bleu-surete to-blue-900">
              <CardItem
                translateZ="100"
                className="w-full flex flex-col justify-center items-center h-[7rem] lg:h-[14rem]"
              >
                <Image
                  src="/icons/surete.png"
                  height="1000"
                  width="1000"
                  className="h-70 w-auto h-[4rem] object-contain mx-auto lg:w-auto lg:h-[10rem] Icon"
                  alt="Icone Sûreté"
                />
              </CardItem>
              <CardItem
                translateZ="50"
                className=" font-mPlusBold mx-auto text-white lg:text-[1.5rem] uppercase Icon"
              >
                Sûreté
              </CardItem>
            </CardBody>
          </CardContainer>
        </Link>

        <Link
          href="/nos-expertises/securite-incendie"
          className="flex lg:flex-1 flex-col h-auto lg:h-[18rem] w-[48%] sm:w-full Card"
        >
          <CardContainer className="inter-var w-full">
            <CardBody className="flex flex-col group/card w-full sm:w-auto h-[10rem] lg:h-[18rem] flex-grow rounded-2xl lg:rounded-3xl bg-gradient-to-r from-rouge-incendie to-red-900 Card">
              <CardItem
                translateZ="100"
                className="w-full flex flex-col justify-center items-center h-[7rem] lg:h-[14rem]"
              >
                <Image
                  src="/icons/incendie.png"
                  height="1000"
                  width="1000"
                  className="h-70 w-auto h-[4rem] object-contain mx-auto lg:w-auto lg:h-[10rem] Icon"
                  alt="Icône Incendie"
                />
              </CardItem>
              <CardItem
                translateZ="50"
                className=" font-mPlusBold mx-auto text-center text-white px-[0.5rem] pb-[1rem] lg:text-[1.5rem] uppercase Icon"
              >
                Sécurité incendie
              </CardItem>
            </CardBody>
          </CardContainer>
        </Link>

        <Link
          href="/nos-expertises/eclairage-de-securite"
          className="flex lg:flex-1 flex-col h-auto lg:h-[18rem] w-[48%] sm:w-full Card"
        >
          <CardContainer className="inter-var w-full ">
            <CardBody className="flex flex-col group/card w-full sm:w-auto h-[10rem] lg:h-[18rem] flex-grow rounded-2xl lg:rounded-3xl bg-gradient-to-r from-vert-securite to-green-900 Card">
              <CardItem
                translateZ="100"
                className="w-full flex flex-col justify-center items-center h-[6rem] lg:h-[14rem]"
              >
                <Image
                  src="/icons/eclairage.png"
                  height="1000"
                  width="1000"
                  className="h-70 rounded-md w-auto h-[4rem] object-contain mx-auto lg:w-auto lg:h-[10rem] Icon"
                  alt="Icône éclairage de sécurité"
                />
              </CardItem>
              <CardItem
                translateZ="50"
                className=" font-mPlusBold mx-auto text-center text-white lg:text-[1.5rem] px-[0.5rem] pb-[1rem] uppercase Icon"
              >
                éclairage de sécurité
              </CardItem>
            </CardBody>
          </CardContainer>
        </Link>

        <Link
          href="/nos-expertises/installation-electrique"
          className="flex lg:flex-1 flex-col h-auto lg:h-[18rem] w-[48%] sm:w-full Card"
        >
          <CardContainer className="inter-var w-full ">
            <CardBody className="flex flex-col group/card w-full sm:w-auto h-[10rem] lg:h-[18rem] flex-grow rounded-2xl lg:rounded-3xl  bg-gradient-to-r from-jaune-elec to-yellow-600 Card">
              <CardItem
                translateZ="100"
                className="w-full flex flex-col justify-center items-center h-[6rem] lg:h-[14rem]"
              >
                <Image
                  src="/icons/elec.png"
                  height="1000"
                  width="1000"
                  className="h-70 rounded-md w-auto h-[4rem] object-contain mx-auto lg:w-auto lg:h-[10rem] Icon"
                  alt="Icone Installation Electrique"
                />
              </CardItem>
              <CardItem
                translateZ="50"
                className=" font-mPlusBold mx-auto text-center text-white lg:text-[1.5rem] pb-[0.5rem] uppercase Icon"
              >
                installation electrique
              </CardItem>
            </CardBody>
          </CardContainer>
        </Link>
      </div>
    </section>
  );
}
