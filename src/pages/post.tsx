import type { NextPage } from 'next';

const Post: NextPage = () => {
  return (
    <>
      <div></div>
    </>
  );
};

export async function getStaticPaths() {
  const res = await fetch('https://.../posts');
  const posts = await res.json();

  const paths = posts.map((post) => ({
    params: { id: post.id },
  }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const res = await fetch(`https://.../posts/${params.id}`);
  const post = await res.json();

  return { props: { post } };
}

export default Post;
