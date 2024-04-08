"use client";
import { ChangeEvent, FormEvent, useState } from "react";
import ReactTextareaAutoSize from "react-textarea-autosize";
// import FormData from "../types/blog";

const inputClass =
  "w-[35rem] py-[1rem] px-[1rem] bg-white text-noir-fond border border-slate-400 focus:border-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50 rounded-md shadow-md transition duration-300 ease-in-out";

export default function Page() {
  const [formData, setFormData] = useState({ title: "", content: "" });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    e.preventDefault();
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <section className="flex flex-col mt-[7rem] w-full px-[15rem]">
      <h1 className="text-white font-mPlusBold tracking-widest text-[1.5rem] lg:text-[2rem] text-center my-[0.5rem]">
        Créer un nouvel article
      </h1>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-[1rem] justify-center items-center "
      >
        <div>
          <input
            type="text"
            placeholder="Titre de l'article"
            name="title"
            className={inputClass}
            value={formData.title}
            onChange={handleChange}
          />
        </div>
        <ReactTextareaAutoSize
          minRows={5}
          name="content"
          placeholder="Contenu de l'article"
          className={inputClass}
          value={formData.content}
          onChange={handleChange}
        />
        <button
          type="submit"
          className="p-[1rem] w-[35rem] text-white bg-gris-case hover:text-white font-mPlusBold tracking-[0.3rem] bg-gradient-to-r from-black-800 to-zinc-600 rounded-md focus:outline-none focus:ring-2 focus:ring-red-600 transition-all duration-300 ease-in-out hover:from-red-600 hover:to-red-800 hover:ring-2 hover:ring-red-600 hover:shadow-xl"
        >
          AJOUTER
        </button>
      </form>
    </section>
  );
}
