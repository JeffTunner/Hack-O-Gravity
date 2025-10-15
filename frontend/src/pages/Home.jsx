import React from 'react';
import IssueList from '../components/IssueList';

const Home = () => {
    const issues = [
        { id: 1, title: 'Pothole on Main St', description: 'A large pothole has formed on Main St, causing traffic issues.' },
        { id: 2, title: 'Streetlight out on 5th Ave', description: 'The streetlight at the intersection of 5th Ave and 2nd St is not functioning.' },
        { id: 3, title: 'Graffiti on Community Center', description: 'Graffiti has appeared on the side of the community center.' },
    ];

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">Civic Issues</h1>
            <IssueList issues={issues} />
        </div>
    );
};

export default Home;