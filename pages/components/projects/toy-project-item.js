export default function ProjectItem({ data }) {
  const title = data?.properties.Title.title[0].plain_text;
  const github = data?.properties.Github.url;
  const description = data?.properties.Description.rich_text[0].plain_text;
  const workPeriod = data?.properties.WorkPeriod.date.start;
  const tags = data?.properties.Tags.multi_select;

  return (
    <div className="project-card p-3">
      <h1 className="text-2xl font-bold">{title}</h1>
      <h3 className="mt-3 text-xl">{description}</h3>
      <a href={github} className="mt-2">
        깃허브 바로가기
      </a>
      <h1 className="mt-2">작업기간 : {workPeriod}</h1>

      <div className="flex flex-row flex-wrap mt-3">
        {tags &&
          tags.map((tag) => (
            <h1 className="px-2 py-1 my-1 mr-1 rounded-md bg-sky-200 dark:bg-sky-700 w-30" key={tag.id}>
              {tag.name}
            </h1>
          ))}
      </div>
    </div>
  );
}
