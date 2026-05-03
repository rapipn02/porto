import React from 'react';
import { Mail, Terminal, Globe, Send, ArrowUpRight } from 'lucide-react';

const Contact = () => {
  return (
    <section className="bg-paper" id="contact" data-testid="contact-section">
      <div className="grid grid-cols-1 lg:grid-cols-2">
        
        {/* Contact Info Side */}
        <div className="p-6 md:p-16 border-b-4 lg:border-b-0 lg:border-r-4 border-ink flex flex-col justify-center bg-paper">
          <h2 className="text-5xl sm:text-6xl md:text-8xl font-black uppercase mb-6 md:mb-8 leading-none tracking-tighter text-ink">Let's <br/>Talk.</h2>
          <p className="text-xl md:text-2xl font-bold mb-10 md:mb-16 max-w-md text-ink/80">
            Open for opportunities. Drop a message or find me on the terminal.
          </p>
          
          <div className="flex flex-col space-y-6 md:space-y-8">
            <a href="mailto:rafifn02@gmail.com" className="flex items-center gap-4 md:gap-6 group">
              <div className="w-14 h-14 md:w-20 md:h-20 border-4 border-ink flex items-center justify-center group-hover:bg-vermillion transition-colors bg-paper">
                <Mail className="w-6 h-6 md:w-10 md:h-10 text-ink group-hover:text-paper" />
              </div>
              <span className="text-xl sm:text-2xl md:text-3xl font-black  group-hover:text-vermillion transition-colors break-all text-ink">rafifn02@gmail.com</span>
            </a>
            <a href="https://github.com/rapipn02" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 md:gap-6 group">
              <div className="w-14 h-14 md:w-20 md:h-20 border-4 border-ink flex items-center justify-center group-hover:bg-vermillion transition-colors bg-paper">
                <Terminal className="w-6 h-6 md:w-10 md:h-10 text-ink group-hover:text-paper" />
              </div>
              <span className="text-xl sm:text-2xl md:text-3xl font-black  group-hover:text-vermillion transition-colors break-all text-ink">GitHub/rapipn02</span>
            </a>
          </div>
        </div>

        {/* Contact Form Side */}
        <div className="p-6 md:p-16 bg-vermillion flex items-center justify-center border-b-4 border-ink lg:border-b-0">
          <form className="w-full max-w-lg space-y-6 md:space-y-8" onSubmit={(e) => e.preventDefault()}>
            <div className="space-y-2 md:space-y-3">
              <label className="block text-xl md:text-2xl font-black uppercase text-ink">Name</label>
              <input type="text" className="w-full bg-paper border-4 border-ink px-4 py-3 md:px-6 md:py-4 text-lg md:text-2xl font-bold focus:outline-none shadow-brutal transition-all text-ink" placeholder="Mamat" />
            </div>
            <div className="space-y-2 md:space-y-3">
              <label className="block text-xl md:text-2xl font-black uppercase text-ink">Email</label>
              <input type="email" className="w-full bg-paper border-4 border-ink px-4 py-3 md:px-6 md:py-4 text-lg md:text-2xl font-bold focus:outline-none shadow-brutal transition-all text-ink" placeholder="mamat@gmail.com" />
            </div>
            <div className="space-y-2 md:space-y-3">
              <label className="block text-xl md:text-2xl font-black uppercase text-ink">Message</label>
              <textarea rows="4" className="w-full bg-paper border-4 border-ink px-4 py-3 md:px-6 md:py-4 text-lg md:text-2xl font-bold focus:outline-none shadow-brutal transition-all resize-none text-ink" placeholder="YOUR MESSAGE"></textarea>
            </div>
            <button className="w-full bg-ink text-paper border-4 border-ink font-black text-xl md:text-3xl uppercase py-4 md:py-6 flex items-center justify-center gap-3 md:gap-4 hover:bg-paper hover:text-ink active:bg-paper active:text-ink shadow-brutal active:shadow-none hover:shadow-none active:translate-x-[4px] active:translate-y-[4px] hover:translate-x-[4px] hover:translate-y-[4px] transition-all">
              Submit <Send size={24} className="md:w-8 md:h-8" />
            </button>
          </form>
        </div>

      </div>
      
      {/* Professional Footer */}
      <div className="border-t-4 border-ink bg-paper">
        <div className="max-w-7xl mx-auto px-6 md:px-16 py-8 md:py-12 flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8">
          
          <div className="flex flex-col">
            <span className="text-3xl md:text-4xl font-black uppercase tracking-tighter text-ink">RAFIF.</span>
            <span className="text-ink/60 font-bold uppercase tracking-widest mt-2 text-sm md:text-base">Backend Engineer</span>
          </div>

          <div className="flex flex-wrap gap-6 md:gap-8">
            <a href="https://www.linkedin.com/in/naufal-rafiif-irwan-5a4276288" target="_blank" rel="noopener noreferrer" className="text-base md:text-lg font-bold uppercase text-ink hover:text-vermillion active:text-vermillion transition-colors flex items-center gap-1">
              LinkedIn <ArrowUpRight size={18} />
            </a>
            <a href="https://github.com/rapipn02" target="_blank" rel="noopener noreferrer" className="text-base md:text-lg font-bold uppercase text-ink hover:text-vermillion active:text-vermillion transition-colors flex items-center gap-1">
              GitHub <ArrowUpRight size={18} />
            </a>
            <a href="#projects" className="text-base md:text-lg font-bold uppercase text-ink hover:text-vermillion active:text-vermillion transition-colors flex items-center gap-1">
              Resume <ArrowUpRight size={18} />
            </a>
          </div>

        </div>
        <div className="bg-ink text-paper text-center py-4 md:py-6 border-t-4 border-ink">
          <p className="text-sm md:text-xl font-bold uppercase tracking-widest">&copy; {new Date().getFullYear()} COPYRIGHT ALL RESERVED.</p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
