import React from 'react';
import Swal from 'sweetalert2';
import { ExternalLink, Terminal } from 'lucide-react';
import paymentImg from '../../assets/project_payment.png';
import authImg from '../../assets/project_auth.png';
import pipelineImg from '../../assets/project_pipeline.png';
import projectImg from '../../assets/image copy.png';
import projectImg2 from '../../assets/pkm.png';
import bakti from '../../assets/bakti.png';
import arge from '../../assets/arge.png';
import queen from '../../assets/queen.png';

const Projects = () => {
  const projectList = [
    { 
      title: 'ResLab RFID', 
      desc: 'Sistem manajemen laboratorium berbasis web menggunakan RFID dengan deployment Docker.', 
      tech: ['JavaScript', 'PHP', 'Docker'],
      img: projectImg,
      codeLink: 'https://github.com/rapipn02/web_rfid_reslab',
      liveLink: 'https://webabsensireslab.queensporthall.online/'
    },
    { 
      title: 'Portal PKM Terintegrasi', 
      desc: 'Sistem Manajemen Program Kreativitas Mahasiswa (PKM) Universitas Andalas yang modern dan akuntabel.', 
      tech: ['Laravel', 'Livewire', 'Tailwind', 'Docker'],
      img: projectImg2,
      codeLink: '#',
      liveLink: 'https://pkm.unand.ac.id/',
      isPrivate: true
    },
    { 
      title: 'BAKTI UNAND 2025', 
      desc: 'Website portal resmi untuk kegiatan BAKTI Universitas Andalas 2025.', 
      tech: ['Laravel', 'Tailwind CSS', 'MySQL'],
      img: bakti,
      codeLink: 'https://github.com/rapipn02/bakti2025unand',
      liveLink: 'https://bakti.unand.ac.id/'
 
    },
    { 
      title: 'ArgeFlow', 
      desc: 'Aplikasi manajemen alur kerja (workflow) dan otomatisasi proses bisnis.', 
      tech: ['JavaScript', 'Node.js', 'React'],
      img: arge,
      codeLink: 'https://github.com/rapipn02/ArgeFlow',
      liveLink: '#'
    },
    { 
      title: 'QueenSport Hall', 
      desc: 'Platform aplikasi web terpadu untuk keperluan dan manajemen olahraga.', 
      tech: ['JavaScript', 'Express', 'MySQL'],
      img: queen,
      codeLink: 'https://github.com/rapipn02/queenSport',
      liveLink: '#'
    },
  ];

  return (
    <section className="border-b-4 border-ink bg-paper" id="projects" data-testid="projects-section">
      <div className="grid grid-cols-1 lg:grid-cols-4">
        
        {/* Title sidebar */}
        <div className="lg:col-span-1 p-6 md:p-12 border-b-4 lg:border-b-0 lg:border-r-4 border-ink flex items-center justify-center bg-vermillion">
          <h2 className="text-5xl sm:text-6xl md:text-8xl font-black uppercase text-paper tracking-tighter transform lg:-rotate-90 py-8 lg:py-0">
            Projects
          </h2>
        </div>
        
        {/* Project List */}
        <div className="lg:col-span-3 grid grid-cols-1">
          {projectList.map((proj, idx) => (
            <div key={idx} className="grid grid-cols-1 lg:grid-cols-2 border-b-4 last:border-b-0 border-ink group" data-testid={`project-${idx}`}>
              
              <div className="p-6 md:p-12 border-b-4 lg:border-b-0 lg:border-r-4 border-ink flex flex-col justify-between bg-paper group-hover:bg-[#dfdcd6] transition-colors duration-500 ease-out order-2 lg:order-1">
                <div>
                  <h3 className="text-3xl md:text-5xl font-black uppercase mb-4 md:mb-6 leading-none text-ink">{proj.title}</h3>
                  <p className="text-lg md:text-xl font-bold mb-6 md:mb-8 text-ink/80">{proj.desc}</p>
                  <div className="flex flex-wrap gap-2 md:gap-3 mb-8 md:mb-12">
                    {proj.tech.map((t, i) => (
                      <span key={i} className="border-2 border-ink px-3 py-1.5 md:px-4 md:py-2 font-black text-xs md:text-sm uppercase bg-paper text-ink">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4 md:gap-6 mt-auto">
                  <a 
                    href={proj.codeLink} 
                    target={proj.isPrivate ? "_self" : "_blank"} 
                    rel="noopener noreferrer" 
                    onClick={(e) => {
                      if (proj.isPrivate) {
                        e.preventDefault();
                        Swal.fire({
                          title: 'PRIVATE REPO ',
                          text: 'Maaf, repository untuk project ini bersifat private.',
                          icon: 'info',
                          confirmButtonText: 'MENGERTI',
                          background: '#f4f0e6',
                          color: '#c11b1bff',
                          iconColor: '#0f0f0f',
                          customClass: {
                            popup: 'border-4 border-ink rounded-none shadow-brutal',
                            title: 'font-black uppercase tracking-widest text-2xl md:text-3xl',
                            htmlContainer: 'font-bold text-lg md:text-xl',
                            confirmButton: 'bg-vermillion text-paper font-black uppercase px-6 py-3 border-4 border-ink shadow-brutal hover:bg-ink hover:text-paper hover:shadow-none hover:translate-x-[4px] hover:translate-y-[4px] transition-all duration-300 ease-out rounded-none mt-4',
                          },
                          buttonsStyling: false,
                        });
                      }
                    }}
                    className="flex items-center justify-center gap-2 font-black text-lg md:text-xl uppercase hover:bg-ink hover:text-paper active:bg-ink active:text-paper px-4 py-3 md:px-6 md:py-3 border-4 border-ink shadow-brutal active:shadow-none hover:shadow-none active:translate-x-[4px] active:translate-y-[4px] hover:translate-x-[4px] hover:translate-y-[4px] transition-all duration-300 ease-out text-ink w-full sm:w-auto cursor-pointer"
                  >
                    <Terminal size={20} className="md:w-6 md:h-6" /> Code
                  </a>
                  <a 
                    href={proj.liveLink} 
                    target={proj.liveLink === '#' ? "_self" : "_blank"} 
                    rel="noopener noreferrer" 
                    onClick={(e) => {
                      if (proj.liveLink === '#') {
                        e.preventDefault();
                        Swal.fire({
                          title: 'BELUM DIHOSTING',
                          text: 'Maaf, project ini belum dihosting.',
                          icon: 'info',
                          confirmButtonText: 'MENGERTI',
                          background: '#f4f0e6',
                          color: '#c11b1bff',
                          iconColor: '#0f0f0f',
                          customClass: {
                            popup: 'border-4 border-ink rounded-none shadow-brutal',
                            title: 'font-black uppercase tracking-widest text-2xl md:text-3xl',
                            htmlContainer: 'font-bold text-lg md:text-xl',
                            confirmButton: 'bg-vermillion text-paper font-black uppercase px-6 py-3 border-4 border-ink shadow-brutal hover:bg-ink hover:text-paper hover:shadow-none hover:translate-x-[4px] hover:translate-y-[4px] transition-all duration-300 ease-out rounded-none mt-4',
                          },
                          buttonsStyling: false,
                        });
                      }
                    }}
                    className="flex items-center justify-center gap-2 font-black text-lg md:text-xl uppercase hover:bg-vermillion hover:text-paper active:bg-vermillion active:text-paper px-4 py-3 md:px-6 md:py-3 border-4 border-ink shadow-brutal active:shadow-none hover:shadow-none active:translate-x-[4px] active:translate-y-[4px] hover:translate-x-[4px] hover:translate-y-[4px] transition-all duration-300 ease-out text-ink w-full sm:w-auto cursor-pointer"
                  >
                    <ExternalLink size={20} className="md:w-6 md:h-6" /> Live
                  </a>
                </div>
              </div>

              <div className="relative overflow-hidden bg-ink p-4 md:p-12 flex items-center justify-center order-1 lg:order-2 min-h-[300px] lg:min-h-0">
                <img 
                  src={proj.img} 
                  alt={proj.title} 
                  className="w-full h-auto max-h-full object-contain transition-all duration-700 ease-out border-4 border-paper shadow-brutal" 
                />
              </div>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
