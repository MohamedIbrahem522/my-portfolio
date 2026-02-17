"use client";

import React from "react";
import { ArrowRight, Download, MousePointer2 } from "lucide-react";

const Hero = ({ lang, t, userData }: any) => {
  const isAr = lang === "ar";

  return (
    <section
      dir={isAr ? "rtl" : "ltr"}
      className="relative min-h-screen flex items-center justify-center pt-28 pb-12 px-4 sm:px-8 md:px-12 overflow-hidden bg-transparent"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center relative z-10 w-full">
        
        {/* قسم النصوص والتعريف */}
        <div className="order-2 lg:order-1 lg:col-span-7 text-center lg:text-start">
          
          {/* شارة الترحيب */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#06b6d4]/10 border border-[#06b6d4]/20 text-[#06b6d4] font-bold mb-6 text-[10px] sm:text-xs uppercase tracking-widest font-cairo">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inset-0 rounded-full bg-[#06b6d4] opacity-75"></span>
              <span className="relative h-2 w-2 rounded-full bg-[#06b6d4]"></span>
            </span>
            {t.hero.greeting}
          </div>

          {/* الاسم الرئيسي */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-[900] mb-2 leading-[1.2] text-white whitespace-normal lg:whitespace-nowrap font-cairo">
            {isAr ? (
              <>{userData.name.ar.split(" ")[0]} <span className="text-[#06b6d4]">{userData.name.ar.split(" ")[1]}</span></>
            ) : (
              <>{userData.name.en.split(" ").map((w: any, i: any) => (
                <span key={i} className={i === 1 ? "text-[#06b6d4]" : ""}>{w} </span>
              ))}</>
            )}
          </h1>

          {/* تأثير الكتابة (Typing Effect) */}
          <div className="mt-6 mb-8 w-fit mx-auto lg:mx-0 overflow-hidden">
            <p 
              className={`font-bold text-lg sm:text-xl md:text-2xl lg:text-3xl tracking-wide font-cairo text-white animate-typing whitespace-nowrap overflow-hidden 
              ${isAr ? 'border-l-4 pl-2' : 'border-r-4 pr-2'} border-[#06b6d4]`}
            >
              {isAr ? "مطور ويب متكامل | React & Node.js" : "Full Stack Developer | React & Node.js"}
            </p>
          </div>

          {/* الوصف الشخصي */}
          <div className={`text-gray-400 mb-10 max-w-2xl mx-auto lg:mx-0 text-base sm:text-lg leading-relaxed font-cairo 
            ${isAr ? "lg:border-r-4 lg:pr-6" : "lg:border-l-4 lg:pl-6"} border-[#06b6d4]`}>
            {t.hero.desc.split("|").map((line: string, idx: number) => (
              <p key={idx} className="font-medium mb-1">{line.trim()}</p>
            ))}
          </div>

          {/* أزرار التفاعل */}
          <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 sm:gap-6 font-cairo">
            <a href="#Contact" className="w-full sm:w-auto group flex items-center justify-center gap-2 bg-[#06b6d4] text-white px-8 py-4 rounded-2xl font-bold text-sm transition-all hover:scale-105 shadow-[0_10px_30px_rgba(6,182,212,0.4)]">
              {t.hero.contactBtn}
              <ArrowRight size={18} className={`${isAr ? "rotate-180 group-hover:-translate-x-1" : "group-hover:translate-x-1"} transition-transform`} />
            </a>
            <a href="/CV.pdf" className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-4 rounded-2xl border border-white/10 text-white font-bold text-sm hover:bg-white/5 transition-all">
              <Download size={18} /> {t.hero.cvBtn}
            </a>
          </div>
        </div>

        {/* قسم الصورة الشخصية مع التأثيرات */}
        <div className="order-1 lg:order-2 lg:col-span-5 flex justify-center relative">
          <div className="relative group w-64 h-80 sm:w-72 sm:h-96 md:w-[360px] md:h-[460px]">
            {/* Glow Effects */}
            <div className="absolute -inset-12 bg-[#06b6d4]/20 blur-[90px] rounded-full opacity-80 animate-pulse"></div>
            <div className="absolute -inset-1 bg-[#06b6d4] rounded-[2.6rem] blur-md opacity-40 group-hover:opacity-70 transition-all duration-500"></div>
            
            {/* Image Container */}
            <div className="relative h-full rounded-[2.5rem] overflow-hidden border border-[#06b6d4]/40 p-2 sm:p-3 bg-[#0a0a0b]/90 backdrop-blur-sm shadow-[0_0_30px_rgba(6,182,212,0.2)]">
               <div className="h-full rounded-[1.8rem] sm:rounded-[2.2rem] overflow-hidden border border-[#06b6d4]/20 relative">
                  <img 
                    src={userData.image} 
                    className="w-full h-full object-cover grayscale-[5%] group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-105" 
                    alt="Profile" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#070708] via-transparent to-transparent opacity-80"></div>
                  <div className="absolute inset-0 bg-[#06b6d4]/10 opacity-50"></div>
               </div>
            </div>

            {/* Availability Badge */}
            <div className={`absolute -bottom-6 ${isAr ? "-left-6" : "-right-6"} bg-[#0a0a0b]/95 backdrop-blur-2xl border border-[#06b6d4]/30 p-4 rounded-2xl shadow-[0_0_25px_rgba(6,182,212,0.2)] animate-float-slow z-30`}>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-[#06b6d4]/20 rounded-full flex items-center justify-center text-[#06b6d4] shadow-[0_0_20px_rgba(6,182,212,0.5)] relative">
                   <span className="animate-ping absolute h-4 w-4 rounded-full bg-[#06b6d4] opacity-50"></span>
                   <MousePointer2 size={18} className="relative z-10" />
                </div>
                <div className="font-cairo text-right">
                   <p className="text-[10px] text-gray-400 font-bold uppercase tracking-[0.2em] mb-0.5">Availability</p>
                   <p className="text-xs text-[#06b6d4] font-[900] tracking-tight drop-shadow-[0_0_8px_rgba(6,182,212,0.5)] uppercase">Ready for Work</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* الأنيميشن الخاص بالسكشن */}
      <style jsx>{`
        @keyframes typing {
          from { width: 0 }
          to { width: 105% } 
        }
        @keyframes blink-caret {
          from, to { border-color: transparent }
          50% { border-color: #06b6d4; }
        }
        .animate-typing {
          animation: 
            typing 6s steps(45, end) infinite alternate,
            blink-caret .75s step-end infinite;
        }
        @keyframes float-slow {
          0%, 100% { transform: translateY(0) rotate(0); }
          50% { transform: translateY(-12px) rotate(1deg); }
        }
        .animate-float-slow {
          animation: float-slow 4s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default Hero;