import React from 'react';
import { 
  SiDocker, 
  SiExpress, 
  SiReact, 
  SiMysql, 
  SiPostgresql, 
  SiPhp, 
  SiLaravel, 
  SiCplusplus, 
  SiPython 
} from 'react-icons/si';

const About = () => {
  const originalSkills = [
    { icon: <SiDocker className="w-8 h-8 md:w-12 md:h-12" />, name: 'Docker' },
    { icon: <SiExpress className="w-8 h-8 md:w-12 md:h-12" />, name: 'Express.js' },
    { icon: <SiReact className="w-8 h-8 md:w-12 md:h-12" />, name: 'React' },
    { icon: <SiMysql className="w-8 h-8 md:w-12 md:h-12" />, name: 'MySQL' },
    { icon: <SiPostgresql className="w-8 h-8 md:w-12 md:h-12" />, name: 'PostgreSQL' },
    { icon: <SiPhp className="w-8 h-8 md:w-12 md:h-12" />, name: 'PHP' },
    { icon: <SiLaravel className="w-8 h-8 md:w-12 md:h-12" />, name: 'Laravel' },
    { icon: <SiCplusplus className="w-8 h-8 md:w-12 md:h-12" />, name: 'C++' },
    { icon: <SiPython className="w-8 h-8 md:w-12 md:h-12" />, name: 'Python' },
  ];

  const skills = [...originalSkills, ...originalSkills, ...originalSkills];

  return (
    <section className="border-b-4 border-ink overflow-hidden bg-ink text-paper py-12 md:py-16" id="about" data-testid="about-section">
      <div className="px-4 md:px-12 mb-6 md:mb-8">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-black uppercase tracking-widest text-vermillion">Tech Arsenal & Expertise</h2>
      </div>
      <div className="w-full flex overflow-hidden py-6 md:py-8">
        <div className="flex animate-marquee whitespace-nowrap items-center">
          {skills.map((skill, index) => (
            <div key={index} className="flex items-center justify-center mx-6 md:mx-8 gap-4 md:gap-6 group cursor-default">
              <div className="text-paper group-hover:text-vermillion transition-colors duration-300">
                {skill.icon}
              </div>
              <h3 className="text-2xl sm:text-3xl md:text-5xl font-black uppercase tracking-tighter text-paper group-hover:text-vermillion transition-colors">
                {skill.name}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
