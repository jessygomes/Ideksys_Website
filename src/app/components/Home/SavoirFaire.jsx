import Image from "next/image";

export default function SavoirFaire() {
  return (
    <section>
      <h1 className="text-white font-mPlusBold tracking-widest text-[1.5rem] lg:text-[2rem] text-center my-[0.5rem]">
        NOTRE SAVOIR-FAIRE
      </h1>
      <div className="flex flex-col gap-[2rem] sm:flex-row px-[1rem] lg:px-[15rem] mt-[3rem]">
        <article className="flex-1 flex flex-col gap-[1rem] sm:gap-[2rem]">
          <div className="h-[3rem] lg:h-[5rem] w-auto">
            <Image
              className="w-auto h-[3rem] object-contain mx-auto lg:w-auto lg:h-[5rem]"
              src="/icons/chrono.png"
              width={500}
              height={500}
              alt="Technicien électricien travaillant dans un standard de fusibles et utilisant une tablette"
            />
          </div>
          <p className="text-white text-justify font-mPlusLight text-[1rem]">
            Nous agissons avec efficacité pour répondre rapidement à vos
            besoins, sans compromis sur la qualité.{" "}
          </p>
        </article>
        <article className="flex-1 flex flex-col gap-[1rem] sm:gap-[2rem]">
          <div className="h-[3rem] lg:h-[5rem] w-auto">
            <Image
              className="w-auto h-[3rem] object-contain mx-auto lg:w-auto lg:h-[5rem]"
              src="/icons/connaissance.png"
              width={500}
              height={500}
              alt="Technicien électricien travaillant dans un standard de fusibles et utilisant une tablette"
            />
          </div>
          <p className="text-white text-justify font-mPlusLight text-[1rem]">
            Nous combinons savoir-faire et expérience pour résoudre vos
            problèmes, offrant ainsi des solutions fiables et durables.
          </p>
        </article>
        <article className="flex-1 flex flex-col gap-[1rem] sm:gap-[2rem]">
          <div className="h-[3rem] lg:h-[5rem] w-auto">
            <Image
              className="w-auto h-[3rem] object-contain mx-auto lg:w-auto lg:h-[5rem]"
              src="/icons/ecoute.png"
              width={500}
              height={500}
              alt="Technicien électricien travaillant dans un standard de fusibles et utilisant une tablette"
            />
          </div>
          <p className="text-white text-justify font-mPlusLight text-[1rem]">
            Chez nous, l&apos;expertise va de pair avec une écoute attentive de
            vos besoins.
          </p>
        </article>
      </div>
      <p className="text-center text-[1.5rem] text-white font-mPlusRegular mt-[3rem]">
        CHEZ IDEKSYS, “petite phrase marketing ou autre...”
      </p>
    </section>
  );
}
