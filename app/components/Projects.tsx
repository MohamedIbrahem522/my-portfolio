"use client";
import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import { Github, GraduationCap, Layers, Code2, Film, Rocket, School } from "lucide-react";

const Projects = ({ lang }: { lang: "ar" | "en" }) => {
  const isAr = lang === "ar";
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const handleScroll = () => {
    if (scrollRef.current && window.innerWidth < 768) {
      const { scrollLeft, offsetWidth } = scrollRef.current;
      const index = Math.round(Math.abs(scrollLeft) / (offsetWidth * 0.85));
      setActiveIndex(index);
    }
  };

  const data = {
    en: {
      tag: "MY PROJECTS",
      title: "FEATURED",
      highlight: "WORKS",
      projects: [
        { title: "Graduation Project (YOLOv8)", category: "Computer Vision", tech: ["Python", "FastAPI", "YOLOv8"], icon: <GraduationCap size={22} />, desc: "Real-time object detection app with Arabic translations for class names. Awarded A+ Grade." },
        { title: "E-Commerce Platform", category: "Full-Stack Solution", tech: ["Node.js", "Express.js", "MongoDB", "MySQL"], icon: <Layers size={22} />, desc: "Full-featured market with secure authentication, product management, and payment flows." },
        { title: "PC-Store", category: "User Experience", tech: ["React.js", "HTML", "CSS", "Bootstrap"], icon: <Code2 size={22} />, desc: "Premium computer parts store featuring dynamic browsing and high-performance UI." },
        { title: "MO Movie Hub", category: "Modern Web App", tech: ["Next.js", "Tailwind CSS", "API"], icon: <Film size={22} />, desc: "Cinematic dashboard with real-time data fetching and optimized user journey." },
        { title: "Digital Book Store", category: "System Logic", tech: ["HTML", "CSS", "Bootstrap", "Email.js"], icon: <Rocket size={22} />, desc: "Interactive bookstore with purchasing workflows and automated email notifications." },
        { title: "Eduford Portal", category: "E-Learning Portal", tech: ["HTML", "CSS", "Bootstrap", "JS"], icon: <School size={22} />, desc: "Modern educational platform with responsive design and interactive dynamic content." }
      ]
    },
    ar: {
      tag: "مـشـاريـعـي",
      title: "أبـرز",
      highlight: "الأعـمـال",
      projects: [
        { title: "مشروع التخرج (YOLOv8)", category: "رؤية حاسوبية", tech: ["Python", "FastAPI", "YOLOv8"], icon: <GraduationCap size={22} />, desc: "تطبيق للكشف عن الأشياء في الوقت الفعلي مع ترجمة عربية، حاصل على تقدير ممتاز +A." },
        { title: "منصة التجارة الإلكترونية", category: "حلول برمجية متكاملة", tech: ["Node.js", "Express.js", "MongoDB", "MySQL"], icon: <Layers size={22} />, desc: "منصة متكاملة مع مصادقة آمنة، إدارة المنتجات، ومعالجة عمليات الدفع المتقدمة." },
        { title: "متجر الحاسوب PC-Store", category: "تجربة المستخدم", tech: ["React.js", "HTML", "CSS", "Bootstrap"], icon: <Code2 size={22} />, desc: "سوق أجهزة كمبيوتر متميز يركز على تجربة المستخدم والأداء العالي للواجهات." },
        { title: "منصة MO Movie", category: "تطبيقات الويب الحديثة", tech: ["Next.js", "Tailwind CSS", "API"], icon: <Film size={22} />, desc: "مجمع بيانات سينمائي يوفر تجربة استكشاف سلسة واحترافية لعشاق الأفلام." },
        { title: "متجر الكتب الرقمي", category: "أنظمة الأتمتة", tech: ["HTML", "CSS", "Bootstrap", "Email.js"], icon: <Rocket size={22} />, desc: "متجر إلكتروني متكامل يدعم عمليات شراء والمراسلة الفورية مع المستخدمين." },
        { title: "بوابة Eduford التعليمية", category: "منصات التعليم الذكي", tech: ["HTML", "CSS", "Bootstrap", "JS"], icon: <School size={22} />, desc: "تطبيق ويب متجاوب تم تطويره بمحتوى ديناميكي وميزات تفاعلية متطورة." }
      ]
    }
  };

  const t = data[lang];

  return (
    /* تم استبدال bg-[#020202] بـ bg-transparent */
    <section id="Projects" className="py-20 md:py-32 bg-transparent relative overflow-hidden" dir={isAr ? "rtl" : "ltr"}>
      
      {/* تم حذف Background Glows (div التوهجات) من هنا لضمان ظهور النقط المتحركة بوضوح */}

      <div className="max-w-7xl mx-auto px-5 md:px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-16 md:mb-24">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2 mb-4 px-4 py-1.5 rounded-full border border-cyan-500/30 bg-cyan-500/10"
          >
             <Code2 size={14} className="text-cyan-400" />
             <span className="text-cyan-400 text-[10px] md:text-xs font-bold uppercase tracking-[0.3em]">{t.tag}</span>
          </motion.div>
          <h2 className="text-4xl md:text-6xl text-white font-bold tracking-tighter">
            {t.title} <span className="text-cyan-500 drop-shadow-[0_0_20px_rgba(6,182,212,0.6)]">{t.highlight}</span>
          </h2>
        </div>

        <div 
          ref={scrollRef}
          onScroll={handleScroll}
          className="flex md:grid md:grid-cols-3 overflow-x-auto md:overflow-visible no-scrollbar snap-x snap-mandatory gap-8 md:gap-10 pb-10 md:pb-0"
        >
          {t.projects.map((project, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="min-w-[85vw] md:min-w-full snap-center group relative h-full"
            >
              <div className="absolute inset-0 bg-cyan-500/10 blur-2xl rounded-[2.5rem] opacity-60 md:group-hover:opacity-100 md:group-hover:bg-cyan-500/20 transition-all duration-700"></div>
              
              <div className="relative flex flex-col h-full bg-[#080808]/90 backdrop-blur-2xl border border-cyan-500/30 rounded-[2.5rem] p-8 transition-all duration-500 md:group-hover:border-cyan-500 md:group-hover:shadow-[0_0_40px_rgba(6,182,212,0.3)] md:group-hover:-translate-y-3 overflow-hidden">
                
                <div className="mb-6 flex items-center gap-2">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
                  </span>
                  <span className="text-[10px] font-black text-cyan-400/80 tracking-[0.15em] uppercase">{project.category}</span>
                </div>

                <div className="relative mb-6">
                  <div className="absolute inset-0 bg-cyan-500/20 blur-xl rounded-full opacity-50"></div>
                  <div className="relative w-14 h-14 bg-black border border-cyan-500/40 rounded-2xl flex items-center justify-center text-cyan-400 md:group-hover:text-black md:group-hover:bg-cyan-500 transition-all duration-500 shadow-[0_0_20px_rgba(6,182,212,0.2)]">
                    {project.icon}
                  </div>
                </div>

                <div className="flex-grow text-start">
                  <h3 className="text-2xl text-white font-bold mb-4 md:group-hover:text-cyan-400 transition-colors leading-tight">{project.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed mb-8 font-medium opacity-80 md:group-hover:opacity-100">{project.desc}</p>
                </div>

                <div className="flex flex-wrap gap-2 mb-10 mt-auto">
                  {project.tech.map((tag, i) => (
                    <span key={i} className="px-3 py-1 bg-cyan-500/5 border border-cyan-500/20 rounded-lg text-[10px] text-cyan-200/70 font-bold md:group-hover:border-cyan-500/50 md:group-hover:text-cyan-100 transition-all">{tag}</span>
                  ))}
                </div>

                <div className="pt-6 border-t border-white/10">
                  <a href="https://github.com/MohamedIbrahem522" target="_blank" rel="noopener noreferrer" className="flex items-center justify-between group/btn w-full px-2">
                    <span className="text-[11px] font-black text-gray-500 md:group-hover/btn:text-cyan-400 transition-colors tracking-widest uppercase">View Project</span>
                    <div className="w-10 h-10 rounded-full bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 md:group-hover/btn:bg-cyan-500 md:group-hover/btn:text-black transition-all duration-500 md:group-hover/btn:rotate-[360deg]">
                      <Github size={18} />
                    </div>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="flex md:hidden justify-center gap-2 mt-2">
          {t.projects.map((_, i) => (
            <div 
              key={i}
              className={`h-1.5 transition-all duration-300 rounded-full ${
                activeIndex === i ? "w-8 bg-cyan-500 shadow-[0_0_10px_rgba(6,182,212,0.8)]" : "w-2 bg-white/20"
              }`}
            />
          ))}
        </div>
      </div>

      <style jsx global>{`
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
    </section>
  );
};

export default Projects;