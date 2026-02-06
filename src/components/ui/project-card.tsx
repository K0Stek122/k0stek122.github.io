import React from 'react';
import H1 from './typographyh1';
import { CodeIcon } from 'lucide-react';
import { Button } from './button';
import P from './typographyp';

interface ProjectCardProps {
    projectTitle: string;
    projectDescription: string;
    image: string;
    link: string;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
    projectTitle,
    projectDescription,
    image,
    link
}) => {

    const handleExternalLink = (url: string) => {
        window.open(url, '_blank');
    };

    const buttonStyle = "transition-transform duration-200 hover:scale-110 mb-4 mt-0 hover:cursor-pointer";

    return (
        <div
            className="flex bg-slate-800 flex-col justify-center items-center max-w-5/6 md:max-w-1/2 p-2 animate-fadeInUp m-4"
        >
            <H1>{projectTitle}</H1>
            <P>{projectDescription}</P>
            <Button className={buttonStyle} size="lg" onClick={() => handleExternalLink(link)}>
                <CodeIcon data-icon="inline-start" aria-hidden={false} />
                GitHub
            </Button>
            <div className="w-full max-w-90/100 aspect-[16/9] overflow-hidden rounded-lg shadow-lg">
                <img src={image} className="rounded-lg h-full w-full object-cover"></img>
            </div>
        </div>
    );
};