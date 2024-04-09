import type { Metadata } from "next";
import Link from "next/link";
import React from "react";
import posts from "../../data/posts";

export const metadata: Metadata = {
  title: "Actualités & Articles | Ideksys",
  description: "Ideksys",
};

export default function page() {
  return (
    <section className="flex flex-col gap-[2rem] mt-[7rem] w-full px-[1rem] lg:px-[15rem]">
      <h1 className="text-white font-mPlusBold tracking-widest text-[1.5rem] lg:text-[2rem] text-center my-[0.5rem]">
        ARTICLES & ACTUS
      </h1>
      <div className="flex flex-wrap justify-center gap-[1rem]">
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
