import { AiFillApi } from "react-icons/ai";
import { FaJava } from "react-icons/fa6";
import {
  SiCplusplus,
  SiDjango,
  SiDocker,
  SiExpress,
  SiFirebase,
  SiGnubash,
  SiGo,
  SiGraphql,
  SiHelm,
  SiHtml5,
  SiJavascript,
  SiKotlin,
  SiKubernetes,
  SiMongodb,
  SiNextdotjs,
  SiPlanetscale,
  SiPostgresql,
  SiPostman,
  SiPython,
  SiRancher,
  SiReact,
  SiRedis,
  SiSpringboot,
  SiSupabase,
  SiTailwindcss,
  SiTerraform,
  SiTypescript,
} from "react-icons/si";

export type Skill = {
  name: string;
  icon: React.ReactNode | null;
  href: string;
};

const languages = {
  Python: {
    name: "Python",
    icon: <SiPython />,
    href: "https://youtu.be/x7X9w_GIm1s",
  },
  Typescript: {
    name: "Typescript",
    icon: <SiTypescript />,
    href: "https://youtu.be/zQnBQ4tB3ZA",
  },
  Javascript: {
    name: "Javascript",
    icon: <SiJavascript />,
    href: "https://youtu.be/DHjqpvDnNGE",
  },
  Cpp: {
    name: "C++",
    icon: <SiCplusplus />,
    href: "https://youtu.be/MNeX4EGtR5Y",
  },
  Bash: {
    name: "Bash",
    icon: <SiGnubash />,
    href: "https://youtu.be/SPwyp2NG-bE",
  },
  Java: {
    name: "Java",
    icon: <FaJava />,
    href: "https://youtu.be/l9AzO1FMgM8",
  },
  Kotlin: {
    name: "Kotlin",
    icon: <SiKotlin />,
    href: "https://youtu.be/xT8oP0wy-A0",
  },
  Golang: {
    name: "Golang",
    icon: <SiGo />,
    href: "https://youtu.be/446E-r0rXHI",
  },
  Terraform: {
    name: "Terraform",
    icon: <SiTerraform />,
    href: "https://youtu.be/tomUWcQ0P3k",
  },
  HTML: {
    name: "HTML",
    icon: <SiHtml5 />,
    href: "https://youtu.be/ok-plXXHlWw",
  },
};

const frameworks = {
  NextJS: {
    name: "NextJS",
    icon: <SiNextdotjs />,
    href: "https://youtu.be/Sklc_fQBmcs",
  },
  Django: {
    name: "Django REST",
    icon: <SiDjango />,
    href: "https://www.djangoproject.com/",
  },
  Tailwind: {
    name: "Tailwind",
    icon: <SiTailwindcss />,
    href: "https://youtu.be/mr15Xzb1Ook",
  },
  React: {
    name: "React",
    icon: <SiReact />,
    href: "https://youtu.be/Tn6-PIqc4UM",
  },
  Springboot: {
    name: "Springboot",
    icon: <SiSpringboot />,
    href: "https://spring.io/projects/spring-boot/",
  },
  ExpressJS: {
    name: "Express",
    icon: <SiExpress />,
    href: "https://expressjs.com/",
  },
};

const databases = {
  PostgreSQL: {
    name: "PostgreSQL",
    icon: <SiPostgresql />,
    href: "https://www.postgresql.org/",
  },
  Redis: {
    name: "Redis",
    icon: <SiRedis />,
    href: "https://youtu.be/G1rOthIU-uo",
  },
  MongoDB: {
    name: "MongoDB",
    icon: <SiMongodb />,
    href: "https://youtu.be/-bt_y4Loofg",
  },
  Supabase: {
    name: "Supabase",
    icon: <SiSupabase />,
    href: "https://youtu.be/zBZgdTb-dns",
  },
  PlanetScale: {
    name: "PlanetScale",
    icon: <SiPlanetscale />,
    href: "https://planetscale.com/",
  },
  Firestore: {
    name: "Firestore",
    icon: <SiFirebase />,
    href: "https://youtu.be/vAoB4VbhRzM",
  },
};

const deployment = {
  Docker: {
    name: "Docker",
    icon: <SiDocker />,
    href: "https://youtu.be/Gjnup-PuquQ",
  },
  Kubernetes: {
    name: "Kubernetes",
    icon: <SiKubernetes />,
    href: "https://youtu.be/PziYflu8cB8",
  },
  Helm: {
    name: "Helm",
    icon: <SiHelm />,
    href: "https://helm.sh/",
  },
};

const tools = {
  Postman: {
    name: "Postman",
    icon: <SiPostman />,
    href: "https://www.postman.com/",
  },
  Rancher: {
    name: "Rancher",
    icon: <SiRancher />,
    href: "https://rancher.com/",
  },
  GraphQL: {
    name: "GraphQL",
    icon: <SiGraphql />,
    href: "https://graphql.org/",
  },
};

const api = {
  github: {
    name: "GitHub API",
    icon: <AiFillApi />,
    href: "https://docs.github.com/en/rest",
  },
};

const Skills = {
  languages,
  frameworks,
  tools,
  api,
  databases,
  deployment,
} satisfies Record<string, Record<string, Skill>>;

export default Skills;
