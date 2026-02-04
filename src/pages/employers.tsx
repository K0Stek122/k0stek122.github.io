import React from 'react';
import H1 from '../components/ui/typographyh1';
import { Button } from '../components/ui/button';
import { Separator } from '../components/ui/separator';
import { FileUser, Globe, Code } from 'lucide-react';
import LinImage from '../assets/LinkedIn.jpg'

/*
The main page will display three main buttons:
- Employers for employer information
- Students for learning information
- Blog for the main blog page.
*/

interface EmployersPageProps {
    prompt?: string;
}

const EmployersPage: React.FC<EmployersPageProps> = () => {
    const buttonStyles = "transition-transform duration-200 hover:scale-110 hover:cursor-pointer animate-fadeInUp";
    
    const handleExternalLink = (url: string) => {
        window.open(url, '_blank');
    };


    return (
        <div className="flex flex-col items-center h-screen w-dvw bg-slate-800 gap-12 justify-start">
            <div className="animate-fadeInUp flex flex-row items-center justify-center gap-4 bg-slate-800 v-screen w-full max-w-4xl">
                <img
                    src={LinImage}
                    alt="Description of the image"
                    className="rounded shadow-lg h-56 rounded-full"
                />
                <div className="flex flex-col items-center justify-center gap-4 bg-slate-800">
                    <H1 text="Kamil Kostrzewa"></H1>
                    <div className="flex flex-row items-center justify-center gap-4 bg-slate-800">

                        <Button
                            variant="default"
                            size="lg"
                            className={buttonStyles}
                            onClick={() => handleExternalLink("https://www.linkedin.com/in/kamil-kostek/")}>
                                <Globe data-icon="inline-start" />
                                LinkedIn
                        </Button>

                        <Button
                            variant="default"
                            size="lg"
                            className={buttonStyles}
                            >
                                <FileUser data-icon="inline-start" />
                                CV
                        </Button>

                        <Button
                            variant="default"
                            size="lg"
                            className={buttonStyles}
                            onClick={() => handleExternalLink("https://github.com/K0Stek122")}
                            >
                                <Code data-icon="inline-start" />
                                GitHub
                        </Button>
                    </div>
                </div>
            </div>
            <Separator className="animate-fadeInUp max-w-3/5" />
            <div className="animate-fadeInUp flex flex-col items-center w-screen bg-slate-800 max-w-3/5">
                <H1 text="About Me" />
                <p className="leading-7 [&:not(:first-child)]:mt-6 text-white">
                    The Quick Brown Fox Jumps Over The Lazy Dog.
                </p>
            </div>
        </div>
    );
};

export default EmployersPage;