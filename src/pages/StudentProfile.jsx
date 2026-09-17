import React from 'react';
import { Link, Outlet } from 'react-router-dom';

function StudentProfile() {
  return (
    <div className="p-6 max-w-lg mx-auto bg-white rounded-xl shadow-md border border-purple-200/80">
      <div className="border-b border-purple-100 pb-3 mb-4">
        <h2 className="text-2xl font-bold bg-gradient-to-r from-purple-700 to-indigo-600 bg-clip-text text-transparent">
          Student Portal: Jaiminpuri Bava
        </h2>
        <p className="text-xs text-purple-600 font-semibold mt-1">Roll No: BCA-2026-45</p>
      </div>
      
      <div className="flex space-x-4 border-b border-purple-100 pb-2 mb-4">
        <Link to="marks" className="text-sm text-purple-700 hover:text-purple-900 font-semibold border-b-2 border-transparent hover:border-purple-600 transition pb-1">
          View Marks
        </Link>
        <span className="text-purple-300">|</span>
        <Link to="attendance" className="text-sm text-purple-700 hover:text-purple-900 font-semibold border-b-2 border-transparent hover:border-purple-600 transition pb-1">
          View Attendance
        </Link>
        <span className="text-purple-300">|</span>
        <Link to="fees" className="text-sm text-purple-700 hover:text-purple-900 font-semibold border-b-2 border-transparent hover:border-purple-600 transition pb-1">
          View Fees
        </Link>
      </div>
      
      <Outlet />
    </div>
  );
}

export default StudentProfile;
