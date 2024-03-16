import { StaticImageData } from "next/image";
import { Skill } from "./constants/skills";

export interface IBlogCardProps {
  title: string;
  description: string;
  published_at: string;
  public_reactions_count: number;
  comments_count: number;
  reading_time_minutes: number;
  cover_image: string;
  url: string;
}

export interface IProject {
  title: string;
  image: StaticImageData;
  link: string;
  timeline: string;
  description: string;
  repository: string;
  otherLinks: {
    label: string;
    icon: JSX.Element;
    url: string;
  }[];
  tags: Array<Skill>;
}
[];
