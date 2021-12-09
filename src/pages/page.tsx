import type { NextPage } from 'next';

interface props {
  data: any;
}

const Page: NextPage<props> = ({ data }) {
  // Render data ...
  console.log(data);
}

export async function getServerSideProps() {
  const res = await fetch(`https://.../data`);
  const data = await res.json()

  return { props: { data }}
}

export default Page;
