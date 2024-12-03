import { useState } from "react";
import pro01 from "../../assets/img/project_01.png";
import pro02 from "../../assets/img/project_02.png";
import pro03 from "../../assets/img/project_03.png";
import pro04 from "../../assets/img/project_05.png";
import pro05 from "../../assets/img/project_06.png";
import Project from "./Project";

const projects = [
  {
    id: "01",
    title: "Revenge of the Assassin",
    href: "https://sssoto17.github.io/website_revengeoftheassassin/",
    img: pro01.src,
    description: "Point and click game programmed with vanilla JS.",
  },
  {
    id: "02",
    title: "Aria",
    href: "https://friendly-starburst-edeac4.netlify.app/",
    img: pro02.src,
    description: "Website redesign for a vocal instructor.",
  },
  {
    id: "03",
    title: "CPH Light Festival",
    href: "https://cphlightfestival-kea.netlify.app/",
    img: pro03.src,
    description:
      "Redesign for CPH Light Festival with focus on presentation of installations.",
  },
  {
    id: "04",
    title: "AskExperts",
    href: "https://soto-temaopgave-frontenddesign.netlify.app/",
    img: pro04.src,
    description: "Implementation of Figma design in the Astro framework.",
  },
  {
    id: "05",
    title: "To Do App",
    href: "https://sotos-todo.netlify.app/",
    img: pro05.src,
    description:
      "Programming of a to do app, with the ability to create lists of tasks.",
  },
];

// import projects from "../../data/projects.json";

const Projects = () => {
  const [activeProject, setActiveProject] = useState("01");

  return (
    <section>
      <ul className="hidden md:flex gap-6 place-content-end cursor-default mb-4">
        {projects.map((project) => {
          return (
            <li
              key={project.id}
              className={`${
                activeProject !== project.id && "opacity-0 hidden"
              }`}
            >
              <h2 className="font-bold text-[var(--blue-haze-700)]">
                {project.id}{" "}
                <span
                  className={`text-2xl font-semibold transition-opacity duration-150 text-[var(--clr-text-heading)] ${
                    activeProject !== project.id && "opacity-0 hidden"
                  }`}
                >
                  {project.title}
                </span>
              </h2>
            </li>
          );
        })}
      </ul>
      <ul className="lg:flex lg:w-full lg:h-80 border border-[var(--cosmos-100)] [&>*+*]:border-l [&>*+*]:border-[var(--cosmos-100)] rounded-2xl overflow-clip">
        {projects.map((project) => {
          return (
            <Project
              key={project.id}
              {...project}
              activeProject={activeProject}
              setActiveProject={setActiveProject}
            />
          );
        })}
      </ul>
    </section>
  );
};

export default Projects;
