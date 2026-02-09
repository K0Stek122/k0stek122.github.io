import { Breadcrumb, BreadcrumbList, BreadcrumbItem, BreadcrumbLink, BreadcrumbSeparator } from "../components/ui/breadcrumb";

import xdumpImage from ".././assets/projects/xdump.png"
import conwayImage from ".././assets/projects/c-conway-game-of-life.gif"
import kindleImage from ".././assets/projects/kindle-extractor.png"
import cbImage from ".././assets/projects/cb.png"

import LargeButton from "../components/ui/large-button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";
import { ProjectCard } from "../components/ui/project-card";

export default function PortfolioPage() {
    
    const [currentProject, setCurrentProject] = useState(0);
    
    const projects = [
        {
            title: "Change Birmingham Page and Database Backend",
            description:
                "Engineered the full stack website + database for the charity 'Change Birmingham' specialising in Solution-Focused Therapy and Counselling.",
                image: cbImage,
                link: "https://changebrieftherapy.org/"
        },
        {
            title: "Kindle Quote Extractor",
            description:
                "A Python-based tool designed for readers to extract highlights, notes, and quotes from digital books. The tool processes book data and consolidates marked passages into a clean, structured output.",
            image: kindleImage,
            link: "https://github.com/K0Stek122/kindle-extractor"
        },
        {
            title: "xdump",
            description:
                "The tool reads raw binary data and presents it in a structured hexadecimal format, enabling precise examination of file contents, memory layouts, and binary structures. Implemented entirely in pure C and built from scratch.",
            image: xdumpImage,
            link: "https://github.com/K0Stek122/xdump"
        },
        {
            title: "Conway's Game of Life",
            description:
                "The project simulates the evolution of a two-dimensional cellular automaton. It handles state transitions, boundary conditions, and efficient grid updates across successive generations.",
            image: conwayImage,
            link: "https://github.com/K0Stek122/c-conway-game-of-life"
        },
        {
            title: "CastHud: C++ GUI overlay tool",
            description:
                "designed to let the user designed whatever they need on top of another application. Targeted towards gaming but can be used in any application as long as the system is running windows.",
                image: null,
                link: "https://github.com/K0Stek122/CastHud"
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