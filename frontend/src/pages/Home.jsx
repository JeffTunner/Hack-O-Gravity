import React from 'react';
import IssueList from '../components/IssueList';
import { ReportIssue } from './ReportIssue';
import Header from '../components/Header';
import { Link } from 'react-router-dom';

function Home() {
    const issues = [
        { id: 1, title: 'Pothole on Main St', description: 'A large pothole has formed on Main St, causing traffic issues.' },
        { id: 2, title: 'Streetlight out on 5th Ave', description: 'The streetlight at the intersection of 5th Ave and 2nd St is not functioning.' },
        { id: 3, title: 'Graffiti on Community Center', description: 'Graffiti has appeared on the side of the community center.' },
    ];

    return (
        <div className="container mx-auto p-4">
            <header>
                <Header />
            </header>
            <h1 className="text-2xl font-bold mb-4">Civic Issues</h1>
            <IssueList issues={issues} />

            <section>
                <button><Link to="/report"><ReportIssue /></Link></button>
            </section>
        </div>
    );
}
export default Home;