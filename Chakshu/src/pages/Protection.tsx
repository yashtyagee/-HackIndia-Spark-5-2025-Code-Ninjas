import React, { useState, useEffect } from 'react';
import { Shield, Lock, Smartphone, Globe, Loader2, CheckCircle, XCircle, AlertTriangle } from 'lucide-react';
import { motion } from 'framer-motion';

const Protection = () => {
  const [scanning, setScanning] = useState(false);
  const [progress, setProgress] = useState(0);
  const [scanResults, setScanResults] = useState<{
    threats: number;
    scanned: number;
    completed: boolean;
  }>({
    threats: 0,
    scanned: 0,
    completed: false
  });

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (scanning && progress < 100) {
      interval = setInterval(() => {
        setProgress(prev => {
          const next = prev + 1;
          if (next >= 100) {
            setScanning(false);
            setScanResults({
              threats: Math.floor(Math.random() * 3),
              scanned: 1547,
              completed: true
            });
          }
          return next;
        });
      }, 50);
    }
    return () => clearInterval(interval);
  }, [scanning, progress]);

  const startScan = () => {
    setScanning(true);
    setProgress(0);
    setScanResults({
      threats: 0,
      scanned: 0,
      completed: false
    });
  };

  return (
    <div className="pt-24 min-h-screen bg-gradient-to-b from-blue-50 to-cyan-50">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl font-bold text-blue-900 mb-4">Complete Digital Protection</h1>
          <p className="text-xl text-blue-700">Secure your digital life with our comprehensive protection suite</p>
        </motion.div>

        {/* Scan Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="glass-card p-8 rounded-2xl mb-16"
        >
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-blue-900 mb-2">Device Security Scan</h2>
            <p className="text-blue-700">Scan your device for potential security threats</p>
          </div>

          <div className="max-w-2xl mx-auto">
            {!scanning && !scanResults.completed && (
              <button
                onClick={startScan}
                className="w-full bg-blue-500 text-white py-4 rounded-lg font-semibold hover:bg-blue-600 transition-colors flex items-center justify-center space-x-2"
              >
                <Shield className="w-5 h-5" />
                <span>Start Security Scan</span>
              </button>
            )}

            {scanning && (
              <div>
                <div className="flex items-center justify-center mb-4">
                  <Loader2 className="w-8 h-8 text-blue-500 animate-spin" />
                </div>
                <div className="h-2 bg-blue-100 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-blue-500 transition-all duration-300"
                    style={{ width: `${progress}%` }}
                  />
                </div>
                <p className="text-center mt-4 text-blue-700">
                  Scanning system files... {progress}%
                </p>
              </div>
            )}

            {scanResults.completed && (
              <div className="space-y-6">
                <div className="flex items-center justify-center space-x-8">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-blue-900 mb-2">{scanResults.scanned}</div>
                    <div className="text-blue-700">Files Scanned</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-blue-900 mb-2">{scanResults.threats}</div>
                    <div className="text-blue-700">Threats Found</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-green-600 mb-2">99.9%</div>
                    <div className="text-blue-700">Detection Rate</div>
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center justify-between p-4 bg-white rounded-lg">
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-500" />
                      <span className="text-blue-900">Malware Protection</span>
                    </div>
                    <span className="text-green-600">Protected</span>
                  </div>
                  <div className="flex items-center justify-between p-4 bg-white rounded-lg">
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-500" />
                      <span className="text-blue-900">Firewall Status</span>
                    </div>
                    <span className="text-green-600">Active</span>
                  </div>
                  {scanResults.threats > 0 && (
                    <div className="flex items-center justify-between p-4 bg-red-50 rounded-lg">
                      <div className="flex items-center space-x-3">
                        <AlertTriangle className="w-5 h-5 text-red-500" />
                        <span className="text-red-900">Security Threats</span>
                      </div>
                      <span className="text-red-600">{scanResults.threats} Found</span>
                    </div>
                  )}
                </div>

                <button
                  onClick={startScan}
                  className="w-full bg-blue-500 text-white py-3 rounded-lg font-semibold hover:bg-blue-600 transition-colors"
                >
                  Scan Again
                </button>
              </div>
            )}
          </div>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {[
            {
              icon: Shield,
              title: 'Real-time Threat Detection',
              description: 'AI-powered system that identifies and blocks threats instantly',
              features: ['Phishing Protection', 'Malware Scanning', 'Fraud Detection']
            },
            {
              icon: Lock,
              title: 'Advanced Privacy Guard',
              description: 'Keep your personal information safe from data breaches',
              features: ['Data Encryption', 'Identity Protection', 'Secure Browsing']
            },
            {
              icon: Smartphone,
              title: 'Mobile Security',
              description: 'Protect your smartphone from mobile-specific threats',
              features: ['App Security', 'SMS Protection', 'Call Screening']
            },
            {
              icon: Globe,
              title: 'Web Protection',
              description: 'Safe browsing experience across all websites',
              features: ['URL Filtering', 'Safe Downloads', 'Ad Blocking']
            }
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="glass-card p-8 rounded-2xl"
            >
              <item.icon className="w-12 h-12 text-blue-500 mb-4" />
              <h2 className="text-2xl font-bold text-blue-900 mb-2">{item.title}</h2>
              <p className="text-blue-700 mb-4">{item.description}</p>
              <ul className="space-y-2">
                {item.features.map((feature, fIndex) => (
                  <li key={fIndex} className="flex items-center text-blue-600">
                    <Shield className="w-4 h-4 mr-2" />
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Protection;