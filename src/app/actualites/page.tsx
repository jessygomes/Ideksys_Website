import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import React from "react";
import posts from "../../data/posts";

export const metadata: Metadata = {
  title: "Actualités & Articles | Ideksys",
  description: "Ideksys",
};

export default function Actu() {
  return (
    <section className="flex flex-col gap-[1rem] lg:gap-[2rem] mt-20 lg:mt-[7rem] w-full px-[0.5rem] lg:px-[1rem]">
      <div className="flex flex-col gap-[1rem] lg:gap-[2rem] mx-[0.5rem] lg:mx-[1rem] rounded-2xl lg:rounded-3xl bg-gradient-to-r from-rouge-incendie to-bleu-surete ">
        <div className="w-full h-[3rem] lg:h-[4rem] mt-[1rem]">
          <Image
            src="/icons/actu.png"
            height="1000"
            width="1000"
            className="h-70 w-auto h-[4rem] object-contain mx-auto lg:w-auto lg:h-[6rem] Icon"
            alt="thumbnail"
          />
        </div>
        <h1 className="text-white font-mPlusBold uppercase tracking-widest text-[1.5rem] lg:text-[3rem] text-center my-[0.5rem]">
          actus & articles
        </h1>
      </div>
      <div className="flex flex-wrap justify-center gap-[1rem] px-[0.5rem] lg:px-[15rem]">
        {posts.map((post) => (
          <Link
            key={post.id}
            href={`/actualites/${post.slug}`}
            className="h-auto lg:w-[45%] bg-gris-case p-[1rem] lg:p-[2rem] rounded-2xl lg:rounded-3xl"
          >
            <h2 className="text-white font-mPlusBold text-[1.2rem] lg:text-[1.5rem]">
              {post.title}
            </h2>
            <p className="text-white text-[12px] lg:text-[1rem] font-mPlusLight">
              {post.content.substring(0, 200)}...
            </p>
          </Link>
        ))}
      </div>
    </section>
  );
}
