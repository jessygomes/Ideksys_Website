import { updatePost } from "@/lib/action";
import { getPost } from "@/lib/data";
import Link from "next/link";

const inputClass =
  "w-[35rem] py-[1rem] px-[1rem] bg-white text-noir-fond border border-slate-400 focus:border-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50 rounded-md shadow-md transition duration-300 ease-in-out";

export default async function UpdateArticle({
  params,
}: {
  params: { slug: string };
}) {
  const post = await getPost(params.slug);

  return (
    <section className="flex flex-col justify-center items-center gap-[2rem] mt-[7rem] w-full px-[10rem]">
      <h1 className="text-white font-mPlusBold tracking-widest text-[1.5rem] lg:text-[2rem] text-center my-[0.5rem]">
        Modifier l&apos;article : {post.title}
      </h1>
      <form
        action={updatePost}
        className="flex flex-col gap-[1rem] justify-center items-center "
      >
        <div>
          <input
            type="text"
            placeholder="Titre de l'article"
            name="title"
            className={inputClass}
            defaultValue={post.title}
          />
        </div>
        <div>
          <input
            type="text"
            placeholder="Slug"
            name="slug"
            className={inputClass}
            defaultValue={post.slug}
          />
        </div>
        <div>
          <textarea
            name="content"
            className={inputClass}
            placeholder="Contenu de l'article"
            defaultValue={post.content}
          />
        </div>
        <button
          type="submit"
          className="p-[1rem] w-[35rem] text-white bg-gris-case hover:text-white font-mPlusBold tracking-[0.3rem] bg-gradient-to-r from-black-800 to-zinc-600 rounded-md focus:outline-none focus:ring-2 focus:ring-red-600 transition-all duration-300 ease-in-out hover:from-red-600 hover:to-red-800 hover:ring-2 hover:ring-red-600 hover:shadow-xl"
        >
          MODIFIER
        </button>
      </form>
      <Link
        href={"/add-article"}
        type="button"
        className="p-[1rem] w-[25%] text-center text-white bg-gris-case hover:text-white font-mPlusBold tracking-[0.3rem] bg-gradient-to-r from-black-800 to-zinc-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 transition-all duration-300 ease-in-out hover:from-blue-600 hover:to-blue-800 hover:ring-2 hover:ring-blue-600 hover:shadow-xl"
      >
        Retour
      </Link>
    </section>
  );
}
