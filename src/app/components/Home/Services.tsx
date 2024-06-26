import Image from "next/image";
import Link from "next/link";

export default function Services() {
  return (
    <div className="flex flex-wrap justify-center lg:flex-row px-[0.5rem] lg:px-[1rem] gap-[0.5rem] lg:gap-[1rem]">
      <div className="flex flex-col justify-center items-center gap-[0.5rem] lg:gap-[1rem] lg:flex-[3] sm:flex-[3] h-[3.5rem] sm:h-[6rem] lg:h-[10rem] w-full rounded-2xl lg:rounded-3xl overflow-hidden bg-gradient-to-r from-gris-case to-zinc-800 hover:shadow-2xl CardService">
        <h2 className=" font-mPlusBold text-white lg:text-[1.8rem]">
          NOS SERVICES
        </h2>
      </div>
      <Link
        href="/surete"
        className="flex px-3 sm:flex-col justify-center items-center gap-[0.5rem] sm:gap-[0.2rem] lg:gap-[1rem] sm:flex-[2] lg:flex-[2] h-[3.5rem] sm:h-[6rem] lg:h-[10rem] w-[48%] rounded-2xl lg:rounded-3xl overflow-hidden bg-gradient-to-r from-gris-case to-zinc-800 hover:shadow-2xl CardService"
      >
        <div className="h-[1.5rem] lg:h-[5rem] w-auto">
          <Image
            className="w-auto h-[1.5rem] object-contain mx-auto lg:w-auto lg:h-[5rem]"
            src="/icons/installation.png"
            width={500}
            height={500}
            alt="Technicien électricien travaillant dans un standard de fusibles et utilisant une tablette"
          />
        </div>
        <h2 className=" font-mPlusBold text-white lg:text-[1.5rem]">
          Installation
        </h2>
      </Link>
      <Link
        href="/surete"
        className="flex px-3 sm:flex-col justify-center items-center gap-[0.5rem] sm:gap-[0.2rem] lg:gap-[1rem] sm:flex-[2] lg:flex-[2] h-[3.5rem] sm:h-[6rem] lg:h-[10rem] w-[48%] rounded-2xl lg:rounded-3xl overflow-hidden bg-gradient-to-r from-gris-case to-zinc-800 hover:shadow-2xl CardService"
      >
        <div className="h-[1.5rem] lg:h-[5rem] w-auto">
          <Image
            className="w-auto h-[1.5rem] object-contain mx-auto lg:w-auto lg:h-[5rem]"
            src="/icons/depannage.png"
            width={500}
            height={500}
            alt="Technicien électricien travaillant dans un standard de fusibles et utilisant une tablette"
          />
        </div>
        <h2 className=" font-mPlusBold text-white lg:text-[1.5rem]">
          Dépannage
        </h2>
      </Link>
      <Link
        href="/surete"
        className="flex px-3 sm:flex-col justify-center items-center gap-[0.5rem] sm:gap-[0.2rem] lg:gap-[1rem] sm:flex-[2] lg:flex-[2] h-[3.5rem] sm:h-[6rem] lg:h-[10rem] w-[48%] rounded-2xl lg:rounded-3xl overflow-hidden bg-gradient-to-r from-gris-case to-zinc-800 hover:shadow-2xl CardService"
      >
        <div className="h-[1.5rem] lg:h-[5rem] w-auto">
          <Image
            className="w-auto h-[1.5rem] object-contain mx-auto lg:w-auto lg:h-[5rem]"
            src="/icons/maintenance.png"
            width={500}
            height={500}
            alt="Technicien électricien travaillant dans un standard de fusibles et utilisant une tablette"
          />
        </div>
        <h2 className=" font-mPlusBold text-white lg:text-[1.5rem]">
          Maintenance
        </h2>
      </Link>
      <Link
        href="/surete"
        className="flex px-3 sm:flex-col justify-center items-center gap-[0.5rem] sm:gap-[0.2rem] lg:gap-[1rem] sm:flex-[2] lg:flex-[2] h-[3.5rem] sm:h-[6rem] lg:h-[10rem] w-[48%] rounded-2xl lg:rounded-3xl overflow-hidden bg-gradient-to-r from-gris-case to-zinc-800 hover:shadow-2xl CardService"
      >
        <div className="h-[1.5rem] lg:h-[5rem] w-auto">
          <Image
            className="w-auto h-[1.5rem] object-contain mx-auto lg:w-auto lg:h-[5rem] Icon"
            src="/icons/conception.png"
            width={500}
            height={500}
            alt="Technicien électricien travaillant dans un standard de fusibles et utilisant une tablette"
          />
        </div>
        <h2 className=" font-mPlusBold text-white text-center text-[0.8rem] lg:text-[1.5rem] Icon">
          Plan
        </h2>
      </Link>
    </div>
  );
}
