import Image from "next/image";
import Link from "next/link";

export default function Services() {
  return (
    <div className="flex flex-wrap justify-center lg:flex-row px-[1rem] lg:px-[2rem] gap-[1rem] lg:gap-[2rem]">
      <Link
        href="/surete"
        className="flex flex-col justify-center items-center gap-[0.5rem] lg:gap-[1rem] lg:flex-[3] sm:flex-[3] h-[3.5rem] sm:h-[6rem] lg:h-[12rem] w-full rounded-3xl overflow-hidden bg-gris-case"
      >
        <h2 className=" font-mPlusBold text-white lg:text-[2rem]">
          NOS SERVICES
        </h2>
      </Link>
      <Link
        href="/surete"
        className="flex px-3 sm:flex-col justify-center items-center gap-[0.5rem] sm:gap-[0.2rem] lg:gap-[1rem] sm:flex-[2] lg:flex-[2] h-[3.5rem] sm:h-[6rem] lg:h-[12rem] w-[47%] rounded-3xl overflow-hidden bg-gris-case"
      >
        <div className="h-[1.5rem] lg:h-[5rem] w-auto">
          <Image
            className="w-auto h-[1.5rem] object-contain mx-auto lg:w-auto lg:h-[5rem]"
            src="/Logo/installation.png"
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
        className="flex px-3 sm:flex-col justify-center items-center gap-[0.5rem] sm:gap-[0.2rem] lg:gap-[1rem] sm:flex-[2] lg:flex-[2] h-[3.5rem] sm:h-[6rem] lg:h-[12rem] w-[47%] rounded-3xl overflow-hidden bg-gris-case"
      >
        <div className="h-[1.5rem] lg:h-[5rem] w-auto">
          <Image
            className="w-auto h-[1.5rem] object-contain mx-auto lg:w-auto lg:h-[5rem]"
            src="/Logo/depannage.png"
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
        className="flex px-3 sm:flex-col justify-center items-center gap-[0.5rem] sm:gap-[0.2rem] lg:gap-[1rem] sm:flex-[2] lg:flex-[2] h-[3.5rem] sm:h-[6rem] lg:h-[12rem] w-[47%] rounded-3xl overflow-hidden bg-gris-case"
      >
        <div className="h-[1.5rem] lg:h-[5rem] w-auto">
          <Image
            className="w-auto h-[1.5rem] object-contain mx-auto lg:w-auto lg:h-[5rem]"
            src="/Logo/maintenace.png"
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
        className="flex px-3 sm:flex-col justify-center items-center gap-[0.5rem] sm:gap-[0.2rem] lg:gap-[1rem] sm:flex-[2] lg:flex-[2] h-[3.5rem] sm:h-[6rem] lg:h-[12rem] w-[47%] rounded-3xl overflow-hidden bg-gris-case"
      >
        <div className="h-[1.5rem] lg:h-[5rem] w-auto">
          <Image
            className="w-auto h-[1.5rem] object-contain mx-auto lg:w-auto lg:h-[5rem]"
            src="/Logo/conception.png"
            width={500}
            height={500}
            alt="Technicien électricien travaillant dans un standard de fusibles et utilisant une tablette"
          />
        </div>
        <h2 className=" font-mPlusBold text-white text-center text-[0.8rem] lg:text-[1.5rem]">
          Conception de plan
        </h2>
      </Link>
    </div>
  );
}
