import React from 'react';
import { Link, Outlet } from 'react-router-dom';

function StudentProfile() {
  return (
    <div className="p-6 max-w-lg mx-auto bg-white rounded-lg shadow-sm border border-violet-200">
      <h2 className="text-2xl font-bold font-serif text-violet-900 mb-1">Student Portal: Jaiminpuri Bava</h2>
      <p className="text-xs text-violet-600 font-semibold mb-4">Roll No: BCA-2026-45</p>
      
      <div className="flex space-x-4 border-b border-violet-100 pb-2 mb-4">
        <Link to="marks" className="text-sm text-violet-700 hover:text-violet-900 hover:underline font-semibold">
          View Marks
        </Link>
        <span className="text-violet-300">|</span>
        <Link to="attendance" className="text-sm text-violet-700 hover:text-violet-900 hover:underline font-semibold">
          View Attendance
        </Link>
      </div>
      
      <Outlet />
    </div>
  );
}

export default StudentProfile;
