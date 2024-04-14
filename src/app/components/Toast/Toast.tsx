"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Toast() {
  const asideRef = useRef<HTMLDivElement>(null);

  const [isHovered, setIsHovered] = useState(false);
  const handleClickOutside = (event: MouseEvent) => {
    if (asideRef.current && !asideRef.current.contains(event.target as Node)) {
      setIsHovered(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <aside
      ref={asideRef}
      className="fixed flex gap-1 items-center justify-center flex-col bottom-4 right-2 lg:bottom-4 lg:right-4 w-[4rem] h-[4rem] lg:w-[6rem] lg:h-[6rem] bg-gris-case rounded-2xl lg:rounded-3xl shadow-2xl transition-all ease-linear duration-500 CardService"
      onClick={() => setIsHovered(!isHovered)}
    >
      <Image
        src="/icons/devis.png"
        height="1000"
        width="1000"
        className="h-70 w-auto h-[1.5rem] object-contain mx-auto lg:w-auto lg:h-[2rem] Icon"
        alt="Icône Incendie"
      />
      <p className="text-white text-[0.8rem] lg:text-[1rem] text-center font-mPlusBold">
        Devis
      </p>
      {isHovered && (
        <Link
          href="/contactez-nous"
          className="absolute text-center text-[0.8rem] w-[15rem] text-white font-mPlusBold right-[5rem] lg:right-[7rem] lg:w-[20rem] lg:text-[1rem] p-[1rem] shadow-2xl uppercase bg-rouge-incendie rounded-2xl lg:rounded-3xl focus:outline-none focus:ring-2 focus:ring-red-600 transition-all duration-300 ease-in-out hover:from-red-600 hover:to-red-800 hover:ring-2 hover:ring-red-600 hover:shadow-xl"
        >
          Faire une demande de devis
        </Link>
      )}
    </aside>
  );
}
