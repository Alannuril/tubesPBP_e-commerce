import { useEffect, useState } from "react";
import client from "../api/client";
import PostCard from "../components/PostCard";

function Home() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    client
      .get("/posts")
      .then((res) => setPosts(res.data))
      .catch((err) => console.error(err))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <p className="text-center text-blue-500">Loading...</p>;

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Daftar Post</h1>
      <div className="grid gap-4 md:grid-cols-2">
        {posts.slice(0, 6).map((p) => (
          <PostCard key={p.id} title={p.title} body={p.body} />
        ))}
      </div>
    </div>
  );
}

export default Home;
