
import React from 'react';
import { SOCIAL_LINKS } from '../constants';
import { Code2 } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer id="contact" className="py-20 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-8">Let's build something <span className="text-gradient">legendary</span> together.</h2>
            <p className="text-slate-400 text-lg mb-8 max-w-md">
              Whether you have a question or just want to say hi, my inbox is always open.
            </p>
            <div className="flex gap-4">
              {SOCIAL_LINKS.map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  className="w-12 h-12 glass rounded-2xl flex items-center justify-center text-slate-400 hover:text-white hover:bg-white/10 transition-all transform hover:-translate-y-1"
                  aria-label={link.name}
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>

          <div className="p-8 glass rounded-3xl border-white/5 h-fit">
            <h3 className="text-xl font-bold mb-6">Quick Contact</h3>
            <div className="space-y-4">
              <div className="p-4 bg-white/5 rounded-2xl border border-white/5">
                <p className="text-xs text-slate-500 uppercase font-bold tracking-widest mb-1">Email</p>
                <a href="mailto:isaacidolor@gmail.com" className="text-white hover:text-blue-400 transition-colors">isaacidolor@gmail.com</a>
              </div>
              <div className="p-4 bg-white/5 rounded-2xl border border-white/5">
                <p className="text-xs text-slate-500 uppercase font-bold tracking-widest mb-1">Location</p>
                <p className="text-white">Lagos, Nigeria (GMT+1)</p>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2">
             <div className="p-1.5 bg-blue-600 rounded-lg">
                <Code2 className="w-4 h-4 text-white" />
              </div>
              <span className="text-sm font-bold text-slate-200">Isaac.dev</span>
          </div>
          <p className="text-sm text-slate-500">
            © {new Date().getFullYear()} Isaac Idolor. Crafted with passion and code.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
