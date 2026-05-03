import React from 'react';

const Experience = () => {
  const expList = [
    { 
      year: 'Jan 2026 - Feb 2026', 
      role: 'Fullstack Developer Intern', 
      company: 'Argenesia (PT. ARG Solusi Teknologi)', 
      desc: 'Developed and maintained full-stack web applications, contributing to frontend interfaces and backend APIs during a 2-month internship program.' 
    },
    { 
      year: '2024 - Present', 
      role: 'Backend Engineer', 
      company: 'UKM Neo Telemetri', 
      desc: 'Responsible for designing, developing, and maintaining scalable backend systems and databases for the organization\'s internal and external applications.' 
    }
  ];

  return (
    <section className="border-b-4 border-ink flex flex-col md:flex-row bg-paper" id="experience" data-testid="experience-section">
      <div className="w-full md:w-1/3 p-6 md:p-12 border-b-4 md:border-b-0 md:border-r-4 border-ink flex items-center md:items-start justify-center md:justify-start">
        <h2 className="text-5xl sm:text-6xl md:text-7xl font-black uppercase tracking-tighter leading-none md:sticky md:top-12 text-center md:text-left text-ink">
          Work <br className="hidden md:block" /> History
        </h2>
      </div>

      <div className="w-full md:w-2/3 flex flex-col">
        {expList.map((exp, idx) => (
          <div key={idx} className="p-6 md:p-16 border-b-4 last:border-b-0 border-ink hover:bg-ink hover:text-paper transition-colors duration-300 group cursor-default text-ink bg-paper">
            <time className="text-lg md:text-2xl font-black uppercase border-4 border-ink group-hover:border-paper px-4 py-1 md:px-6 md:py-2 inline-block mb-6 md:mb-8 bg-paper group-hover:bg-vermillion group-hover:text-paper transition-colors">
              {exp.year}
            </time>
            <h3 className="text-3xl md:text-5xl font-black uppercase mb-3 md:mb-4 group-hover:text-vermillion tracking-tight">{exp.role}</h3>
            <span className="text-xl md:text-3xl font-bold block mb-6 md:mb-8 text-ink/60 group-hover:text-paper/80">{exp.company}</span>
            <p className="text-lg md:text-2xl font-medium max-w-3xl leading-relaxed">{exp.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
