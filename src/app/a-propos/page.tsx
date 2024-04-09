import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "A Propos de nous | Ideksys",
  description: "A propos de nous chez Ideksys",
};

export default function Propos() {
  return (
    <section className=" mt-20 lg:mt-[7rem]">
      <div className="flex flex-col gap-[1rem] lg:gap-[2rem] mx-[0.5rem] lg:mx-[1rem] rounded-2xl lg:rounded-3xl bg-gradient-to-r from-vert-securite to-bleu-surete ">
        <div className="w-full h-[3rem] lg:h-[4rem] mt-[1rem]">
          <Image
            src="/Logo/ideksys_white.png"
            height="1000"
            width="1000"
            className="h-70 w-auto h-[4rem] object-contain mx-auto lg:w-auto lg:h-[6rem] Icon"
            alt="thumbnail"
          />
        </div>
        <h1 className="text-white font-mPlusBold uppercase tracking-widest text-[1.5rem] lg:text-[3rem] text-center my-[0.5rem]">
          à propos de nous
        </h1>
      </div>
    </section>
  );
}
