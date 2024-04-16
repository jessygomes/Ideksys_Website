import exp from "constants";
const Article = require("./models");
import { connectToDb } from "./utils";

const posts = [
  {
    id: 1,
    slug: "le-courant-faible",
    title: "LE COURANT FAIBLE",
    content:
      "Le courant faible, souvent méconnu mais essentiel, est une force discrète mais puissante dans le tissu complexe de nos vies modernes. Contrairement à son homologue, le courant fort, qui alimente nos appareils les plus énergivores, le courant faible opère dans les coulisses, dans les fils délicats qui alimentent nos communications et nos systèmes de contrôle. Dans le monde numérique d'aujourd'hui, le courant faible est le souffle vital qui anime nos réseaux informatiques, nos systèmes de sécurité et nos technologies de pointe. Il voyage à travers des câbles minces et des fibres optiques, portant des données et des signaux à travers des distances incroyables, reliant des personnes et des machines dans un réseau mondial de communication et de collaboration. Pourtant, malgré sa modestie en apparence, le courant faible est le gardien invisible de notre modernité. Il veille sur nos maisons intelligentes, régule nos systèmes de climatisation et de chauffage, et assure le bon fonctionnement de nos réseaux téléphoniques et internet. Sans lui, nos vies deviendraient un chaos désordonné, nos communications se briseraient et nos infrastructures se paralyseraient. Dans les domaines de l'électronique, de l'informatique et de la télécommunication, le courant faible est synonyme de contrôle, de précision et de fiabilité. Il représente l'ingéniosité humaine mise en œuvre dans des fils délicats et des signaux imperceptibles, orchestrant un ballet invisible qui façonne notre quotidien. Ainsi, même si son influence peut passer inaperçue, le courant faible reste une force indispensable qui mérite notre respect et notre attention. C'est un rappel subtil mais puissant de la manière dont les détails les plus fins peuvent avoir un impact monumental sur notre monde moderne.",
  },
  {
    id: 2,
    slug: "le-courant-electrique",
    title: "LE COURANT ELECTRIQUE",
    content:
      "Le courant faible, souvent méconnu mais essentiel, est une force discrète mais puissante dans le tissu complexe de nos vies modernes. Contrairement à son homologue, le courant fort, qui alimente nos appareils les plus énergivores, le courant faible opère dans les coulisses, dans les fils délicats qui alimentent nos communications et nos systèmes de contrôle. Dans le monde numérique d'aujourd'hui, le courant faible est le souffle vital qui anime nos réseaux informatiques, nos systèmes de sécurité et nos technologies de pointe. Il voyage à travers des câbles minces et des fibres optiques, portant des données et des signaux à travers des distances incroyables, reliant des personnes et des machines dans un réseau mondial de communication et de collaboration. Pourtant, malgré sa modestie en apparence, le courant faible est le gardien invisible de notre modernité. Il veille sur nos maisons intelligentes, régule nos systèmes de climatisation et de chauffage, et assure le bon fonctionnement de nos réseaux téléphoniques et internet. Sans lui, nos vies deviendraient un chaos désordonné, nos communications se briseraient et nos infrastructures se paralyseraient. Dans les domaines de l'électronique, de l'informatique et de la télécommunication, le courant faible est synonyme de contrôle, de précision et de fiabilité. Il représente l'ingéniosité humaine mise en œuvre dans des fils délicats et des signaux imperceptibles, orchestrant un ballet invisible qui façonne notre quotidien. Ainsi, même si son influence peut passer inaperçue, le courant faible reste une force indispensable qui mérite notre respect et notre attention. C'est un rappel subtil mais puissant de la manière dont les détails les plus fins peuvent avoir un impact monumental sur notre monde moderne.",
  },
  {
    id: 3,
    slug: "le-courant-fort",
    title: "LE COURANT FORT",
    content:
      "Le courant faible, souvent méconnu mais essentiel, est une force discrète mais puissante dans le tissu complexe de nos vies modernes. Contrairement à son homologue, le courant fort, qui alimente nos appareils les plus énergivores, le courant faible opère dans les coulisses, dans les fils délicats qui alimentent nos communications et nos systèmes de contrôle. Dans le monde numérique d'aujourd'hui, le courant faible est le souffle vital qui anime nos réseaux informatiques, nos systèmes de sécurité et nos technologies de pointe. Il voyage à travers des câbles minces et des fibres optiques, portant des données et des signaux à travers des distances incroyables, reliant des personnes et des machines dans un réseau mondial de communication et de collaboration. Pourtant, malgré sa modestie en apparence, le courant faible est le gardien invisible de notre modernité. Il veille sur nos maisons intelligentes, régule nos systèmes de climatisation et de chauffage, et assure le bon fonctionnement de nos réseaux téléphoniques et internet. Sans lui, nos vies deviendraient un chaos désordonné, nos communications se briseraient et nos infrastructures se paralyseraient. Dans les domaines de l'électronique, de l'informatique et de la télécommunication, le courant faible est synonyme de contrôle, de précision et de fiabilité. Il représente l'ingéniosité humaine mise en œuvre dans des fils délicats et des signaux imperceptibles, orchestrant un ballet invisible qui façonne notre quotidien. Ainsi, même si son influence peut passer inaperçue, le courant faible reste une force indispensable qui mérite notre respect et notre attention. C'est un rappel subtil mais puissant de la manière dont les détails les plus fins peuvent avoir un impact monumental sur notre monde moderne.",
  },
];

// export const getPosts = async () => {
//   return posts;
// };

// export const getPost = async (slug) => {
//   return posts.find((post) => post.slug === slug);
// };

export const getPosts = async () => {
  try {
    connectToDb();
    const posts = await Article.find();
    return posts;
  } catch (error) {
    console.log(error);
    throw new Error(error.message);
  }
};

export const getPost = async (slug) => {
  try {
    connectToDb();
    const post = await Article.findOne({ slug: slug });
    return post;
  } catch (error) {
    console.log(error);
    throw new Error(error.message);
  }
};
