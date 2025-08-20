import React from 'react';
import { FilePlus, XCircle, ShieldCheck, Loader2, UserCog } from 'lucide-react';

const Dashboard = () => {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="text-2xl font-bold text-gray-700">WCAMAN Dashboard</div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white p-4 shadow rounded-xl flex items-center gap-4">
          <FilePlus className="text-green-600" />
          <div>
            <p className="text-sm text-gray-500">Issued Certificates</p>
            <p className="text-xl font-semibold">128</p>
          </div>
        </div>
        <div className="bg-white p-4 shadow rounded-xl flex items-center gap-4">
          <XCircle className="text-red-600" />
          <div>
            <p className="text-sm text-gray-500">Revoked Certificates</p>
            <p className="text-xl font-semibold">14</p>
          </div>
        </div>
        <div className="bg-white p-4 shadow rounded-xl flex items-center gap-4">
          <Loader2 className="text-yellow-500 animate-spin" />
          <div>
            <p className="text-sm text-gray-500">Pending Requests</p>
            <p className="text-xl font-semibold">6</p>
          </div>
        </div>
        <div className="bg-white p-4 shadow rounded-xl flex items-center gap-4">
          <ShieldCheck className="text-blue-600" />
          <div>
            <p className="text-sm text-gray-500">System Uptime</p>
            <p className="text-xl font-semibold">99.9%</p>
          </div>
        </div>
      </div>

      {/* Admin Actions */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Issue Certificate */}
        <div className="bg-white p-6 shadow rounded-xl" style={{ maxHeight: '700px', overflowY: 'auto' }}>
          <h3 className="text-lg font-semibold mb-4">Issue New Certificate</h3>
          <form className="space-y-4">
            <input
              type="text"
              placeholder="User ID"
              className="w-full border focus:outline-gray-900 rounded px-3 py-2"
            />
            <input
              type="text"
              placeholder="Certificate Title"
              className="w-full border focus:outline-gray-900 rounded px-3 py-2"
            />
            <button
              type="submit"
              className="bg-gray-700 hover:bg-gray-800 text-white px-4 py-2 rounded"
            >
              Issue Certificate
            </button>
          </form>
        </div>

        {/* Revoke Certificate */}
        <div className="bg-white p-6 shadow rounded-xl">
          <h3 className="text-lg font-semibold mb-4">Revoke Certificate</h3>
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Certificate ID"
              className="w-full border focus:outline-gray-900 rounded px-3 py-2"
            />
            <button
              type="submit"
              className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded"
            >
              Revoke Certificate
            </button>
          </form>
        </div>
      </div>

      {/* Progress & Admin Panel */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Progress */}
        <div className="bg-white p-6 shadow rounded-xl">
          <h3 className="text-lg font-semibold mb-4">Certificate Completion</h3>
          <div className="w-full bg-gray-200 rounded-full h-4">
            <div
              className="bg-gray-700 h-4 rounded-full"
              style={{ width: '78%' }}
            ></div>
          </div>
          <p className="text-sm mt-2 text-right">78% Completed</p>
        </div>

        {/* Admin Panel Info */}
        <div className="bg-white p-6 shadow rounded-xl flex items-center gap-4">
          <UserCog className="text-gray-800" size={40} />
          <div>
            <h3 className="text-lg font-semibold">Admin Panel Access</h3>
            <p className="text-sm text-gray-500">Manage system users, roles, and access control.</p>
          </div>
        </div>
      </div>

      {/* Activity Table */}
      <div className="bg-white p-6 shadow rounded-xl">
        <h3 className="text-lg font-semibold mb-4">Recent Activity</h3>
        <table className="w-full text-sm text-left">
          <thead>
            <tr className="text-gray-600 border-b">
              <th className="py-2">User</th>
              <th className="py-2">Action</th>
              <th className="py-2">Certificate</th>
              <th className="py-2">Date</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b">
              <td className="py-2">Falak</td>
              <td className="py-2 text-green-600 font-medium">Issued</td>
              <td className="py-2">Digital Security</td>
              <td className="py-2">July 20, 2025</td>
            </tr>
            <tr className="border-b">
              <td className="py-2">Admin</td>
              <td className="py-2 text-red-600 font-medium">Revoked</td>
              <td className="py-2">SSL Auth</td>
              <td className="py-2">July 18, 2025</td>
            </tr>
            <tr>
              <td className="py-2">Student01</td>
              <td className="py-2 text-yellow-600 font-medium">Pending</td>
              <td className="py-2">Course Completion</td>
              <td className="py-2">July 16, 2025</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Dashboard;
