import Head from "next/head";
import Layout from "./components/layout";
import { TOKEN, DATABASE_ID } from "../config";

export default function Projects({projects}) {
  return (
    <Layout>
      <Head>
        <title>민수의 포트폴리오</title>
        <meta name="description" content="민수의 포트폴리오" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>총 프로젝트 : {projects.results.length}</h1>

      {projects.results.map((project) => (
        <h1>{project.properties.이름.title[0].plain_text}</h1>
      ))}

    </Layout>
  );
}

// 빌드 타임에 호출
export async function getStaticProps() {
  const options = {
    method: 'POST',
    headers: {
      accept: 'application/json',
      'Notion-Version': '2022-06-28',
      'content-type': 'application/json',
      Authorization: `Bearer ${TOKEN}`
    },
    body: JSON.stringify({
      sorts: [
        {
          "property": "기간",
          "direction": "descending"
        }
      ],
      page_size: 100
    })
  };

  const res = await fetch(`https://api.notion.com/v1/databases/${DATABASE_ID}/query`, options)
  
  const projects = await res.json();  

  return {
    props: {projects}, // will be passed to the page component as props
  }
}