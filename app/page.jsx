import BlogPost from "@/components/BlogPost";
import data from "../data/blogposts.json" assert { type: "json" };

export default function Home() {
  console.log(data);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <div className="max-w-screen-lg">
        <BlogPost />
        <BlogPost />
        <BlogPost />
        <BlogPost />
      </div>
    </main>
  );
}
