import React from "react"
import Image from "next/image"
import Link from "next/link"
import SlideUp from "./SlideUp"
import { BsGithub, } from "react-icons/bs"

const projects = [
  {
    name: "Chat-GPT Landing Page",
    description:
      "A landing page design idea for the popular Chat-GPT AI.",
    image: "/gpt.png",
    github: "https://github.com/kirizarry47/gpt3_landingpage.github.io",
    link: "https://github.com/kirizarry47/gpt3_landingpage.github.io",
  },
  {
    name: "Three.js Portfolio Site",
    description: "A web developer portfolio site design idea utilizing Three.js and framer motion animations.",
    image: "/threejs.png",
    github: "https://github.com/kirizarry47/portfolio_3d.git",
    link: "https://github.com/kirizarry47/portfolio_3d.git",
  },
  {
    name: "Growth Finance Dashboard",
    description:
      "A MERN Finance Dashboard App that has Machine Learning Predictions. The frontend consist of Vite for the starter application, Redux Toolkit for state management, Material UI for component library, and Recharts for Charts. For the backend Node Js as the runtime, Express Js as the backend framework, and MongoDB for the database.",
    image: "/growth.png",
    github: "https://github.com/kirizarry47/finance_dashboard",
    link: "https://github.com/kirizarry47/finance_dashboard",
  },
]

const ProjectsSection = () => {
  return (
    <section id="projects">
      <h1 className="my-10 text-center font-bold text-4xl">
        Projects
        <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded"></hr>
      </h1>

      <div className="flex flex-col space-y-28">
        {projects.map((project, idx) => {
          return (
            <div key={idx}>
              <SlideUp offset="-300px 0px -300px 0px">
                <div className="flex flex-col  animate-slideUpCubiBezier animation-delay-2 md:flex-row md:space-x-12">
                  <div className=" md:w-1/2">
                    <Link href={project.link}>
                      <Image
                        src={project.image}
                        priority={true}
                        alt=""
                        width={1000}
                        height={1000}
                        className="rounded-xl shadow-xl hover:opacity-70"
                      />
                    </Link>
                  </div>
                  <div className="mt-8 md:w-1/2">
                    <h1 className="text-4xl font-bold mb-6">{project.name}</h1>
                    <p className="text-xl leading-7 mb-4 text-neutral-600 dark:text-neutral-400">
                      {project.description}
                    </p>
                    <div className="flex flex-row align-bottom space-x-4">
                      <Link href={project.github} target="_blank">
                        <BsGithub
                          size={30}
                          className="hover:-translate-y-1 transition-transform cursor-pointer
                          hover:text-teal-600"
                        />
                      </Link>
                
                    </div>
                  </div>
                </div>
              </SlideUp>
            </div>
          )
        })}
        
      </div>
    </section>
  )
}

export default ProjectsSection