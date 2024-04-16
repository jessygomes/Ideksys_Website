import Link from "next/link";

export default function Article({ post }: { post: any }) {
  return (
    <Link
      key={post.id}
      href={`/actualites/${post.slug}`}
      className="h-auto lg:w-[45%] bg-gris-case p-[1rem] lg:p-[2rem] rounded-2xl lg:rounded-3xl hover:bg-[#4b4b4b] transition-all duration-300 ease-in-out hover:shadow-xl"
    >
      <h2 className="text-white font-mPlusBold text-[1.2rem] lg:text-[1.5rem]">
        {post.title}
      </h2>
      <p className="text-white text-[12px] lg:text-[1rem] font-mPlusLight">
        {post.content.substring(0, 200)}...
      </p>
    </Link>
  );
}
