import { IProject } from "@utils/types";
import Image from "next/image";
import Link from "next/link";
import { BsGithub } from "react-icons/bs";

export default function ProjectCard({
  project,
  highlight = false,
}: {
  project: IProject;
  highlight?: boolean;
}) {
  const repositoryLink = {
    label: highlight ? "Repository" : "",
    icon: <BsGithub />,
    url: project.repository,
  };

  return (
    <div className="relative w-full rounded-lg border border-[#1b2c68a0] bg-gradient-to-r from-[#0d1224] to-[#0a0d37]">
      <div className="flex flex-row">
        <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-pink-500 to-violet-600"></div>
        <div className="h-[1px] w-full bg-gradient-to-r from-violet-600 to-transparent"></div>
      </div>
      <div className="relative px-4 py-3 lg:px-8 lg:py-5">
        <div className="absolute top-1/2 flex -translate-y-1/2 flex-row space-x-1 lg:space-x-2">
          <div className="h-2 w-2 rounded-full bg-red-400 lg:h-3 lg:w-3"></div>
          <div className="h-2 w-2 rounded-full bg-orange-400 lg:h-3 lg:w-3"></div>
          <div className="h-2 w-2 rounded-full bg-green-200 lg:h-3 lg:w-3"></div>
        </div>
        <p className="ml-3 text-center text-base text-[#16f2b3] lg:text-xl">
          <Link
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="link-underline group-hover:link-underline mb-2 mt-4 text-xl font-bold leading-tight text-zinc-100 hover:cursor-pointer"
          >
            {project.title}
          </Link>
        </p>
      </div>
      <div className="overflow-hidden border-t-[2px] border-indigo-900 px-4 py-4 lg:px-8 lg:py-8">
        <Image
          src={project.image}
          alt={project.title}
          className="h-1/2 w-full"
        />
        <div className="my-3 flex justify-start gap-6 text-sm text-zinc-400">
          <span className="relative inline-flex">
            <span className="text-base">{project.timeline}</span>
            {project.timeline.includes("now") && (
              <span className="absolute right-0 top-1/2 -mr-5 -mt-1.5 flex h-3 w-3 items-center justify-center">
                <span className="bg-primary-400 absolute inline-flex h-full w-full animate-ping rounded-full opacity-75" />
                <span className="bg-primary-500 relative inline-flex h-2 w-2 rounded-full" />
              </span>
            )}
          </span>
          <div className="ml-1.5 flex items-center gap-4">
            {[repositoryLink, ...project.otherLinks].map((link, index) => {
              return (
                <Link
                  key={link.url}
                  className="group flex gap-2 text-xl transition-all ease-out hover:text-white"
                  href={link.url || "#"}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {link.icon}
                  {link.label && (
                    <span className="hidden text-sm uppercase tracking-wider transition-all ease-out lg:block">
                      {link.label}
                    </span>
                  )}
                </Link>
              );
            })}
          </div>
        </div>
        <p className="mt-4 leading-relaxed text-zinc-300">
          {project.description}
        </p>
        <div className="mt-4 flex cursor-default flex-wrap gap-2 text-zinc-400">
          {project.tags.map((tag) => (
            <Link
              key={tag.name}
              href={tag.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-row items-center gap-1 rounded-full bg-zinc-900 px-2 py-1 transition-all ease-in-out hover:bg-white hover:text-zinc-900"
            >
              {tag.icon}
              <span className="text-xs tracking-wide">{tag.name}</span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
