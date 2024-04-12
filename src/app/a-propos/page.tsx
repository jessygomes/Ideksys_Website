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
      <div className="flex flex-col gap-[0.5rem] lg:gap-[2rem] mt-[3rem] w-full px-[0.5rem] lg:px-[15rem]">
        <p className="text-white font-mPlusLight">
          Créé au début de l&apos;année 2021, IDEKSYS est une société
          spécialisée en électricité, courant faible situé à Evry dans
          l&apos;Essonne (91). Nous excellons dans la conception et la
          réalisation d&apos;installations ainsi que de la maintenance, en
          garantissant une conformité des normes acutelles.
        </p>
        <p className="text-white font-mPlusLight">
          Notre expertise s&apos;étend du secteur tertiaire, industriel et
          public. Fort de nos engagements envers l&apos;excellence, nous sommes
          prêts à répondre à vos besoins en assurant les solutions suivantes :
          Sûreté, Système de sécurité incendie, Eclairage de sécurité et
          Installation électrique
        </p>
      </div>
    </section>
  );
}
