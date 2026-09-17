import React from 'react';

function FeesView() {
  return (
    <div className="p-3 bg-purple-50 rounded-lg border border-purple-200 mt-2 space-y-1">
      <p className="text-sm font-bold text-purple-900">Tuition Fee Status: <span className="text-emerald-700">Paid ₹45,000</span></p>
      <p className="text-xs text-purple-700">Pending Amount: ₹0 (No Dues)</p>
    </div>
  );
}

export default FeesView;
