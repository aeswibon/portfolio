import { CgOrganisation } from "react-icons/cg";
import { IoIosRocket } from "react-icons/io";

import ArikeBG from "@public/images/project-bg/arike.png";
import CoronasafeBG from "@public/images/project-bg/coronasafe.jpg";
import Khelo from "@public/images/project-bg/khelo.png";
import Skills from "@utils/constants/skills";
import { IProject } from "@utils/types";

export const projectsData: IProject[] = [
  // CARE
  {
    title: "CARE",
    image: CoronasafeBG,
    link: "https://github.com/coronasafe/",
    timeline: "May `22 - now",
    description:
      "Care is a Digital Public Good enabling TeleICU & Decentralised Administration of Healthcare Capacity across States.",
    repository: "https://github.com/coronasafe/care_fe",
    otherLinks: [
      {
        label: "Open Healthcare Network",
        icon: <CgOrganisation />,
        url: "https://ohc.network/",
      },
    ],
    tags: [
      Skills.frameworks.Django,
      Skills.frameworks.React,
      Skills.frameworks.Tailwind,
      Skills.languages.Typescript,
      Skills.languages.Python,
    ],
  },
  // Khelo
  {
    title: "Khelo",
    image: Khelo,
    link: "https://github.com/aeswibon/khelo",
    timeline: "Apr `22",
    description: "Backend API for Khelo app using Go and Gin Framework ",
    repository: "https://github.com/aeswibon/khelo",
    otherLinks: [
      {
        label: "Staging",
        icon: <IoIosRocket />,
        url: "https://khelo-lzh5.onrender.com/swagger/index.html",
      },
    ],
    tags: [
      Skills.languages.Golang,
      Skills.databases.MongoDB,
      Skills.deployment.Docker,
    ],
  },
  // Arike
  {
    title: "Arike",
    image: ArikeBG,
    link: "https://github.com/aeswibon/arike-django",
    timeline: "Mar `22",
    description: `"Arike" is a Malayalam word that roughly translates to "Alongside" or "Besides" in English. The project caters to a system of specialized medical staff tending to patients under palliative care. Created as part of Global Digital Corps training - WD202 Django Course Capstone Project. Deployed on heroku.`,
    repository: "https://github.com/aeswibon/arike",
    otherLinks: [],
    tags: [
      Skills.frameworks.Tailwind,
      Skills.frameworks.Django,
      Skills.databases.PostgreSQL,
      Skills.databases.Redis,
    ],
  },
];
