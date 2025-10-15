import React from 'react';
import { useIssues } from '../../context/IssueContext';

const statusColor = status =>
  status === 'Resolved'
    ? 'bg-green-700'
    : status === 'Active'
    ? 'bg-red-700'
    : 'bg-yellow-700';

const RecentReports = () => {
  const { issues } = useIssues();

  return (
    <section className="max-w-2xl w-full mt-4">
      <h2 className="text-xl font-bold text-blue-200 mb-4">Recent Reports</h2>
      <div className="space-y-4">
        {issues.slice(0, 5).map(report => (
          <div
            key={report.id}
            className={`flex items-center justify-between bg-gray-800/80 rounded-lg p-4 shadow`}
          >
            <div>
              <p className="font-semibold text-blue-300">{report.category}</p>
              <p className="text-gray-300 text-sm">ID: {report.id}</p>
            </div>
            <div className="flex items-center gap-2">
              <span
                className={`px-3 py-1 rounded-full text-xs font-semibold ${statusColor(
                  report.status
                )} text-white`}
              >
                {report.status}
              </span>
              <span className="text-gray-400 text-xs">{report.updated}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default RecentReports;