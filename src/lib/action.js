"use server";
import { revalidatePath } from "next/cache";
import Article from "./models";
import { connectToDb } from "./utils";

export const addPost = async (formData) => {
  const { title, slug, content } = Object.fromEntries(formData);

  try {
    connectToDb();
    const newPost = new Article({
      title,
      slug,
      content,
    });
    await newPost.save();
    //! Afin de revalider la page des actualités et les données en cache
    revalidatePath("/actualites");
    console.log("saved to DB");
  } catch (error) {
    console.log(error);
    return { error: "Failed to connect to database" };
  }
};

export const deletePost = async (formData) => {
  const { id } = Object.fromEntries(formData);

  try {
    connectToDb();
    await Article.findByIdAndDelete(id);
    console.log("deleted from DB");
    //! Afin de revalider la page des actualités et les données en cache
    revalidatePath("/actualites");
    console.log("saved to DB");
  } catch (error) {
    console.log(error);
    return { error: "Failed to connect to database" };
  }
};

export const updatePost = async (formData) => {
  const { title, slug, content } = Object.fromEntries(formData);

  try {
    connectToDb();
    const updatedPost = await Article.findOneAndUpdate(
      { slug: slug },
      { title, slug, content },
      { new: true }
    );
    //! Afin de revalider la page des actualités et les données en cache
    revalidatePath("/actualites");
    return updatedPost;
  } catch (error) {
    console.log(error);
    return { error: "Failed to connect to database" };
  }
};
