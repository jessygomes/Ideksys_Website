import Image from "next/image";

export default function ImageHome() {
  return (
    <div className="flex flex-col lg:flex-row px-[0.5rem] lg:px-[1rem]">
      <div className="lg:flex-[2] h-[10rem] lg:h-[18rem] w-full rounded-2xl lg:rounded-3xl overflow-hidden">
        <Image
          className="opacity-70 w-full h-full object-cover mx-auto lg:w-full lg:h-full"
          src="/images/homme-technicien-electricien-travaillant-dans-standard-fusibles-utilise-tablette.jpg"
          width={500}
          height={500}
          alt="Technicien électricien travaillant dans un standard de fusibles et utilisant une tablette"
        />
      </div>
    </div>
  );
}
