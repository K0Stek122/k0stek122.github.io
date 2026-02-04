import React from 'react';
import { Button } from '../components/ui/button';
import { LaptopMinimalCheck, GraduationCap, BookOpenText } from 'lucide-react';
import { Separator } from '../components/ui/separator';
import { useNavigate } from 'react-router-dom';

/*
The main page will display three main buttons:
- Employers for employer information
- Students for learning information
- Blog for the main blog page.
*/

interface IndexPageProps {
    prompt?: string;
}

const IndexPage: React.FC<IndexPageProps> = () => {
    const navigate = useNavigate();
    const buttonStyles = "h-24 w-30 transition-transform duration-200 hover:scale-110 flex flex-col items-center justify-center gap-2 hover:cursor-pointer animate-fadeInUp";

    return (
        <div className="flex items-center justify-center h-screen bg-slate-800 gap-4">
            <Button variant="default" className={buttonStyles}
                onClick={()=> navigate('/employers')}
            >
                <LaptopMinimalCheck className="size-14" data-icon="inline-start" aria-hidden="true" />
                For Employers
            </Button>

            <Button variant="default" className={buttonStyles}
                onClick={() => navigate('/students')}
            >
                <GraduationCap className="size-14" data-icon="inline-start" aria-hidden="true" />
                For Students
            </Button>

            <Button variant="default" className={buttonStyles}
                onClick={() => navigate('/blog')}
            >
                <BookOpenText className="size-14" data-icon="inline-start" aria-hidden="true" />
                Blog
            </Button>

        </div>
    );
};

export default IndexPage;