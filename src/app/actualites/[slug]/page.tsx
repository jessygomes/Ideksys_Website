import Link from "next/link";
import type { Metadata } from "next";
import { getPost } from "@/lib/data";

export const metadata: Metadata = {
  title: "Article | Ideksys",
  description: "Article - Ideksys",
};

export default async function ArticlePage({
  params,
}: {
  params: { slug: string };
}) {
  const post = await getPost(params.slug);

  return (
    <section className="flex flex-col gap-[0.5rem] lg:gap-[2rem] mt-[7rem] w-full px-[0.5rem] lg:px-[15rem]">
      <h1 className="text-white font-mPlusBold tracking-widest text-[1.5rem] lg:text-[2rem] text-center my-[0.5rem]">
        {post?.title}
      </h1>
      <p className="text-white font-mPlusLight bg-gris-case p-[1rem] lg:p-[2rem] rounded-2xl lg:rounded-3xl">
        {post?.content}
      </p>
      <div className="flex flex-wrap justify-center gap-[1rem]">
        <Link
          href="/actualites"
          className="p-[1rem] lg:w-[50%] text-white text-center hover:text-white bg-gris-case font-mPlusBold tracking-[0.3rem] bg-gradient-to-r from-black-800 to-zinc-600 rounded-2xl lg:rounded-3xl focus:outline-none focus:ring-2 focus:ring-red-600 transition-all duration-300 ease-in-out hover:from-red-600 hover:to-red-800 hover:ring-2 hover:ring-red-600 hover:shadow-xl"
        >
          Revenir sur la page Actus & Articles
        </Link>
      </div>
    </section>
  );
}
