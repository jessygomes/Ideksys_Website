import Image from "next/image";
import Link from "next/link";
import posts from "../../../data/posts";

export default function Articles() {
  return (
    <section>
      <h1 className="text-white font-mPlusBold uppercase tracking-widest text-[1.5rem] lg:text-[2rem] text-center my-[0.5rem]">
        actus & articles
      </h1>
      <div className="flex flex-col justify-center gap-[0.5rem] lg:gap-[1rem] sm:flex-row px-[1rem] lg:px-[15rem] mt-[3rem]">
        {posts.slice(-2).map((post) => (
          <article
            key={post.id}
            className="flex flex-col justify-between gap-[1rem] h-auto lg:w-[50%] bg-gris-case p-[1rem] lg:p-[2rem] rounded-2xl lg:rounded-3xl hover:shadow-2xl transition-all duration-300 ease-in-out"
          >
            <h2 className="text-white text-center font-mPlusBold text-[1.2rem] lg:text-[1.2rem]">
              {post.title}
            </h2>
            <p className="text-white text-[12px] lg:text-[1rem] font-mPlusLight">
              {post.content.substring(0, 200)}...
            </p>
            <Link
              className="p-[1rem] w-full text-center text-white hover:text-white font-mPlusBold tracking-[0.3rem] bg-gradient-to-r from-black-800 to-zinc-600 rounded-2xl lg:rounded-3xl focus:outline-none focus:ring-2 focus:ring-red-600 transition-all duration-300 ease-in-out hover:from-red-600 hover:to-red-800 hover:ring-2 hover:ring-red-600 hover:shadow-xl"
              href={`/actualites/${post.slug}`}
            >
              Lire la suite
            </Link>
          </article>
        ))}
      </div>
    </section>
  );
}
