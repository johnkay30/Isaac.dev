
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Footer from './components/Footer';
import ChatBot from './components/ChatBot';
import { EXPERIENCES, EDUCATION, CERTIFICATIONS, ISAAC_BIO } from './constants';
import { Award, BookOpen, CheckCircle2 } from 'lucide-react';

const App: React.FC = () => {
  return (
    <div className="min-h-screen relative overflow-x-hidden selection:bg-blue-500 selection:text-white">
      {/* Visual background details */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-[10%] left-[5%] w-[40vw] h-[40vw] bg-blue-500/5 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-[10%] right-[5%] w-[40vw] h-[40vw] bg-purple-500/5 rounded-full blur-[120px]"></div>
      </div>

      <div className="relative z-10">
        <Navbar />
        <main>
          <Hero />
          
          <section id="about" className="py-24">
            <div className="max-w-7xl mx-auto px-6">
              <div className="grid md:grid-cols-2 gap-16 items-center">
                <div className="relative">
                  <div className="aspect-[3/4] glass rounded-3xl overflow-hidden p-2 border-white/10 group shadow-2xl shadow-blue-500/10">
                    <img 
                      src="https://images.unsplash.com/photo-1552058544-f2b08422138a?q=80&w=800&auto=format&fit=crop" 
                      alt="Isaac Igbekele Idolor" 
                      className="w-full h-full object-cover rounded-2xl group-hover:scale-105 transition-transform duration-700"
                      style={{ objectPosition: 'center 20%' }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent pointer-events-none rounded-2xl"></div>
                  </div>
                  <div className="absolute -bottom-6 -right-6 glass p-6 rounded-2xl shadow-2xl border-white/10 backdrop-blur-xl">
                    <div className="text-3xl font-bold text-white">4+</div>
                    <div className="text-xs text-slate-500 font-bold uppercase tracking-widest">Years Experience</div>
                  </div>
                </div>
                
                <div className="flex flex-col gap-8">
                  <div>
                    <h2 className="text-4xl font-bold mb-6">IT Support & <span className="text-gradient">Infrastructure</span> Specialist</h2>
                    <div className="space-y-6 text-slate-400 text-lg leading-relaxed">
                      <p>{ISAAC_BIO}</p>
                      <p>
                        Based in Lagos, Nigeria, I've spent the last 4 years optimizing IT operations for energy companies, ensuring that critical technical systems remain online and secure 24/7. My dual expertise in infrastructure and data analysis allows me to not only maintain systems but also derive meaningful insights from them.
                      </p>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="glass p-5 rounded-2xl border-white/5 hover:border-blue-500/30 transition-colors">
                      <div className="w-10 h-10 bg-blue-500/10 rounded-xl flex items-center justify-center mb-4">
                        <Award className="w-5 h-5 text-blue-400" />
                      </div>
                      <h4 className="text-white font-bold mb-1">99.9% Uptime</h4>
                      <p className="text-xs text-slate-500">Maintained consistently across operational networks.</p>
                    </div>
                    <div className="glass p-5 rounded-2xl border-white/5 hover:border-purple-500/30 transition-colors">
                      <div className="w-10 h-10 bg-purple-500/10 rounded-xl flex items-center justify-center mb-4">
                        <CheckCircle2 className="w-5 h-5 text-purple-400" />
                      </div>
                      <h4 className="text-white font-bold mb-1">ITIL Standard</h4>
                      <p className="text-xs text-slate-500">Committed to best-in-class service management.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <Skills />
          <Projects />
          
          <section id="experience" className="py-24 bg-slate-900/50">
            <div className="max-w-7xl mx-auto px-6">
               <div className="mb-16">
                <h2 className="text-4xl font-bold mb-4">Professional <span className="text-gradient">Timeline</span></h2>
                <p className="text-slate-400 max-w-xl">Deep experience in energy sector IT operations and data modeling.</p>
              </div>

              <div className="grid lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2 space-y-8">
                  {EXPERIENCES.map((exp, i) => (
                    <div key={i} className="glass p-8 rounded-3xl border-white/5 relative group hover:bg-white/5 transition-all">
                      <div className="flex flex-col md:flex-row justify-between gap-4 mb-6">
                        <div>
                          <h3 className="text-2xl font-bold group-hover:text-blue-400 transition-colors">{exp.role}</h3>
                          <p className="text-slate-500 font-medium">{exp.company}</p>
                        </div>
                        <span className="px-4 py-1 glass rounded-full h-fit text-xs font-bold text-slate-400 border-white/10">{exp.period}</span>
                      </div>
                      <ul className="space-y-3">
                        {exp.description.map((task, j) => (
                          <li key={j} className="flex items-start gap-3 text-slate-400 text-sm">
                            <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-1.5 flex-shrink-0"></span>
                            {task}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>

                <div className="space-y-8">
                   <div className="glass p-8 rounded-3xl border-white/5">
                      <h3 className="text-xl font-bold mb-6 flex items-center gap-3">
                        <BookOpen className="w-5 h-5 text-blue-400" />
                        Education
                      </h3>
                      <div className="space-y-6">
                        {EDUCATION.map((edu, idx) => (
                          <div key={idx} className="border-l-2 border-blue-500/30 pl-4 py-1">
                            <h4 className="text-sm font-bold text-white">{edu.degree}</h4>
                            <p className="text-xs text-slate-500">{edu.institution}</p>
                            <p className="text-[10px] text-blue-400 font-bold mt-1">{edu.year}</p>
                          </div>
                        ))}
                      </div>
                   </div>

                   <div className="glass p-8 rounded-3xl border-white/5">
                      <h3 className="text-xl font-bold mb-6 flex items-center gap-3">
                        <Award className="w-5 h-5 text-purple-400" />
                        Certifications
                      </h3>
                      <div className="space-y-3">
                        {CERTIFICATIONS.map((cert, idx) => (
                          <div key={idx} className="flex items-start gap-2">
                             <CheckCircle2 className="w-3.5 h-3.5 text-green-500 mt-0.5 flex-shrink-0" />
                             <span className="text-xs text-slate-400">{cert}</span>
                          </div>
                        ))}
                      </div>
                   </div>
                </div>
              </div>
            </div>
          </section>
        </main>
        <Footer />
        <ChatBot />
      </div>
    </div>
  );
};

export default App;
