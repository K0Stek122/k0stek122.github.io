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
    
    //TODO Images
    const projects = [
        {
            title: "Unify Giving VisuAIse AI image generation.",
            description:
                "Engineered and designed the full stack website + Python Flask backend for 'Unify Giving' specialising in assisting the homeless and helping people find housing.",
            image: xdumpImage,
            link: "https://unifygiving.com/",
        },
        {
            title: "Change Birmingham Page + Database Backend",
            description:
                "Engineered the full stack website + database for the charity 'Change Birmingham' specialising in Solution-Focused Therapy and Counselling.",
            image: cbImage,
            link: "https://changebrieftherapy.org/"
        },
        {
            title: "Kindle Quote Extractor",
            description:
                "A Python-based tool designed for readers to extract highlights, notes, and quotes from digital books. WHAT THE FUCK IS HAPPENING HERE???????????????",
            image: kindleImage,
            link: "https://github.com/K0Stek122/kindle-extractor"
        },
        {
            title: "xdump",
            description:
                "The tool reads raw binary data and presents it in a structured hexadecimal format, enabling precise examination of file contents.AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA",
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
            image: xdumpImage,
            link: "https://github.com/K0Stek122/CastHud"
        },
        {
            title: "DLL Injector in RustLang",
            description:
                "A DLL injector that uses Windows libraries to inject DLLs into foreign applications.AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA",
            image: xdumpImage,
            link: "https://github.com/K0Stek122/Rust-DLL-Injector" // TODO: ADD README TO THAT PROJECT
        },
        {
            title: "File Splitter and Unsplitter.",
            description:
                "Written in pure C. Intuitive software that allows the user to split files for sharing or easier transfer.AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA",
            image: xdumpImage,
            link: "https://github.com/K0Stek122/c-file-splitter"
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
        <div className="flex flex-col justify-center items-center overflow-hidden min-h-screen m-2">
            <Breadcrumb className="animate-fadeInUp hover:text-white pb-4">
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
            
            <div className="flex flex-row justify-center items-center overflow-hidden">
                <div className="flex flex-row justify-center items-center max-w-15/100 h-full">
                    <LargeButton className="mt-20" onClick={() => toggleProject(false)}>
                        <ChevronLeft className="size-26" data-icon="inline-start" aria-hidden={false} />
                    </LargeButton>
                </div>
                <ProjectCard
                    key={currentProject}
                    projectTitle={project.title}
                    projectDescription={project.description}
                    image={project.image}
                    link={project.link}
                    totalIndex={projects.length}
                    curIndex={currentProject}
                />
                <div className="flex flex-row justify-center items-center max-w-15/100 h-full max-w-1/5">
                    <LargeButton className="mt-20" onClick={() => toggleProject(true)}>
                        <ChevronRight className="size-20" data-icon="inline-start" aria-hidden={false} />
                    </LargeButton>
                </div>
            </div>
            

        </div>
    );
}