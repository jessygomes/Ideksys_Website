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
      <div className=" flex lg:flex-row px-[0.5rem] lg:px-[1rem] gap-[0.5rem] lg:gap-[1rem] ">
        <Link
          href="/nos-expertises/surete"
          className="flex flex-1 flex-col h-[15rem] lg:h-[18rem] w-full Card"
        >
          <CardContainer className="inter-var w-full">
            <CardBody className="flex flex-col group/card w-full sm:w-auto h-[15rem] lg:h-[18rem] flex-grow rounded-2xl lg:rounded-3xl bg-gradient-to-r from-bleu-surete to-blue-900">
              <CardItem
                translateZ="100"
                className="w-full flex flex-col justify-center items-center h-[10rem] lg:h-[14rem]"
              >
                <Image
                  src="/icons/surete.png"
                  height="1000"
                  width="1000"
                  className="h-70 w-auto h-[4rem] object-contain mx-auto lg:w-auto lg:h-[10rem] Icon"
                  alt="thumbnail"
                />
              </CardItem>
              <CardItem
                translateZ="50"
                className=" font-mPlusBold mx-auto text-white lg:text-[1.8rem] uppercase Icon"
              >
                Sûreté
              </CardItem>
            </CardBody>
          </CardContainer>
        </Link>

        <Link
          href="securite-incendie"
          className="flex flex-1 flex-col h-[15rem] lg:h-[18rem] w-full"
        >
          <CardContainer className="inter-var w-full">
            <CardBody className="flex flex-col group/card w-full sm:w-auto h-[15rem] lg:h-[18rem] flex-grow rounded-2xl lg:rounded-3xl bg-gradient-to-r from-rouge-incendie to-red-900 Card">
              <CardItem
                translateZ="100"
                className="w-full flex flex-col justify-center items-center gap-[0.5rem] h-[10rem] lg:h-[14rem] overflow-hidden"
              >
                <Image
                  src="/icons/incendie.png"
                  height="1000"
                  width="1000"
                  className="h-70 w-auto h-[4rem] object-contain mx-auto lg:w-auto lg:h-[10rem] Icon"
                  alt="thumbnail"
                />
              </CardItem>
              <CardItem
                translateZ="50"
                className=" font-mPlusBold mx-auto text-center text-white lg:text-[1.8rem] uppercase Icon"
              >
                Sécurité incendie
              </CardItem>
            </CardBody>
          </CardContainer>
        </Link>

        <Link
          href="eclairage-de-securite"
          className="flex flex-1 flex-col h-[15rem] lg:h-[18rem] w-full"
        >
          <CardContainer className="inter-var w-full ">
            <CardBody className="flex flex-col group/card w-full sm:w-auto h-[15rem] lg:h-[18rem] flex-grow rounded-2xl lg:rounded-3xl bg-gradient-to-r from-vert-securite to-green-900 Card">
              <CardItem
                translateZ="100"
                className="w-full flex flex-col justify-center items-center gap-[0.5rem] h-[10rem] lg:h-[14rem] overflow-hidden"
              >
                <Image
                  src="/icons/eclairage.png"
                  height="1000"
                  width="1000"
                  className="h-70 rounded-md w-auto h-[4rem] object-contain mx-auto lg:w-auto lg:h-[10rem] Icon"
                  alt="thumbnail"
                />
              </CardItem>
              <CardItem
                translateZ="50"
                className=" font-mPlusBold mx-auto text-center text-white lg:text-[1.8rem] uppercase Icon"
              >
                éclairage de sécurité
              </CardItem>
            </CardBody>
          </CardContainer>
        </Link>
      </div>
    </section>
  );
}
