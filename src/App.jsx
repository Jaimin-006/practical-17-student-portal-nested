import React, { useState, useEffect } from 'react';

function App() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((res) => {
        if (!res.ok) throw new Error('Network response failed');
        return res.json();
      })
      .then((data) => {
        setUsers(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  return (
    <div className="min-h-screen bg-slate-50 p-8 font-sans">
      <div className="max-w-5xl mx-auto">
        <div className="mb-6">
          <h1 className="text-2xl font-bold text-slate-900">Student & Member Directory (API Read Operation)</h1>
          <p className="text-xs text-slate-500 mt-1">
            Retrieved asynchronously via <code className="text-indigo-600 bg-indigo-50 px-1 py-0.5 rounded font-mono">fetch()</code> and mapped into React components.
          </p>
        </div>

        {loading && (
          <div className="p-8 text-center text-sm font-semibold text-slate-500 animate-pulse">
            Loading student records from remote API...
          </div>
        )}

        {error && (
          <div className="p-4 bg-rose-50 border border-rose-200 text-rose-700 rounded-lg text-sm">
            Failed to load data: {error}
          </div>
        )}

        {!loading && !error && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {users.map((user) => (
              <div
                key={user.id}
                className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition space-y-2"
              >
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 rounded-full bg-indigo-100 text-indigo-700 font-bold flex items-center justify-center text-sm">
                    {user.name.charAt(0)}
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 text-sm">{user.name}</h3>
                    <p className="text-xs text-slate-400 font-mono">Roll: #{user.id + 100}</p>
                  </div>
                </div>

                <div className="pt-2 border-t border-slate-100 text-xs space-y-1 text-slate-600">
                  <p><span className="font-semibold text-slate-700">Email:</span> {user.email.toLowerCase()}</p>
                  <p><span className="font-semibold text-slate-700">City:</span> {user.address.city}</p>
                  <p><span className="font-semibold text-slate-700">Company:</span> {user.company.name}</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
