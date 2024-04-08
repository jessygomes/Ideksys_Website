import Link from "next/link";
import React from "react";

export default function ArticlePage() {
  return (
    <section className="flex flex-col gap-[2rem] mt-[7rem] w-full px-[15rem]">
      <h1 className="text-white font-mPlusBold tracking-widest text-[1.5rem] lg:text-[2rem] text-center my-[0.5rem]">
        LE COURANT FAIBLE
      </h1>
      <p className="text-white font-mPlusLight bg-gris-case p-[1rem] lg:p-[2rem] rounded-2xl lg:rounded-3xl">
        Le courant faible, souvent méconnu mais essentiel, est une force
        discrète mais puissante dans le tissu complexe de nos vies modernes.
        Contrairement à son homologue, le courant fort, qui alimente nos
        appareils les plus énergivores, le courant faible opère dans les
        coulisses, dans les fils délicats qui alimentent nos communications et
        nos systèmes de contrôle. Dans le monde numérique
        d&apos;aujourd&apos;hui, le courant faible est le souffle vital qui
        anime nos réseaux informatiques, nos systèmes de sécurité et nos
        technologies de pointe. Il voyage à travers des câbles minces et des
        fibres optiques, portant des données et des signaux à travers des
        distances incroyables, reliant des personnes et des machines dans un
        réseau mondial de communication et de collaboration. Pourtant, malgré sa
        modestie en apparence, le courant faible est le gardien invisible de
        notre modernité. Il veille sur nos maisons intelligentes, régule nos
        systèmes de climatisation et de chauffage, et assure le bon
        fonctionnement de nos réseaux téléphoniques et internet. Sans lui, nos
        vies deviendraient un chaos désordonné, nos communications se
        briseraient et nos infrastructures se paralyseraient. Dans les domaines
        de l&apos;électronique, de l&apos;informatique et de la
        télécommunication, le courant faible est synonyme de contrôle, de
        précision et de fiabilité. Il représente l&apos;ingéniosité humaine mise
        en œuvre dans des fils délicats et des signaux imperceptibles,
        orchestrant un ballet invisible qui façonne notre quotidien. Ainsi, même
        si son influence peut passer inaperçue, le courant faible reste une
        force indispensable qui mérite notre respect et notre attention.
        C&apos;est un rappel subtil mais puissant de la manière dont les détails
        les plus fins peuvent avoir un impact monumental sur notre monde
        moderne.
      </p>
      <div className="flex flex-wrap justify-center gap-[1rem]"></div>
    </section>
  );
}
