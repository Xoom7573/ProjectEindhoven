import React from "react";
import Image from "next/image";

import sfeer from "../assets/sfeer.jpg";

function BlogPost({ post }) {
  return (
    <div className="mt-20 mb-20">
      <h2>{post?.date}</h2>
      <h1 className="text-4xl font-bold mb-8">{post?.title}</h1>

      <Image
        className="rounded-lg mb-6 h-[30rem] w-full object-cover"
        src={sfeer}
        alt="sfeer foto"
        objectFit="cover"
        title="sfeer foto"
      />

      {post?.alineas.map(alinea => {
        return <p className="text-lg text-justify mb-5">{alinea}</p>;
      })}
    </div>
  );
}

export default BlogPost;
