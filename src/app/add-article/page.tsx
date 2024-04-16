// "use client";
// import { ChangeEvent, FormEvent, useState } from "react";
import ReactTextareaAutoSize from "react-textarea-autosize";
import { addPost, deletePost } from "@/lib/action";
import { getPosts } from "@/lib/data";
import Link from "next/link";
// import FormData from "../types/blog";

const inputClass =
  "w-[35rem] py-[1rem] px-[1rem] bg-white text-noir-fond border border-slate-400 focus:border-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50 rounded-md shadow-md transition duration-300 ease-in-out";

export default async function Page() {
  const posts = await getPosts();
  // const [formData, setFormData] = useState({ title: "", content: "" });

  // const handleChange = (
  //   e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  // ) => {
  //   e.preventDefault();
  //   const { name, value } = e.target;
  //   setFormData({ ...formData, [name]: value });
  // };

  // const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
  //   e.preventDefault();
  //   console.log(formData);
  // };

  return (
    <section className="flex flex-col gap-[2rem] mt-[7rem] w-full px-[10rem]">
      <h1 className="text-white font-mPlusBold tracking-widest text-[1.5rem] lg:text-[2rem] text-center my-[0.5rem]">
        Créer un nouvel article
      </h1>
      <form
        action={addPost}
        // onSubmit={handleSubmit}
        className="flex flex-col gap-[1rem] justify-center items-center "
      >
        <div>
          <input
            type="text"
            placeholder="Titre de l'article"
            name="title"
            className={inputClass}
            defaultValue=""
            // onChange={handleChange}
          />
        </div>
        <div>
          <input
            type="text"
            placeholder="Slug"
            name="slug"
            className={inputClass}
            defaultValue=""
            // onChange={handleChange}
          />
        </div>
        <div>
          <textarea
            name="content"
            className={inputClass}
            placeholder="Contenu de l'article"
            defaultValue=""
          />
        </div>
        {/* <ReactTextareaAutoSize
          minRows={5}
          name="content"
          placeholder="Contenu de l'article"
          className={inputClass}
          value={formData.content}
          onChange={handleChange}
        /> */}
        <button
          type="submit"
          className="p-[1rem] w-[35rem] text-white bg-gris-case hover:text-white font-mPlusBold tracking-[0.3rem] bg-gradient-to-r from-black-800 to-zinc-600 rounded-md focus:outline-none focus:ring-2 focus:ring-red-600 transition-all duration-300 ease-in-out hover:from-red-600 hover:to-red-800 hover:ring-2 hover:ring-red-600 hover:shadow-xl"
        >
          AJOUTER
        </button>
      </form>

      <h2 className="text-white font-mPlusBold tracking-widest text-[1.5rem] lg:text-[2rem] text-center my-[0.5rem]">
        Mes articles
      </h2>

      <div className="flex flex-wrap justify-center gap-[1rem] px-[0.5rem] lg:px-[14rem]">
        {posts.map((post: any) => (
          <article
            key={post.id}
            className="flex flex-col justify-between gap-[1rem] h-auto lg:w-[48%] bg-gris-case p-[1rem] lg:p-[2rem] rounded-2xl lg:rounded-3xl hover:shadow-2xl transition-all duration-300 ease-in-out"
          >
            <h2 className="text-white text-center font-mPlusBold text-[1.2rem] lg:text-[1.2rem]">
              {post.title}
            </h2>
            <p className="text-white text-[12px] lg:text-[1rem] font-mPlusLight">
              {post.content.substring(0, 200)}...
            </p>
            <form action={deletePost}>
              <input
                type="text"
                hidden
                placeholder="Slug de l'article à supprimer"
                name="id"
                className={inputClass}
                value={post.id}
              />
              <div className="flex gap-2 justify-center items-center">
                <Link
                  href={`/add-article/${post.slug}`}
                  type="button"
                  className="flex-1 p-[1rem] w-[25%] text-center text-white text-[0.8rem] hover:text-white font-mPlusBold tracking-[0.3rem] bg-gradient-to-r from-black-800 to-zinc-600 rounded-2xl lg:rounded-3xl focus:outline-none focus:ring-2 focus:ring-blue-600 transition-all duration-300 ease-in-out hover:from-blue-600 hover:to-blue-800 hover:ring-2 hover:ring-blue-600 hover:shadow-xl"
                >
                  Modifier l&apos;article
                </Link>
                <button
                  type="submit"
                  className="flex-1 p-[1rem] text-center text-white text-[0.8rem] hover:text-white font-mPlusBold tracking-[0.3rem] bg-gradient-to-r from-black-800 to-zinc-600 rounded-2xl lg:rounded-3xl focus:outline-none focus:ring-2 focus:ring-red-600 transition-all duration-300 ease-in-out hover:from-red-600 hover:to-red-800 hover:ring-2 hover:ring-red-600 hover:shadow-xl"
                >
                  Supprimer l&apos;article
                </button>
              </div>
            </form>
          </article>
        ))}
      </div>
    </section>
  );
}
