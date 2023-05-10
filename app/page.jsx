import BlogPost from "@/components/BlogPost";
import data from "../data/blogposts.js";

export default function Home() {
  console.log(data);
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <div className="max-w-screen-lg">
        {data.map(post => {
          return <BlogPost post={post} />;
        })}
      </div>
    </main>
  );
}
