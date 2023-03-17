import Link from "next/link";

export async function getStaticProps() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await res.json();

  return {
    props: { posts: data.slice(0, 3) },
  };
}

export default function Posts({ posts }) {
  let count = 0;
  return (
    <div>
      <h1>All Posts</h1>
      {posts.map((post) => (
        <Link href={"/posts/" + post.id} key={post.id}>
          <h3>
            Post {(count += 1)}: {post.title}
          </h3>
        </Link>
      ))}
    </div>
  );
}
