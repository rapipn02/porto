import React from 'react';
import myPhoto from '../../assets/foto.JPG';

const Hero = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center px-4 md:px-12 border-b-4 border-ink bg-paper relative overflow-hidden" data-testid="hero-section">
      
      {/* Decorative Ornaments (v1 - commented out) */}
      {/* <div className="absolute top-20 right-8 md:top-32 md:right-24 w-12 h-12 md:w-16 md:h-16 border-4 border-ink bg-paper shadow-brutal transform rotate-12 pointer-events-none hidden sm:block z-0"></div> */}
      {/* <div className="absolute top-[35%] md:top-[42%] left-2 md:left-1 w-16 h-16 md:w-24 md:h-24 border-4 border-ink rounded-full bg-paper shadow-brutal pointer-events-none hidden sm:block z-0"></div> */}
      {/* <div className="absolute bottom-8 md:bottom-12 left-1/2 w-8 h-8 md:w-12 md:h-12 border-4 border-ink bg-paper shadow-brutal transform -translate-x-1/2 -rotate-45 pointer-events-none hidden sm:block z-0"></div> */}

      {/* Decorative Ornaments (v2) */}
      {/* 1. Cross Shape */}
      <div className="absolute top-24 right-1 md:top-36 md:right-24 w-12 h-12 md:w-16 md:h-16 hidden sm:flex items-center justify-center pointer-events-none z-0 transform rotate-12 opacity-80">
        <div className="absolute w-full h-3 md:h-4 bg-ink"></div>
        <div className="absolute h-full w-3 md:h-4 bg-ink"></div>
      </div>
      
      {/* 2. Dots Grid */}
      <div className="absolute top-[35%] md:top-[42%] left-1 md:left-1 w-15 h-15 md:w-20 md:h-20 hidden sm:grid grid-cols-3 gap-2 md:gap-3 pointer-events-none z-0 opacity-80">
        {[...Array(9)].map((_, i) => (
          <div key={i} className="w-full h-full border-[3px] border-ink bg-vermillion rounded-full"></div>
        ))}
      </div>

      {/* 3. Pill Shape */}
      <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 w-32 h-6 md:w-48 md:h-8 border-4 border-ink bg-paper shadow-brutal rounded-full pointer-events-none hidden sm:block z-0"></div>

      <div className="max-w-7xl mx-auto w-full mt-12 md:mt-16 relative z-10">
        
        <p className="text-lg md:text-2xl font-bold  tracking-widest mb-2 md:mb-4 text-ink">Haloo, saya</p>
        
        {/* Giant Editorial Typography */}
        <h1 className="text-[12vw] md:text-[8vw] leading-none font-black tracking-tighter uppercase mb-8 md:mb-12 break-words border-b-[6px] md:border-b-8 border-ink py-2 md:py-4 text-ink">
          Naufal Rafiif Irwan
        </h1>
        
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-8 md:gap-12 pb-12 md:pb-16">
          <div className="max-w-2xl w-full">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase leading-tight mb-12 md:mt-5 text-ink">
              A Backend Developer <br className="hidden sm:block"/> <span className="text-vermillion bg-ink text-paper px-2 leading-snug">Building Scalable Systems.</span>
            </h2>
            
            <div className="flex flex-col sm:flex-row gap-4 md:gap-6 w-full sm:w-auto">
              <button onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })} className="w-full sm:w-auto px-6 py-4 md:px-8 md:py-4 bg-vermillion text-paper border-4 border-ink font-black text-xl md:text-2xl uppercase shadow-brutal active:shadow-none hover:shadow-brutal-hover active:translate-x-[4px] active:translate-y-[4px] hover:translate-x-[4px] hover:translate-y-[4px] transition-all duration-300 ease-out rounded-none text-center">
                View Projects
              </button>
              <button onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })} className="w-full sm:w-auto px-6 py-4 md:px-8 md:py-4 bg-paper text-ink border-4 border-ink font-black text-xl md:text-2xl uppercase shadow-brutal active:shadow-none hover:shadow-brutal-hover active:translate-x-[4px] active:translate-y-[4px] hover:translate-x-[4px] hover:translate-y-[4px] transition-all duration-300 ease-out rounded-none text-center">
                Resume
              </button>
            </div>
          </div>
          
          {/* Portrait Image */}
          <div className="w-full lg:w-80 h-64 sm:h-80 md:h-96 bg-paper border-4 border-ink shadow-brutal relative group overflow-hidden flex items-center justify-center mt-4 lg:mt-0">
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 mix-blend-multiply z-10 pointer-events-none"></div>
            <img 
              src={myPhoto} 
              alt="Rafif" 
              className="w-full h-full object-cover grayscale contrast-125 lg:group-hover:grayscale-0 lg:group-hover:contrast-100 transition-all duration-700 ease-out"
            />
          </div>
          
        </div>
        
      </div>
    </section>
  );
};

export default Hero;
