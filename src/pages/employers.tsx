import React from 'react';
import { useNavigate } from 'react-router-dom';
import H1 from '../components/ui/typographyh1';
import { Button } from '../components/ui/button';

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
    const navigate = useNavigate();
    return (
        <div className="flex items-start justify-center h-screen bg-slate-800 gap-4">
            <div className="animate-fadeInUp flex flex-row items-center justify-center gap-4 bg-slate-800 v-screen">
                <img
                    src="/src/assets/LinkedIn.jpg"
                    alt="Description of the image"
                    className="rounded shadow-lg h-56 rounded-full"
                />
                <div className="flex flex-col items-center justify-center gap-4 bg-slate-800">
                    <H1 text="My Name is Kamil Kostrzewa"></H1>
                    <Button variant="default">Test</Button>
                </div>
            </div>

        </div>
    );
};

export default EmployersPage;