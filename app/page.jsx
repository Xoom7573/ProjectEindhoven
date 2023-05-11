import BlogPost from "@/components/BlogPost";
import data from "../data/blogposts.js";
import MainTitle from "@/components/MainTitle.jsx";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <MainTitle />
      <div className="max-w-screen-lg pl-5 pr-5">
        {data.map(post => {
          return <BlogPost post={post} />;
        })}
      </div>
    </main>
  );
}
