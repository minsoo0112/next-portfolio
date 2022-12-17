import Head from "next/head";
import Layout from "./components/layout";
import { TOKEN, DATABASE_ID } from "../config";
import TeamProjectItem from "./components/projects/team-project-item";

export default function Projects({ projects }) {
  return (
    <Layout>
      <Head>
        <title>민수의 포트폴리오</title>
        <meta name="description" content="민수의 포트폴리오" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1 className="flex items-center justify-center text-4xl font-bold">
        총 프로젝트 :
        <span className="pl-4 text-blue-300">{projects?.results.length}</span>
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 py-5 m-6">
        {projects && projects.results.map((project) => (
          <TeamProjectItem key={project.id} data={project} />
        ))}
      </div>
    </Layout>
  );
}

// 빌드 타임에 호출
export async function getStaticProps() {
  const options = {
    method: "POST",
    headers: {
      accept: "application/json",
      "Notion-Version": "2022-06-28",
      "content-type": "application/json",
      Authorization: `Bearer ${TOKEN}`,
    },
    body: JSON.stringify({
      sorts: [
        {
          property: "WorkPeriod",
          direction: "descending",
        },
      ],
      page_size: 100,
    }),
  };

  const res = await fetch(
    `https://api.notion.com/v1/databases/${DATABASE_ID}/query`,
    options
  );

  const projects = await res.json();

  return {
    props: { projects }, // will be passed to the page component as props
  };
}
