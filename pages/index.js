import Head from "next/head";
import Layout from "./components/layout";
import Main from "./Home/main";

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>민수의 포트폴리오</title>
        <meta name="description" content="민수의 포트폴리오" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Main />
    </Layout>
  );
}
