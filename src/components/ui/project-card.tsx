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
    totalIndex: number;
    curIndex: number;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
    projectTitle,
    projectDescription,
    image,
    link,
    totalIndex,
    curIndex
}) => {

    const handleExternalLink = (url: string) => {
        window.open(url, '_blank');
    };

    const buttonStyle = "transition-transform duration-200 hover:scale-110 mb-4 mt-0 hover:cursor-pointer";

    return (
        <div
            className="flex bg-slate-800 flex-col justify-center items-center p-2 animate-fadeInUp h-full overflow-hidden"
        >
            <H1 className="line-clamp-1">{projectTitle}</H1>
            <P className="line-clamp-2">{projectDescription}</P>
            <Button className={buttonStyle} size="lg" onClick={() => handleExternalLink(link)}>
                <CodeIcon data-icon="inline-start" aria-hidden={false} />
                See it yourself
            </Button>
            <div className="w-90/100 max-w-90/100 aspect-[16/9] h-auto overflow-hidden rounded-lg shadow-lg max-h-90/100">
                <img src={image} className="rounded-lg h-full w-full object-cover"></img>
            </div>
            <P>
                {"◦".repeat(curIndex)}
                {"•"}
                {"◦".repeat(totalIndex - curIndex - 1)}
            </P>
        </div>
    );
};