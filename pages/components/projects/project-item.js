
export default function ProjectItem({ data }) {
  const title = data.properties.Title.title[0].plain_text;
  const github = data.properties.Github.url;
  const description = data.properties.Description.rich_text[0].plain_text;
  const members = data.properties.Members.rich_text[0].plain_text;
  const myRole = data.properties.MyRole.rich_text[0].plain_text;
  const workPeriod = data.properties.WorkPeriod.date;

  return (
    <div className="p-6 m-3 bg-slate-500 rounded-md">
      

      <h1>{title}</h1>
      <a href={github} className="text-slate-200">
        깃허브 바로가기
      </a>
      <h1>{description}</h1>
      <h1>{members}</h1>
      <h1>{myRole}</h1>
      <h1>
        {workPeriod.start} ~ {workPeriod.end}
      </h1>
    </div>
  );
}
