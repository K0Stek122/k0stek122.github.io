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
                    <p className=" [&:not(:first-child)]: text-white">
                        "Do More with Less. Be Pragmatic."
                    </p>
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
            <Separator className="animate-fadeInUp max-w-2/5" />
            <div className="animate-fadeInUp flex flex-col items-center w-screen bg-slate-800 max-w-2/5">
            
                <H1 text="About Me" />
                <p className="leading-7 [&:not(:first-child)]:mb-6 mt-2 text-white">
                    Hi! I am an aspiring Software Engineer with a deep-rooted passion for computer science. Since childhood I adored programming and loved creating my own tools. Head over to GitHub to see some of my best projects.
                </p>

                <H1 text="Freelance & Short-Term Work" />
                <p className="leading-7 [&:not(:first-child)]:mt-2 text-white">
                    <b className="underline">Open to freelance.</b> Not Individual but Business-oriented. Below you will find some of the issues I can help fix at your business.
                </p>

                <ul className="ml-6 list-disc mt-2 text-white">
                    <li className="mb-2">Data Entry, Analytics & Visualisation.</li>
                    <li className="mb-2">Application maintenance. Refactoring, Documentation, CI/CD optimisation.</li>
                    <li className="mb-2">Small-scale Applications (e.g. Internal tools for bookkeeping or data entry)</li>
                    <li className="mb-2">Small and Medium-Scale Website Development.</li>
                </ul>

                <p className="leading-7 [&:not(:first-child)]:mb-6 text-white">
                    <b className="underline">Offering Free Consultations. Charging Per Result.</b> If your issue is not listed here I am open to taking a look at your situation for free to see what we can work out.
                </p>

                <p className="leading-7 [&:not(:first-child)]:mb-6 text-white">
                    <b className="underline">Affordable & Reasonable Student Prices.</b>
                </p>
            </div>
        </div>
    );
};

export default EmployersPage;