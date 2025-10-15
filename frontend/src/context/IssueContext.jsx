import React, { createContext, useContext, useState, useEffect } from 'react';

const IssueContext = createContext();

export const useIssues = () => useContext(IssueContext);

const LOCAL_STORAGE_KEY = 'nagarsetu_issues';

const defaultIssues = [
  {
    id: '12345',
    category: 'Pothole',
    status: 'Resolved',
    description: 'Large pothole near Sector 21.',
    updated: '2025-10-10',
  },
  {
    id: '67890',
    category: 'Garbage',
    status: 'Active',
    description: 'Overflowing garbage bin at Market.',
    updated: '2025-10-13',
  },
  {
    id: '54321',
    category: 'Street Light',
    status: 'In Progress',
    description: 'Street light not working in Main Road.',
    updated: '2025-10-14',
  },
];

export const IssueProvider = ({ children }) => {
  const [issues, setIssues] = useState(() => {
    const stored = localStorage.getItem(LOCAL_STORAGE_KEY);
    return stored ? JSON.parse(stored) : defaultIssues;
  });

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(issues));
  }, [issues]);

  // Add a new issue
  const addIssue = issue => {
    const newIssue = {
      ...issue,
      id: Math.floor(Math.random() * 100000).toString(), // Generate a random ID
      updated: new Date().toISOString().slice(0, 10),
    };
    setIssues(prev => [newIssue, ...prev]);
  };

  // Find issue by ID
  const findIssue = id => issues.find(issue => issue.id === id);

  return (
    <IssueContext.Provider value={{ issues, addIssue, findIssue }}>
      {children}
    </IssueContext.Provider>
  );
};