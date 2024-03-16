import Skills from "@utils/constants/skills";
import { ValueOf } from "next/dist/shared/lib/constants";
import Link from "next/link";
import GlowCard from "./helper/card/glow";

export default function SkillsSection() {
  return (
    <div
      id="skills"
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
            Skills
          </span>
          <span className="h-[2px] w-24 bg-[#1a1443]" />
        </div>
      </div>
      <div className="my-8 w-full md:my-12">
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          <SkillCard category="Frameworks" skills={Skills.frameworks} />
          <SkillCard category="Databases" skills={Skills.databases} />
          <SkillCard category="Languages" skills={Skills.languages} />
          <div className="space-y-5">
            <SkillCard category="Deployment" skills={Skills.deployment} />
            <SkillCard category="Other Tools" skills={Skills.tools} />
          </div>
        </div>
      </div>
    </div>
  );
}

const SkillCard = ({
  category,
  skills,
}: {
  category: string;
  skills: ValueOf<typeof Skills>;
}) => {
  return (
    <GlowCard identifier={`skill-${category}`}>
      <div className="group flex items-start rounded-lg p-6 text-base transition-all ease-out lg:rounded-2xl">
        <div className="flex flex-col gap-1">
          <div className="flex items-center justify-between">
            <span className="font-medium tracking-wider text-[#16f2b3] lg:text-xl">
              {category}
            </span>
          </div>
          <span className="text-xs uppercase tracking-wider lg:text-sm">
            {/* {subtitle} */}
          </span>
          <ul className="mt-3 grid grid-cols-2 gap-3 text-purple-300 md:grid-cols-3">
            {Object.values(skills).map((skill) => (
              <li key={skill.name}>
                <Link
                  href={skill.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex w-40 flex-row items-center gap-2 rounded py-1 transition-all ease-in-out hover:bg-white hover:text-zinc-900 lg:px-2"
                >
                  {skill.icon}
                  <span className="text-xs tracking-wide md:text-base">
                    {skill.name}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </GlowCard>
  );
};
