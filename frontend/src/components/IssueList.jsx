import React from 'react';

const IssueList = ({ issues }) => {
    return (
        <div className="issue-list">
            <h2 className="text-xl font-bold mb-4">Civic Issues</h2>
            <ul className="list-disc pl-5">
                {issues.map(issue => (
                    <li key={issue.id} className="mb-2">
                        <h3 className="font-semibold">{issue.title}</h3>
                        <p>{issue.description}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default IssueList;