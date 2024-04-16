import { getPosts } from "@/lib/data";
import React, { useEffect, useState } from "react";
import Article from "./Article";

export default async function Articles() {
  const posts = await getPosts();

  return (
    <div className="flex flex-wrap justify-center gap-[1rem] px-[0.5rem] lg:px-[14rem]">
      {posts.map((post: any) => (
        <Article key={post.id} post={post} />
      ))}
    </div>
  );
}
