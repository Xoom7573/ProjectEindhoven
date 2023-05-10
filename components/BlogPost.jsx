import React from "react";
import Image from "next/image";

import sfeer from "../assets/sfeer.jpg";

function BlogPost() {
  return (
    <div className="mt-20 mb-20">
      <h2>May 15 2022</h2>
      <h1 className="text-4xl font-bold mb-8">Sunday</h1>

      <Image
        className="rounded-lg mb-6 h-[30rem] w-full object-cover"
        src={sfeer}
        alt="sfeer foto"
        objectFit="cover"
        title="sfeer foto"
      />

      <p className="text-lg text-justify">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Et minima
        provident impedit placeat doloremque omnis recusandae amet animi ipsa
        mollitia. Cumque eos rem mollitia? Itaque natus quidem labore ipsam
        optio! Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis
        vero nobis assumenda voluptatem incidunt! Perferendis aliquam cum
        labore, sit dicta quibusdam ipsa, laborum consequuntur, nostrum iste
        quae id ex ea!
      </p>
    </div>
  );
}

export default BlogPost;
