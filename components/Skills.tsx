
import React from 'react';
import { SKILLS } from '../constants';
import { ResponsiveContainer, RadarChart, PolarGrid, PolarAngleAxis, Radar } from 'recharts';

const Skills: React.FC = () => {
  const chartData = SKILLS.slice(0, 6).map(s => ({
    subject: s.name,
    A: s.level,
    fullMark: 100,
  }));

  return (
    <section id="skills" className="py-24 bg-slate-900/50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16">
          <h2 className="text-4xl font-bold mb-4">Technical <span className="text-gradient">Arsenal</span></h2>
          <p className="text-slate-400 max-w-xl">My toolkit is built on modern web standards and industry-leading technologies.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="grid grid-cols-2 gap-4">
            {SKILLS.map((skill) => (
              <div key={skill.name} className="p-6 glass rounded-2xl hover:bg-white/5 transition-all group border-white/5">
                <div className="flex justify-between items-center mb-4">
                  <span className="font-semibold text-slate-200">{skill.name}</span>
                  <span className="text-xs text-slate-500 group-hover:text-blue-400 transition-colors">{skill.level}%</span>
                </div>
                <div className="h-1.5 w-full bg-slate-800 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-blue-600 rounded-full group-hover:bg-blue-400 transition-all duration-1000"
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>

          <div className="h-[400px] glass rounded-3xl p-8 border-white/5 flex flex-col items-center justify-center">
             <h3 className="text-sm font-semibold text-slate-500 uppercase tracking-widest mb-4">Focus Areas</h3>
             <div className="w-full h-full min-h-[300px]">
                <ResponsiveContainer width="100%" height="100%">
                  <RadarChart cx="50%" cy="50%" outerRadius="80%" data={chartData}>
                    <PolarGrid stroke="#334155" />
                    <PolarAngleAxis dataKey="subject" tick={{ fill: '#94a3b8', fontSize: 12 }} />
                    <Radar
                      name="Isaac"
                      dataKey="A"
                      stroke="#3b82f6"
                      fill="#3b82f6"
                      fillOpacity={0.6}
                    />
                  </RadarChart>
                </ResponsiveContainer>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
