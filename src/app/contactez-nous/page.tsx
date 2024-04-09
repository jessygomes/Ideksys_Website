import type { Metadata } from "next";
import Image from "next/image";
import Contact from "../components/Contact";

export const metadata: Metadata = {
  title: "Contactez-nous | Ideksys",
  description: "Prenez contact avec Ideksys",
};

export default function ContactezNous() {
  return (
    <section className=" mt-20 lg:mt-[7rem]">
      <div className="flex flex-col gap-[1rem] lg:gap-[2rem] mx-[0.5rem] lg:mx-[1rem] rounded-2xl lg:rounded-3xl bg-gradient-to-r from-gris-case to-zinc-800 ">
        <div className="w-full h-[3rem] lg:h-[4rem] mt-[1rem]">
          <Image
            src="/icons/contact.png"
            height="1000"
            width="1000"
            className="h-70 w-auto h-[4rem] object-contain mx-auto lg:w-auto lg:h-[6rem] Icon"
            alt="thumbnail"
          />
        </div>
        <h1 className="text-white font-mPlusBold uppercase tracking-widest text-[1.5rem] lg:text-[3rem] text-center my-[0.5rem]">
          contactez-nous
        </h1>
      </div>
      <div className="mt-[0.5rem] lg:mt-[1rem] lg:px-[15rem] flex items-center justify-center">
        <Contact />
      </div>
    </section>
  );
}
