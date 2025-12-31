
import React from 'react';
import { Project, Skill, Experience } from './types';
import { 
  Github, 
  Linkedin, 
  Twitter, 
  Mail, 
  Phone,
  Code2, 
  Database, 
  Server, 
  Activity 
} from 'lucide-react';

export const SOCIAL_LINKS = [
  { name: 'LinkedIn', url: 'https://www.linkedin.com/in/idolors', icon: <Linkedin className="w-5 h-5" /> },
  { name: 'Email', url: 'mailto:idolorisaac@gmail.com', icon: <Mail className="w-5 h-5" /> },
  { name: 'Phone', url: 'tel:07041609977', icon: <Phone className="w-5 h-5" /> },
];

export const PROJECTS: Project[] = [
  {
    id: '1',
    title: 'Automated Financial Reporting',
    description: 'Developed and automated monthly financial and operational reports using Python and SQL, reducing manual effort by 30%.',
    image: 'https://images.unsplash.com/photo-1551288049-bbda38a5f85d?auto=format&fit=crop&q=80&w=800',
    tags: ['Python', 'SQL', 'Automation', 'Data Analysis'],
    link: '#',
  },
  {
    id: '2',
    title: 'IT Infrastructure Monitoring',
    description: 'Implementation of proactive monitoring systems to maintain 99.9% network uptime for over 100 users.',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80&w=800',
    tags: ['Network Admin', 'Infrastructure', 'Security'],
    link: '#',
  },
  {
    id: '3',
    title: 'Data Visualization Dashboard',
    description: 'Interactive business intelligence dashboards created using Tableau and Google Data Studio for management decision-making.',
    image: 'https://images.unsplash.com/photo-1543286386-713bdd548da4?auto=format&fit=crop&q=80&w=800',
    tags: ['Tableau', 'Power BI', 'Data Studio'],
    link: '#',
  }
];

export const SKILLS: Skill[] = [
  { name: 'Python', level: 90, category: 'backend' },
  { name: 'SQL', level: 85, category: 'backend' },
  { name: 'JavaScript', level: 80, category: 'frontend' },
  { name: 'Data Analysis', level: 95, category: 'other' },
  { name: 'Network Admin', level: 85, category: 'tools' },
  { name: 'IT Infrastructure', level: 90, category: 'tools' },
  { name: 'Tableau/Power BI', level: 88, category: 'other' },
  { name: 'ERP Support', level: 85, category: 'other' },
];

export const EXPERIENCES: Experience[] = [
  {
    company: 'Cornerstone Energy Limited',
    role: 'ICT & Data Analyst',
    period: 'Feb 2024 - Present',
    description: [
      'Provide frontline IT support to over 100 users, resolving hardware, software, and network incidents.',
      'Manage and monitor IT infrastructure ensuring system availability and security.',
      'Maintain 99.9% network uptime through proactive monitoring and troubleshooting.',
      'Implement data backup and disaster recovery procedures.'
    ]
  },
  {
    company: 'Sokonu Energy Limited',
    role: 'Web & Data Developer',
    period: 'Jan 2020 - May 2022',
    description: [
      'Implemented responsive UI components and resolved system bugs.',
      'Developed automated monthly financial and operational reports using Python and SQL.',
      'Provided analytical support for evaluating production trends.',
      'Contributed to technical documentation and reporting frameworks.'
    ]
  },
  {
    company: 'Heritage Energy (HEOSL)',
    role: 'ICT Support (SIWES)',
    period: 'Jun 2019 - Jan 2020',
    description: [
      'Assisted IT department in maintaining systems across production and administrative units.',
      'Supported data entry, backup, and documentation processes.',
      'Monitored network and system uptime to aid operational efficiency.'
    ]
  }
];

export const EDUCATION = [
  {
    degree: 'B.Sc. Computer Science',
    institution: 'Federal University of Petroleum Resources',
    year: '2021'
  },
  {
    degree: 'Design, Monitoring & Evaluation for Programming',
    institution: 'United States Institute of Peace',
    year: '2020'
  }
];

export const CERTIFICATIONS = [
  'Data Analysis with Pandas (Python) – Udemy',
  'Microsoft Excel Pivot Tables & Formulas – Udemy',
  'Digital Marketing Fundamentals – Google Garage',
  'Project Management (PMI CAPM Track) – PMI',
  'IMS of ISO 9001:2015 Awareness Training',
  'Documentation Training – D’ARK GLOBAL RESOURCES'
];

export const ISAAC_BIO = `
Isaac Igbekele Idolor is an IT Site Support and Infrastructure expert with over 4 years of experience providing frontline technical support, managing IT infrastructure, and ensuring system availability in operational environments. Skilled in incident management, hardware/software troubleshooting, network administration, ERP support, and data analysis aligned with ITIL best practices.
`;
