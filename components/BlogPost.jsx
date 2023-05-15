"use client";

import React from "react";
import Image from "next/image";

import { motion } from "framer-motion";

function BlogPost({ post }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -250 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <div className="mt-20 mb-20">
        <h2>{post?.date}</h2>
        <h1 className="text-4xl font-bold mb-8">{post?.title}</h1>

        <Image
          className="rounded-lg mb-6 h-[30rem] w-full object-cover"
          src={post?.image}
          width={1920}
          height={1080}
          alt="sfeer foto"
          objectFit="cover"
          title="sfeer foto"
        />

        {post?.alineas.map(alinea => {
          return <p className="text-lg text-justify mb-5">{alinea}</p>;
        })}
      </div>
    </motion.div>
  );
}

export default BlogPost;
