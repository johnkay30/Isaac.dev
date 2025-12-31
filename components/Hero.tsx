
import React from 'react';
import { ArrowRight, ChevronRight, Activity, Server, Shield } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
      {/* Background Orbs */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px] -mr-64 -mt-64"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[120px] -ml-64 -mb-64"></div>

      <div className="max-w-7xl mx-auto px-6 relative">
        <div className="flex flex-col items-center text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold mb-8 uppercase tracking-wider animate-pulse">
            <span className="w-2 h-2 rounded-full bg-blue-500"></span>
            IT Site Support & Infrastructure Specialist
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tight mb-8 leading-[1.1]">
            Optimizing <span className="text-gradient">Infrastructure</span> <br />
            Empowering Data
          </h1>

          <p className="max-w-2xl text-lg md:text-xl text-slate-400 leading-relaxed mb-12">
            I'm <b>Isaac Igbekele Idolor</b>, managing robust IT systems and transforming complex data into actionable business intelligence for high-stakes operational environments.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#projects"
              className="px-8 py-4 bg-white text-slate-950 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-slate-200 transition-all transform hover:-translate-y-1 shadow-xl shadow-white/5"
            >
              View Achievements
              <ArrowRight className="w-5 h-5" />
            </a>
            <a
              href="#contact"
              className="px-8 py-4 glass border-white/10 text-white rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-white/10 transition-all transform hover:-translate-y-1"
            >
              Get In Touch
              <ChevronRight className="w-5 h-5" />
            </a>
          </div>
        </div>

        {/* Stats / Tech Tags */}
        <div className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
          {[
            { label: 'Uptime', val: '99.9%', icon: <Activity className="w-4 h-4 text-blue-400" /> },
            { label: 'Users Supported', val: '100+', icon: <Shield className="w-4 h-4 text-purple-400" /> },
            { label: 'Energy Sector', val: '4+ Years', icon: <Server className="w-4 h-4 text-blue-400" /> },
            { label: 'Data Analysis', val: 'Expert', icon: <Activity className="w-4 h-4 text-purple-400" /> },
          ].map((stat, i) => (
            <div key={i} className="p-6 glass rounded-2xl text-center border-white/5 relative group overflow-hidden">
              <div className="absolute top-2 right-2 opacity-20 group-hover:opacity-40 transition-opacity">
                {stat.icon}
              </div>
              <div className="text-slate-500 text-xs font-medium uppercase tracking-widest mb-1">{stat.label}</div>
              <div className="text-white text-xl font-bold">{stat.val}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
