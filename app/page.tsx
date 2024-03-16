import AboutSection from "@components/about";
import ContactSection from "@components/contact";
import Education from "@components/education";
import Experience from "@components/experience";
import HeroSection from "@components/hero";
import Projects from "@components/projects";
import Skills from "@components/skills";

// async function getData() {
//   const res = await fetch(
//     `https://dev.to/api/articles?username=${personalData.devUsername}`
//   );

//   if (!res.ok) {
//     throw new Error("Failed to fetch data");
//   }

//   const data = await res.json();

//   const filtered = data
//     .filter((item: IBlogCardProps) => item?.cover_image)
//     .sort(() => Math.random() - 0.5);

//   return filtered;
// }

export default async function Home() {
  // const blogs = await getData();

  return (
    <>
      <HeroSection />
      <AboutSection />
      <Experience />
      <Skills />
      <Projects />
      <Education />
      {/* <Blog blogs={blogs} /> */}
      <ContactSection />
    </>
  );
}
