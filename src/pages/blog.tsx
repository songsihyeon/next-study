import { NextPage } from 'next';

interface props {
  posts: any;
}

const Blog: NextPage<props> = ({ posts }) => {
  return (
    <>
      <ul>{posts.map && posts.map((post: any) => <li>{post.title}</li>)}</ul>
    </>
  );
};

export async function getStaticProps() {
  const res = await fetch('');
  const posts = await res.json();

  return {
    props: {
      posts,
    },
  };
}

export default Blog;
