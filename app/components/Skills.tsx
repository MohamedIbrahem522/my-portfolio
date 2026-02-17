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

  // مراقبة السكشن عند التمرير لتشغيل الأنيميشن
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.2 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  // محتوى المهارات والترجمة
  const content = {
    en: {
      tag: "MY EXPERTISE",
      title: "Tech",
      highlight: "Stack",
      groups: [
        { 
          title: "Frontend", 
          icon: <Monitor size={24} />, 
          skills: ["HTML5", "CSS3", "JavaScript", "TypeScript", "React.js", "Next.js", "Tailwind CSS"] 
        },
        { 
          title: "Backend", 
          icon: <Database size={24} />, 
          skills: ["Node.js", "Express.js", "MongoDB", "MySQL", "JWT", "Socket.io"] 
        },
        { 
          title: "AI & Tools", 
          icon: <Cpu size={24} />, 
          skills: ["YOLO v8", "OpenCV", "Python", "Numpy & Pandas", "Git & GitHub", "REST APIs", "Postman"] 
        }
      ]
    },
    ar: {
      tag: "خبراتي التقنية",
      title: "المهارات",
      highlight: "التقنية",
      groups: [
        { 
          title: "تطوير الواجهات", 
          icon: <Monitor size={24} />, 
          skills: ["HTML5", "CSS3", "JavaScript", "TypeScript", "React.js", "Next.js", "Tailwind CSS"] 
        },
        { 
          title: "الأنظمة الخلفية", 
          icon: <Database size={24} />, 
          skills: ["Node.js", "Express.js", "MongoDB", "MySQL", "JWT", "Socket.io"] 
        },
        { 
          title: "الذكاء الاصطناعي", 
          icon: <Cpu size={24} />, 
          skills: ["YOLO v8", "OpenCV", "Python", "Numpy & Pandas", "Git & GitHub", "REST APIs", "Postman"] 
        }
      ]
    }
  };

  const t = content[lang];

  return (
    <section 
      id="Skills" 
      ref={sectionRef}
      className={`relative w-full bg-transparent pt-24 pb-16 px-6 overflow-hidden ${isAr ? 'font-cairo' : ''}`} 
      dir={isAr ? 'rtl' : 'ltr'}
    >
      <div className="max-w-7xl mx-auto text-center relative z-10">
        
        {/* شارة التخصص */}
        <div className={`inline-flex items-center gap-2 px-5 py-2 rounded-full bg-[#06b6d4]/5 border border-[#06b6d4]/20 mb-4 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <Terminal size={14} className="text-[#06b6d4]" />
          <span className="text-[#06b6d4] text-[10px] md:text-xs font-black tracking-[0.25em] uppercase">
            {t.tag}
          </span>
        </div>

        {/* العنوان الرئيسي */}
        <h2 className={`font-bold mb-20 tracking-tight text-white transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'} ${isAr ? 'text-3xl md:text-5xl' : 'text-4xl md:text-6xl'}`}>
          {t.title} <span className="text-[#06b6d4]">{t.highlight}</span>
        </h2>

        {/* شبكة توزيع الكروت */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {t.groups.map((group, idx) => (
            <div 
              key={idx} 
              style={{ transitionDelay: `${(idx + 3) * 200}ms` }}
              className={`group relative bg-[#0a0a0b] border border-[#06b6d4]/20 rounded-[2.5rem] p-10 
                transition-all duration-500 ease-in-out
                ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}
                hover:-translate-y-3 hover:scale-[1.01] hover:border-[#06b6d4]/50 
                hover:shadow-[0_15px_50px_-10px_rgba(6,182,212,0.3)]
                overflow-hidden`}
            >
              {/* تأثير التوهج عند المرور */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#06b6d4]/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              {/* الأيقونة */}
              <div className="w-16 h-16 rounded-2xl bg-[#06b6d4]/10 border border-[#06b6d4]/20 flex items-center justify-center text-[#06b6d4] mb-8 mx-auto md:mx-0 group-hover:scale-110 group-hover:shadow-[0_0_20px_rgba(6,182,212,0.4)] transition-all duration-500">
                {group.icon}
              </div>

              {/* عنوان المجموعة */}
              <h3 className={`text-2xl text-white font-bold mb-8 group-hover:text-[#06b6d4] transition-colors duration-500 ${isAr ? 'text-right' : 'text-left'}`}>
                {group.title}
              </h3>

              {/* قائمة المهارات (Tags) */}
              <div className={`flex flex-wrap gap-2 ${isAr ? 'justify-start' : 'justify-start'}`}>
                {group.skills.map((skill, i) => (
                  <span 
                    key={i} 
                    className="px-4 py-2 rounded-xl bg-white/[0.03] border border-[#06b6d4]/20 text-gray-400 text-[11px] font-bold 
                    hover:bg-[#06b6d4]/20 hover:text-white hover:border-[#06b6d4] 
                    hover:shadow-[0_0_15px_rgba(6,182,212,0.7)] transition-all duration-300 cursor-default"
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