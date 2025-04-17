import React from 'react';
import { Link } from 'react-router-dom';
import { Eye, Shield, Bell, Brain, ChevronRight, Users, BarChart3 } from 'lucide-react';
import { motion } from 'framer-motion';

const Home = () => {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="min-h-screen hero-pattern relative flex items-center">
        <div className="container mx-auto px-4 py-20">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="md:w-1/2 text-center md:text-left"
            >
              <div className="mb-8 relative inline-block">
                <Eye className="w-20 h-20 text-blue-500 floating" />
                <div className="absolute inset-0 bg-blue-300 blur-2xl opacity-20"></div>
              </div>
              
              <h1 className="text-6xl font-bold mb-6 text-blue-900">
                <span className="hindi-text">चक्षु</span>
                <span className="block text-3xl mt-4">Your Digital Guardian</span>
              </h1>
              <p className="text-xl mb-8 text-blue-700">Protecting you from digital threats with AI-powered vigilance</p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                <Link to="/protection" className="bg-blue-500 text-white px-8 py-3 rounded-full hover:bg-blue-600 transition-colors">
                  Get Protected Now
                </Link>
                <Link to="/dashboard" className="border-2 border-blue-500 text-blue-500 px-8 py-3 rounded-full hover:bg-blue-50 transition-colors">
                  View Dashboard Demo
                </Link>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              className="md:w-1/2 mt-12 md:mt-0"
            >
              <img 
                src="https://images.unsplash.com/photo-1633265486064-086b219458ec?w=800&auto=format&fit=crop&q=80"
                alt="AI Security"
                className="rounded-2xl shadow-2xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* How it Works Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16 text-blue-900">How Chakshu Works</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { icon: Eye, title: 'Watch', desc: 'Monitors all digital interactions' },
              { icon: Shield, title: 'Detect', desc: 'AI identifies potential threats' },
              { icon: Bell, title: 'Alert', desc: 'Real-time warning system' },
              { icon: Brain, title: 'Learn', desc: 'Adapts to new threat patterns' }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="glass-card p-6 rounded-xl hover:shadow-lg transition-all cursor-pointer group"
              >
                <item.icon className="w-12 h-12 text-blue-500 mb-4 group-hover:text-blue-600 transition-colors" />
                <h3 className="text-xl font-bold mb-2 text-blue-900">{item.title}</h3>
                <p className="text-blue-700">{item.desc}</p>
                <ChevronRight className="w-5 h-5 mt-4 text-blue-500 opacity-0 group-hover:opacity-100 transition-opacity" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 gradient-bg">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            {[
              { icon: Shield, value: '1M+', label: 'Threats Blocked' },
              { icon: Users, value: '500K+', label: 'Protected Users' },
              { icon: BarChart3, value: '99.9%', label: 'Accuracy Rate' }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                className="glass-card p-8 rounded-2xl"
              >
                <stat.icon className="w-12 h-12 mx-auto mb-4 text-blue-500" />
                <div className="text-4xl font-bold mb-2 text-blue-900">{stat.value}</div>
                <div className="text-blue-700">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;