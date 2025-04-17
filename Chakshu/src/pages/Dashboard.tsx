import React from 'react';
import { Shield, AlertCircle, CheckCircle, Activity } from 'lucide-react';

const Dashboard = () => {
  return (
    <div className="pt-24 min-h-screen bg-gradient-to-b from-blue-50 to-cyan-50">
      <div className="container mx-auto px-4">
        <div className="glass-card rounded-2xl p-8 mb-8">
          <h1 className="text-3xl font-bold text-blue-900 mb-6">Security Dashboard</h1>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="glass-card p-6 rounded-xl">
              <Shield className="w-8 h-8 text-green-500 mb-2" />
              <h3 className="text-lg font-semibold text-blue-900">Protection Status</h3>
              <p className="text-green-600">Active</p>
            </div>
            
            <div className="glass-card p-6 rounded-xl">
              <AlertCircle className="w-8 h-8 text-yellow-500 mb-2" />
              <h3 className="text-lg font-semibold text-blue-900">Threats Detected</h3>
              <p className="text-yellow-600">3 Today</p>
            </div>
            
            <div className="glass-card p-6 rounded-xl">
              <CheckCircle className="w-8 h-8 text-blue-500 mb-2" />
              <h3 className="text-lg font-semibold text-blue-900">Scans Completed</h3>
              <p className="text-blue-600">247</p>
            </div>
            
            <div className="glass-card p-6 rounded-xl">
              <Activity className="w-8 h-8 text-purple-500 mb-2" />
              <h3 className="text-lg font-semibold text-blue-900">System Health</h3>
              <p className="text-purple-600">Optimal</p>
            </div>
          </div>
        </div>
        
        <div className="glass-card rounded-2xl p-8">
          <h2 className="text-2xl font-bold text-blue-900 mb-6">Recent Activity</h2>
          <div className="space-y-4">
            {[
              { type: 'Phishing Attempt', status: 'Blocked', time: '2 minutes ago' },
              { type: 'Suspicious Login', status: 'Warned', time: '1 hour ago' },
              { type: 'Malicious URL', status: 'Blocked', time: '3 hours ago' }
            ].map((activity, index) => (
              <div key={index} className="flex items-center justify-between p-4 bg-white rounded-lg">
                <div>
                  <h4 className="font-semibold text-blue-900">{activity.type}</h4>
                  <p className="text-sm text-blue-600">{activity.time}</p>
                </div>
                <span className={`px-3 py-1 rounded-full text-sm ${
                  activity.status === 'Blocked' ? 'bg-red-100 text-red-600' : 'bg-yellow-100 text-yellow-600'
                }`}>
                  {activity.status}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;