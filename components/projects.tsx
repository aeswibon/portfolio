import ProjectCard from "@components/helper/card/project";
import { projectsData } from "@utils/constants/projects";

const Projects = () => {
  return (
    <div
      id="projects"
      className="relative z-50 my-12 border-t border-[#25213b] lg:my-24"
    >
      <div className="absolute left-[42%] top-6 h-[100px] w-[100px] translate-x-1/2 rounded-full bg-violet-100 opacity-20 blur-3xl  filter"></div>
      <div className="flex -translate-y-[1px] justify-center">
        <div className="w-3/4">
          <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-violet-500  to-transparent" />
        </div>
      </div>

      <div className="my-5 flex justify-center lg:py-8">
        <div className="flex  items-center">
          <span className="h-[2px] w-24 bg-[#1a1443]" />
          <span className="w-fit rounded-md bg-[#1a1443] p-2 px-5 text-xl text-white">
            Projects
          </span>
          <span className="h-[2px] w-24 bg-[#1a1443]" />
        </div>
      </div>
      <div className="pt-8 md:pt-24">
        <div className="flex flex-col gap-6">
          {projectsData.slice(0, 4).map((project, index) => (
            <div
              id={`sticky-card-${index + 1}`}
              key={index}
              className="sticky-card sticky mx-auto w-full max-w-2xl"
            >
              <div className="box-border flex items-center justify-center rounded shadow-[0_0_30px_0_rgba(0,0,0,0.3)] transition-all duration-[0.5s]">
                <ProjectCard project={project} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
