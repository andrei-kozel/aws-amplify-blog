import BlogCard from "../components/BlogCard";
import { useState, useEffect } from "react";
import { API } from "aws-amplify";
import { listPosts } from "../src/graphql/queries";

export default function Home() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    const postData = await API.graphql({
      query: listPosts,
    });
    setPosts(postData.data.listPosts.items);
  };

  return (
    <div className="px-4 md:px-0 max-w-3xl mx-auto mt-20 font-bold tracking-wide">
      {posts.map((post, index) => (
        <BlogCard key={post.id} post={post} index={index} />
      ))}
    </div>
  );
}
