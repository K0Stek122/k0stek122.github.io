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
    
    const [currentProjectPointer, setCurrentProjectPointer] = useState(0);
    
    //TODO Images
    const projects = [
        {
            title: "Unify Giving VisuAIse AI image generation.",
            description:
                "Engineered full-stack AI-Driven software for 'Unify Giving' to help people in need access housing resources.",
            image: cbImage,
            link: "https://unifygiving.com/",
        },
        {
            title: "Change Birmingham Page + Database Backend",
            description:
                "Engineered full-stack website & database for the charity 'Change Birmingham' aiding staff with data storage & analytics.",
            image: cbImage,
            link: "https://changebrieftherapy.org/"
        },
        {
            title: "Kindle Quote Extractor",
            description:
                "Engineered a Python tool for automating quote extraction. Allows for output to JSON and Markdown.",
            image: kindleImage,
            link: "https://github.com/K0Stek122/kindle-extractor"
        },
        {
            title: "xdump: Hexdump utility tool",
            description:
                "Engineered a Pure-C tool for analysing raw binary data of any file.",
            image: cbImage,
            link: "https://github.com/K0Stek122/xdump"
        },
        {
            title: "Conway's Game of Life",
            description:
                "Designed Conway's game of life in Pure-C. Utilises mathematics and computation theory to implement a Pushdown Automaton.",
            image: conwayImage,
            link: "https://github.com/K0Stek122/c-conway-game-of-life"
        },
        {
            title: "CastHud: C++ GUI overlay tool",
            description:
                "Designed a GUI overlay tool letting users design any user interface on top of another application.",
            image: cbImage,
            link: "https://github.com/K0Stek122/CastHud"
        },
        {
            title: "Library injection utility in Rust",
            description:
                "Devised a cutting-edge tool for library injection into other applications.",
            image: cbImage,
            link: "https://github.com/K0Stek122/Rust-DLL-Injector" // TODO: ADD README TO THAT PROJECT
        },
        {
            title: "File Splitter and Unsplitter.",
            description:
                "Engineered in pure C. Intuitive software that allows the user to split files for sharing or easier transfer.",
            image: cbImage,
            link: "https://github.com/K0Stek122/c-file-splitter"
        },
    ];
    
    const toggleProject = (increment: boolean) => {
        if (!increment) {
            if (currentProjectPointer === 0) return;
            setCurrentProjectPointer(currentProjectPointer - 1);
        } else {
            if (currentProjectPointer === projects.length - 1) return;
            setCurrentProjectPointer(currentProjectPointer + 1);
        }
    };
    
    const project = projects[currentProjectPointer];

    return (
        <div className="flex flex-col items-center h-screen p-2">
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
            
            <div className="flex flex-row items-center gap-4 w-full flex-1 min-h-0">
                <LargeButton onClick={() => toggleProject(false)}>
                    <ChevronLeft className="size-26" data-icon="inline-start" aria-hidden={false} />
                </LargeButton>
                <ProjectCard
                    key={currentProjectPointer}
                    projectTitle={project.title}
                    projectDescription={project.description}
                    image={project.image}
                    link={project.link}
                    totalIndex={projects.length}
                    curIndex={currentProjectPointer}
                />
                <LargeButton onClick={() => toggleProject(true)}>
                    <ChevronRight className="size-26" data-icon="inline-start" aria-hidden={false} />
                </LargeButton>
            </div>
            

        </div>
    );
}