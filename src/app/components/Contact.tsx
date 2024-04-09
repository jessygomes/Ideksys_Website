"use client";
import emailjs from "@emailjs/browser";
import { useState } from "react";

export default function Contact() {
  const [confirmationMessage, setConfirmationMessage] = useState("");

  const [form, setForm] = useState({
    name: "",
    fonction: "",
    objet: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_2wk87pr",
        "template_u9m00rn",
        e.currentTarget,
        "OQpdfRliSb-itPKwp"
      )
      .then(
        (result) => {
          console.log(result.text);
          setForm({
            name: "",
            fonction: "",
            objet: "",
            email: "",
            message: "",
          });
          setConfirmationMessage("Email envoyé avec succès !");
          setTimeout(() => {
            setConfirmationMessage("");
          }, 5000);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className=" mt-[3rem] px-[1rem] flex flex-col sm:flex-wrap justify-center items-center gap-[2rem] sm:gap-[1.5rem] sm:px-[10rem] lg:px-[12rem]">
      <p className=" font-mPlusLight text-white text-center">
        Vous avez des questions ou d&apos;autres demandes ? Contactez-nous !
      </p>
      <form
        onSubmit={handleSubmit}
        className="flex justify-center flex-col gap-5 relative"
      >
        {confirmationMessage && (
          <p className="text-white font-aldrich text-center">
            {confirmationMessage}
          </p>
        )}
        <p className="text-white font-mPlusRegular tracking-[0.1rem] text-center">
          ideksys@contact.fr
        </p>
        <div>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="NOM & PRENOM"
            className="px-[2rem] py-[0.3rem] w-[20rem] md:w-[30rem] md:py-[0.5rem] bg-opacity-10 text-noir-fond text-center rounded-2xl lg:rounded-3xl focus:outline-none focus:border-rouge-incendie transition-all duration-300 ease-in-out"
            onChange={handleChange}
            value={form.name}
            minLength={2}
            maxLength={30}
            required
          />
        </div>
        <div>
          <input
            type="text"
            id="fonction"
            name="fonction"
            placeholder="FONCTION"
            className="px-[2rem] py-[0.3rem] w-[20rem] md:w-[30rem] md:py-[0.5rem] bg-opacity-10 text-noir-fond text-center rounded-2xl lg:rounded-3xl focus:outline-none focus:border-rouge-incendie transition-all duration-300 ease-in-out"
            onChange={handleChange}
            value={form.fonction}
            minLength={2}
            maxLength={20}
          />
        </div>
        <div>
          <input
            type="text"
            id="objet"
            name="objet"
            placeholder="OBJET"
            className="px-[2rem] py-[0.3rem] w-[20rem] md:w-[30rem] md:py-[0.5rem] bg-opacity-10 text-noir-fond text-center rounded-2xl lg:rounded-3xl focus:outline-none focus:border-rouge-incendie transition-all duration-300 ease-in-out"
            onChange={handleChange}
            value={form.objet}
            minLength={2}
            maxLength={20}
            required
          />
        </div>
        <div>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="EMAIL"
            className="px-[2rem] py-[0.3rem] w-[20rem] md:w-[30rem] md:py-[0.5rem] bg-opacity-10 text-noir-fond text-center rounded-2xl lg:rounded-3xl focus:outline-none focus:border-rouge-incendie transition-all duration-300 ease-in-out"
            onChange={handleChange}
            value={form.email}
            required
          />
        </div>
        <div>
          <textarea
            id="message"
            name="message"
            placeholder="MESSAGE"
            className="px-[2rem] py-[0.3rem] w-[20rem] md:w-[30rem] md:py-[0.5rem] bg-opacity-10 text-noir-fond text-center rounded-2xl lg:rounded-3xl focus:outline-none focus:border-rouge-incendie transition-all duration-300 ease-in-out"
            onChange={handleChange}
            value={form.message}
            required
            minLength={2}
            maxLength={350}
          />
        </div>
        <button
          type="submit"
          className="p-[1rem] w-full text-white bg-gris-case hover:text-white font-mPlusBold tracking-[0.3rem] bg-gradient-to-r from-black-800 to-zinc-600 rounded-2xl lg:rounded-3xl focus:outline-none focus:ring-2 focus:ring-red-600 transition-all duration-300 ease-in-out hover:from-red-600 hover:to-red-800 hover:ring-2 hover:ring-red-600 hover:shadow-xl"
        >
          ENVOYER
        </button>
      </form>
    </div>
  );
}
