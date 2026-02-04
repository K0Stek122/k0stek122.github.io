import React from 'react';
import { Button } from '../components/ui/button';
import { LaptopMinimalCheck, GraduationCap, BookOpenText } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { AlertDialog, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from '../components/ui/alert-dialog';

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

    const handleExternalLink = (url: string) => {
        window.open(url, '_blank');
    };

    return (
        <div className="flex items-center justify-center h-screen bg-slate-800 gap-4">
            <Button variant="default" className={buttonStyles}
                onClick={()=> navigate('/employers')}
            >
                <LaptopMinimalCheck className="size-14" data-icon="inline-start" aria-hidden="true" />
                For Employers
            </Button>

            
            <AlertDialog>
                <AlertDialogTrigger>
                    <Button variant="default" className={buttonStyles}>
                        <GraduationCap className="size-14" data-icon="inline-start" aria-hidden="true" />
                        For Students
                    </Button>
                </AlertDialogTrigger>
                <AlertDialogContent className="bg-slate-800 text-white border-none">
                    <AlertDialogHeader>
                        <AlertDialogTitle>Sorry!</AlertDialogTitle>
                        <AlertDialogDescription className="text-gray-300">
                            I'm working very hard to provide you understandable and easy-to-follow learning content, but I still need more time. Until then you can find tutorials on my blog.
                        </AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                        <AlertDialogCancel variant="default">Okay</AlertDialogCancel>
                    </AlertDialogFooter>
                </AlertDialogContent>
            </AlertDialog>

            <Button variant="default" className={buttonStyles}
                onClick={() => handleExternalLink("https://themindpalace.bearblog.dev/")}
            >
                <BookOpenText className="size-14" data-icon="inline-start" aria-hidden="true" />
                Blog
            </Button>

        </div>
    );
};

export default IndexPage;