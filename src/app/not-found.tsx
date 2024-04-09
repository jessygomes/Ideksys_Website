import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Page Introuvable | Ideksys",
  description: "Page Introuvable | Ideksys",
};

export default function NotFound() {
  return (
    <section className="h-[100vh] flex items-center">
      <div className="w-full flex flex-col gap-[1rem] lg:gap-[2rem] mx-[0.5rem] lg:mx-[1rem] lg:py-[1rem] rounded-2xl lg:rounded-3xl ">
        {/* <div className="w-full h-[3rem] lg:h-[4rem] mt-[1rem]">
          <Image
            src="/icons/surete.png"
            height="1000"
            width="1000"
            className="h-70 w-auto h-[4rem] object-contain mx-auto lg:w-auto lg:h-[6rem] Icon"
            alt="thumbnail"
          />
        </div> */}
        <h1 className="text-white font-mPlusBold uppercase tracking-widest text-[1.2rem] lg:text-[3rem] text-center my-[0.5rem]">
          404 | Page introuvable
        </h1>
      </div>
    </section>
  );
}
