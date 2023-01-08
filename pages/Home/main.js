import Animation from "./animation";
import Link from "next/link";

export default function Main() {
  return (
    <section className="flex min-h-screen flex-col items-center justify-center text-gray-600 body-font">
      <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
          <Animation />
        </div>
        <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
            소통을 중요시하는 FE 개발자 신민수입니다!
          </h1>
          <p className="leading-relaxed">
            &nbsp;&nbsp;&nbsp;&nbsp;▪ 빠르게 무언가를 이뤄내는 것보다 꾸준히 배우며 성장하는 것을 좋아합니다.
          </p>
          <p className="leading-relaxed">
            &nbsp;&nbsp;&nbsp;&nbsp;▪ 어려운 문제를 마주쳐도 끈기 있게 매달리고, 그 과정들에서 성취감과 즐거움을
            느낍니다.
          </p>
          <p className="mb-8 leading-relaxed">
            &nbsp;&nbsp;&nbsp;&nbsp;▪ 소통을 중요하게 생각하며 여러 번의 팀 프로젝트를 통해 협업 능력을 길러왔습니다.
          </p>
          <div className="flex justify-center">
            <Link href="/teamProjects">
              <button className="btn-project">팀 프로젝트 보러가기</button>
            </Link>
            <Link href="/toyProjects">
              <button className="btn-project ml-4">개인 프로젝트 보러가기</button>
            </Link>
            <a href="https://github.com/Minsoo7044">
              <button className="btn-project ml-4">깃허브 보러가기</button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
