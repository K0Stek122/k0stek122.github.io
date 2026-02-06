import { Breadcrumb, BreadcrumbList, BreadcrumbItem, BreadcrumbLink, BreadcrumbSeparator } from "../components/ui/breadcrumb";

import xdumpImage from ".././assets/projects/xdump.png"
import conwayImage from ".././assets/projects/c-conway-game-of-life.gif"
import kindleImage from ".././assets/projects/kindle-extractor.png"

import LargeButton from "../components/ui/large-button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";
import { ProjectCard } from "../components/ui/project-card";

export default function PortfolioPage() {
    
    const [currentProject, setCurrentProject] = useState(0);
    
    const projects = [
        {
            title: "Kindle Quote Extractor",
            description:
                "A Python-based tool designed for readers to extract highlights, notes, and quotes from digital books. The tool processes book data and consolidates marked passages into a clean, structured output. It enables readers to review, archive, and reuse their annotations outside the reading environment. The project focuses on data extraction, text processing, and reliable handling of varied input formats. Built to simplify personal knowledge management and long-term note retention. Designed with automation in mind to reduce manual copying and fragmented note-taking.",
            image: kindleImage,
            link: "https://github.com/K0Stek122/kindle-extractor"
        },
        {
            title: "xdump",
            description:
                "The tool reads raw binary data and presents it in a structured hexadecimal format, enabling precise examination of file contents, memory layouts, and binary structures.Implemented entirely in pure C and built from scratch, the project focuses on performance, predictable memory usage, and explicit control over data representation. Particular attention was paid to efficient file I/O, safe buffer handling, and producing clear, readable output suitable for debugging and reverse-engineering workflows.",
            image: xdumpImage,
            link: "https://github.com/K0Stek122/xdump"
        },
        {
            title: "Conway's Game of Life",
            description:
                "The project simulates the evolution of a two-dimensional cellular automaton, updating and rendering the grid in real time within the terminal environment. It handles state transitions, boundary conditions, and efficient grid updates across successive generations.The terminal interface was implemented using low-level terminal utilities, allowing interactive control and visual feedback without relying on graphical frameworks. The focus of the project was on clear separation of simulation logic and rendering, efficient memory usage, and predictable behaviour.",
            image: conwayImage,
            link: "https://github.com/K0Stek122/c-conway-game-of-life"
        },
    ];
    
    const toggleProject = (increment: boolean) => {
        if (!increment) {
            if (currentProject === 0) return;
            setCurrentProject(currentProject - 1);
        } else {
            if (currentProject === projects.length - 1) return;
            setCurrentProject(currentProject + 1);
        }
    };
    
    const project = projects[currentProject];

    const buttonStyle = "transition-transform duration-200 hover:scale-110 mb-4 mt-0 hover:cursor-pointer";

    return (
        <div className="flex min-h-screen h-screen max-h-sreen justify-start items-center flex-col gap-6 px-4 bg-slate-800 animate-fadeInUp">
            <Breadcrumb className="animate-fadeInUp hover:text-white">
                <BreadcrumbList> 
                    <BreadcrumbItem>
                        <BreadcrumbLink className="hover:text-white" href="/">Home</BreadcrumbLink>     
                    </BreadcrumbItem>
                    <BreadcrumbSeparator />
                    <BreadcrumbItem>
                        <BreadcrumbLink className="hover:text-white" href="/employers">For Employers</BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator />
                    <BreadcrumbItem>
                        <BreadcrumbLink className="hover:text-white" href="/employers/portfolio">Portfolio</BreadcrumbLink>
                    </BreadcrumbItem>
                </BreadcrumbList>
            </Breadcrumb>
            
            <div className="flex flex-row justify-center items-center">
                <LargeButton className="mt-20" onClick={() => toggleProject(false)}>
                    <ChevronLeft className="size-26" data-icon="inline-start" aria-hidden={false} />
                </LargeButton>
                <ProjectCard
                    key={currentProject}
                    projectTitle={project.title}
                    projectDescription={project.description}
                    image={project.image}
                    link={project.link}
                />
                <LargeButton className="mt-20" onClick={() => toggleProject(true)}>
                    <ChevronRight className="size-20" data-icon="inline-start" aria-hidden={false} />
                </LargeButton>
            </div>
            

        </div>
    );
}