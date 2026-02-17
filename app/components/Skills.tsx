"use client";

import React, { useEffect, useState, useRef } from "react";
import { Monitor, Database, Cpu, Terminal } from "lucide-react";

interface SkillsProps {
  lang: "ar" | "en";
}

const Skills = ({ lang }: SkillsProps) => {
  const isAr = lang === "ar";
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setIsVisible(true); },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const content = {
    en: {
      tag: "MY EXPERTISE",
      title: "Tech",
      highlight: "Stack",
      groups: [
        { title: "Frontend", icon: <Monitor size={22} />, skills: ["HTML5", "CSS3", "JavaScript", "TypeScript", "React.js", "Next.js", "Tailwind CSS"] },
        { title: "Backend", icon: <Database size={22} />, skills: ["Node.js", "Express.js", "MongoDB", "MySQL", "JWT", "Socket.io"] },
        { title: "AI & Tools", icon: <Cpu size={22} />, skills: ["YOLO v8", "OpenCV", "Python", "Numpy & Pandas", "Git & GitHub", "REST APIs", "Postman"] }
      ]
    },
    ar: {
      tag: "خبراتي التقنية",
      title: "المهارات",
      highlight: "التقنية",
      groups: [
        { title: "تطوير الواجهات", icon: <Monitor size={22} />, skills: ["HTML5", "CSS3", "JavaScript", "TypeScript", "React.js", "Next.js", "Tailwind CSS"] },
        { title: "الأنظمة الخلفية", icon: <Database size={22} />, skills: ["Node.js", "Express.js", "MongoDB", "MySQL", "JWT", "Socket.io"] },
        { title: "الذكاء الاصطناعي", icon: <Cpu size={22} />, skills: ["YOLO v8", "OpenCV", "Python", "Numpy & Pandas", "Git & GitHub", "REST APIs", "Postman"] }
      ]
    }
  };

  const t = content[lang];

  return (
    <section 
      id="Skills" 
      ref={sectionRef}
      className={`relative w-full bg-transparent pt-20 pb-16 px-4 sm:px-6 overflow-hidden ${isAr ? 'font-cairo' : ''}`} 
      dir={isAr ? 'rtl' : 'ltr'}
    >
      <div className="max-w-7xl mx-auto text-center relative z-10">
        
        {/* Badge */}
        <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#06b6d4]/5 border border-[#06b6d4]/20 mb-4 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <Terminal size={12} className="text-[#06b6d4]" />
          <span className="text-[#06b6d4] text-[9px] md:text-xs font-black tracking-[0.2em] uppercase">{t.tag}</span>
        </div>

        {/* Title */}
        <h2 className={`font-bold mb-12 md:mb-20 tracking-tight text-white transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'} ${isAr ? 'text-3xl md:text-5xl' : 'text-4xl md:text-6xl'}`}>
          {t.title} <span className="text-[#06b6d4] drop-shadow-[0_0_15px_rgba(6,182,212,0.5)]">{t.highlight}</span>
        </h2>

        {/* Responsive Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {t.groups.map((group, idx) => (
            <div 
              key={idx} 
              style={{ transitionDelay: `${(idx + 1) * 150}ms` }}
              className={`group relative bg-[#0a0a0b]/80 backdrop-blur-sm rounded-[2rem] md:rounded-[2.5rem] p-8 md:p-10 
                transition-all duration-500 ease-out
                ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}
                
                /* إطار نيون ثابت خفيف */
                border border-[#06b6d4]/20
                shadow-[0_0_15px_rgba(6,182,212,0.05)]

                /* الأكشن: رفع الكارت + توهج الإطار */
                hover:-translate-y-4 hover:border-[#06b6d4]/70 
                hover:shadow-[0_20px_40px_-15px_rgba(6,182,212,0.3),0_0_25px_rgba(6,182,212,0.2),inset_0_0_15px_rgba(6,182,212,0.1)]
                
                /* موبايل أكشن */
                active:scale-95 active:duration-150
                overflow-hidden cursor-default`}
            >
              {/* Radial Glow Effect */}
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(6,182,212,0.1),transparent_70%)] opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>

              {/* Icon Container */}
              <div className="w-14 h-14 md:w-16 md:h-16 rounded-xl md:rounded-2xl bg-[#06b6d4]/10 border border-[#06b6d4]/20 flex items-center justify-center text-[#06b6d4] mb-6 md:mb-8 transition-all duration-500 relative z-10 group-hover:bg-[#06b6d4] group-hover:text-black group-hover:shadow-[0_0_25px_rgba(6,182,212,0.5)]">
                {group.icon}
              </div>

              {/* Group Title */}
              <h3 className={`text-xl md:text-2xl text-white font-bold mb-6 group-hover:text-[#06b6d4] transition-colors duration-500 relative z-10 ${isAr ? 'text-right' : 'text-left'}`}>
                {group.title}
              </h3>

              {/* Skills Tags */}
              <div className={`flex flex-wrap gap-2 relative z-10 ${isAr ? 'justify-start' : 'justify-start'}`}>
                {group.skills.map((skill, i) => (
                  <span 
                    key={i} 
                    className="px-3 py-1.5 md:px-4 md:py-2 rounded-lg md:rounded-xl bg-white/[0.03] border border-white/5 text-gray-400 text-[10px] md:text-[11px] font-bold transition-all duration-300
                    hover:!border-[#06b6d4]/50 hover:!text-white hover:bg-[#06b6d4]/10 hover:shadow-[0_0_10px_rgba(6,182,212,0.3)]"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;