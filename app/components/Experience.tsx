"use client";
import React, { useEffect, useState, useRef } from "react";
import { Briefcase, GraduationCap, Calendar, Users, Code, Server } from "lucide-react";

const Experience = ({ lang }: { lang: "ar" | "en" }) => {
  const isAr = lang === "ar";
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { 
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 } 
    );
    
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const data = {
    en: {
      tag: "MY JOURNEY",
      title: "Education &",
      highlight: "Experience",
      items: [
        { title: "Bachelor of Computer Science", subtitle: "Higher Technological Institute (HTI)", date: "2020 - May 2024", desc: "Comprehensive study covering software development, algorithms, data structures, database management, computer architecture, operating systems, networking, and cybersecurity.", icon: <GraduationCap size={16} /> },
        { title: "Front-End Development Diploma", subtitle: "Route Academy", date: "Jun 2022 - Oct 2022", desc: "Focus: Modern front-end technologies, responsive design, user interface optimization, and web performance enhancements.", icon: <Code size={16} /> },
        { title: "Back-End Development Diploma", subtitle: "Route Academy", date: "May 2023 - Sep 2023", desc: "Focus: Server-side development, API design and implementation, database management, and backend architecture.", icon: <Server size={16} /> },
        { title: "Summer Internship (Front-End)", subtitle: "ITI, Egypt", date: "Aug 2024 - Sep 2024", desc: "Worked on developing and optimizing front-end features for web applications, including designing and styling user interfaces, improving performance, and enhancing user experience.", icon: <Briefcase size={16} /> },
        { title: "Node.js Instructor", subtitle: "GDSC Damanhour University", date: "2023 - 2024", desc: "Delivered Node.js workshops and backend basics, introduced REST APIs and backend concepts, and mentored students during technical sessions.", icon: <Users size={16} /> }
      ]
    },
    ar: {
      tag: "مسيرتي",
      title: "التعليم و",
      highlight: "الخبرة",
      items: [
        { title: "بكالوريوس علوم الحاسب", subtitle: "المعهد التكنولوجي العالي (HTI)", date: "2020 - مايو 2024", desc: "دراسة شاملة تغطي تطوير البرمجيات، الخوارزميات، هياكل البيانات، إدارة قواعد البيانات، هندسة الحاسوب، أنظمة التشغيل، الشبكات، والأمن السيبراني.", icon: <GraduationCap size={16} /> },
        { title: "دبلومة تطوير الواجهات الأمامية", subtitle: "أكاديمية Route", date: "يونيو 2022 - أكتوبر 2022", desc: "التركيز على تقنيات الواجهات الأمامية الحديثة، التصميم المتجاوب، تحسين واجهة المستخدم، وتعزيز أداء الويب.", icon: <Code size={16} /> },
        { title: "دبلومة تطوير الأنظمة الخلفية", subtitle: "أكاديمية Route", date: "مايو 2023 - سبتمبر 2023", desc: "التركيز على تطوير جانب الخادم، تصميم وتنفيذ الـ APIs، إدارة قواعد البيانات، وهندسة الأنظمة الخلفية.", icon: <Server size={16} /> },
        { title: "تدريب صيفي في تطوير الواجهات", subtitle: "ITI، مصر", date: "أغسطس 2024 - سبتمبر 2024", desc: "العمل على تطوير وتحسين ميزات الواجهة الأمامية لتطبيقات الويب، بما في ذلك تصميم وتنسيق واجهات المستخدم، وتحسين الأداء، وتعزيز تجربة المستخدم.", icon: <Briefcase size={16} /> },
        { title: "مدرب Node.js", subtitle: "GDSC جامعة دمنهور", date: "2023 - 2024", desc: "تقديم ورش عمل Node.js وأساسيات الأنظمة الخلفية، والتعريف بمفاهيم REST APIs وتوجيه الطلاب خلال الجلسات التقنية.", icon: <Users size={16} /> }
      ]
    }
  };

  const t = data[lang];

  return (
    <section 
      ref={sectionRef}
      id="Experience"
      className={`relative w-full py-16 px-4 sm:px-6 overflow-hidden ${isAr ? 'font-cairo' : ''}`}
      dir={isAr ? 'rtl' : 'ltr'}
    >
      <div className="max-w-4xl mx-auto relative z-10">
        
        <div className="text-center mb-12">
          <div className={`flex justify-center transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            <span className="px-5 py-1.5 rounded-full border border-[#06b6d4]/30 bg-[#06b6d4]/5 text-[#06b6d4] text-[10px] font-black tracking-[0.3em] uppercase mb-4 backdrop-blur-sm">
              {t.tag}
            </span>
          </div>

          <h2 className={`text-2xl md:text-5xl text-white font-bold transition-all duration-1000 delay-300 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            {t.title} <span className="text-[#06b6d4] drop-shadow-[0_0_12px_rgba(6,182,212,0.7)]">{t.highlight}</span>
          </h2>
        </div>

        <div className="relative">
          <div className={`absolute top-0 bottom-0 w-[1px] bg-gradient-to-b from-transparent via-[#06b6d4]/60 to-transparent transition-all duration-[1500ms] delay-500 origin-top ${isVisible ? 'scale-y-100 opacity-100' : 'scale-y-0 opacity-0'} ${isAr ? 'right-[18px] md:right-1/2' : 'left-[18px] md:left-1/2'}`}></div>

          {t.items.map((item, idx) => (
            <div 
              key={idx} 
              className={`relative flex items-center justify-between mb-10 w-full transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
              style={{ transitionDelay: `${(idx + 1) * 300}ms` }}
            >
              <div className={`absolute w-3 h-3 rounded-full bg-[#050505] border-2 border-[#06b6d4] z-20 shadow-[0_0_10px_#06b6d4] 
                ${isAr ? 'right-[12px] md:right-1/2 md:translate-x-1/2' : 'left-[12px] md:left-1/2 md:-translate-x-1/2'}`}></div>

              <div className={`w-full md:w-[45%] 
                ${idx % 2 === 0 
                  ? (isAr ? 'md:ml-auto pr-10 md:pr-0 md:pl-10' : 'md:mr-auto pl-10 md:pl-0 md:pr-10') 
                  : (isAr ? 'md:mr-auto pr-10 md:pr-10' : 'md:ml-auto pl-10 md:pl-10')}`}>
                
                {/* تم إضافة الـ Active هنا للموبايل والـ Hover للكمبيوتر */}
                <div className={`group relative bg-[#0a0a0b] border border-[#06b6d4]/40 p-5 rounded-[1.5rem] transition-all duration-300 
                  shadow-[0_0_20px_rgba(6,182,212,0.2)] 
                  
                  /* أكشن الكمبيوتر */
                  hover:shadow-[0_0_45px_rgba(6,182,212,0.5)] hover:border-[#06b6d4] hover:-translate-y-1
                  
                  /* أكشن الموبايل عند اللمس */
                  active:scale-95 active:shadow-[0_0_30px_rgba(6,182,212,0.6)] active:border-[#06b6d4] active:duration-75`}>
                  
                  <div className="relative z-10">
                    <div className="flex items-center gap-2 text-[#06b6d4] text-[10px] font-bold mb-2">
                      <Calendar size={12} />
                      <span>{item.date}</span>
                      <div className={`bg-[#06b6d4]/10 p-1.5 rounded-lg border border-[#06b6d4]/20 ${isAr ? 'mr-auto' : 'ml-auto'}`}>
                        {item.icon}
                      </div>
                    </div>

                    <h3 className="text-base md:text-lg text-white font-bold mb-1 group-hover:text-[#06b6d4] transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-[#06b6d4]/90 text-[11px] font-semibold mb-2">
                      {item.subtitle}
                    </p>
                    <p className="text-gray-400 text-[11px] leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;